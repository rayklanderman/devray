import { NextRequest, NextResponse } from 'next/server';
import { DEVRAY_SYSTEM_PROMPT } from '@/lib/devray-prompt';

export const runtime = 'nodejs';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const ALLOWED_ROLES = new Set(['user', 'assistant']);

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Best-effort per-instance rate limit.
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 40;

function clientIp(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown';
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function normalizeMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0 || input.length > 40) return null;

  const messages: ChatMessage[] = [];
  let totalCharacters = 0;

  for (const item of input) {
    if (typeof item !== 'object' || item === null) return null;
    const record = item as Record<string, unknown>;
    const role = record.role;
    const content = record.content;

    if (typeof role !== 'string' || !ALLOWED_ROLES.has(role)) return null;
    if (typeof content !== 'string') return null;

    const trimmed = content.trim();
    if (trimmed.length === 0 || trimmed.length > 8000) return null;

    totalCharacters += trimmed.length;
    if (totalCharacters > 30000) return null;

    messages.push({ role: role as ChatMessage['role'], content: trimmed });
  }

  if (!messages.some((message) => message.role === 'user')) return null;
  return messages;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'AI chat is not configured. Please use the project inquiry form or email info@devray.qzz.io.' },
        { status: 503 }
      );
    }

    const ip = clientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many chat requests. Please wait a few minutes and try again.' },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const messages = normalizeMessages((body as Record<string, unknown>).messages);
    if (!messages) {
      return NextResponse.json(
        { error: 'The conversation payload is invalid or too large.' },
        { status: 400 }
      );
    }

    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [{ role: 'system', content: DEVRAY_SYSTEM_PROMPT }, ...messages],
        temperature: 0.6,
        max_tokens: 1500,
        top_p: 0.9,
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      console.error('Groq request failed with status', response.status);
      return NextResponse.json(
        { error: 'The assistant is temporarily unavailable. Please try again or use the inquiry form.' },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'The assistant returned an empty response. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Chat API error:', error instanceof Error ? error.name : 'Unknown error');
    return NextResponse.json(
      { error: 'The assistant could not process the request. Please try again or email info@devray.qzz.io.' },
      { status: 500 }
    );
  }
}

