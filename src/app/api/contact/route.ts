import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const FORMSPREE_ENDPOINT =
  process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/mqeebboy';

const SERVICE_LABELS: Record<string, string> = {
  '': 'Not specified',
  ai: 'AI Applications & Automation',
  web: 'Web Platforms & SaaS',
  mobile: 'Mobile Applications',
  data: 'Data Analytics & Applied ML',
  other: 'Other / not sure yet',
};

const BUDGET_LABELS = new Set([
  '',
  'Small pilot',
  'Standard build',
  'Larger programme',
  'Not sure yet',
  'Prefer to discuss',
]);

const TIMEFRAME_LABELS = new Set([
  '',
  'As soon as possible',
  'Within 1–3 months',
  '3–6 months',
  'Just exploring',
  'Prefer to discuss',
]);

// Best-effort, per-instance rate limit. Serverless instances are not shared,
// so this is a speed bump rather than a guarantee.
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

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

function asString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin && host) {
      let originHost = '';
      try {
        originHost = new URL(origin).host;
      } catch {
        originHost = '';
      }
      if (originHost && originHost !== host) {
        return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
      }
    }

    const ip = clientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many inquiries from this connection. Please try again later or email info@devray.qzz.io.' },
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

    const data = body as Record<string, unknown>;
    const name = asString(data.name);
    const email = asString(data.email);
    const organization = asString(data.organization);
    const service = asString(data.service);
    const budget = asString(data.budget);
    const timeframe = asString(data.timeframe);
    const message = asString(data.message);
    const source = asString(data.source).slice(0, 120);
    const website = asString(data.website);
    const consent = data.consent === true;

    // Honeypot: a real person never fills this hidden field.
    if (website) {
      return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 });
    }

    const errors: Record<string, string> = {};

    if (name.length < 2 || name.length > 100) {
      errors.name = 'Name must be between 2 and 100 characters.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
      errors.email = 'A valid email address is required.';
    }
    if (organization.length > 150) {
      errors.organization = 'Organisation must be 150 characters or fewer.';
    }
    if (!Object.prototype.hasOwnProperty.call(SERVICE_LABELS, service)) {
      errors.service = 'Unknown service category.';
    }
    if (!BUDGET_LABELS.has(budget)) {
      errors.budget = 'Unknown budget range.';
    }
    if (!TIMEFRAME_LABELS.has(timeframe)) {
      errors.timeframe = 'Unknown timeframe.';
    }
    if (message.length < 20 || message.length > 5000) {
      errors.message = 'Project description must be between 20 and 5,000 characters.';
    }
    if (!consent) {
      errors.consent = 'Consent is required to submit an inquiry.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Please correct the highlighted fields and try again.', fields: errors },
        { status: 422 }
      );
    }

    const payload = {
      name,
      email,
      organization,
      service: SERVICE_LABELS[service],
      budget,
      timeframe,
      message,
      source,
      _replyto: email,
      _subject: `Project inquiry — ${name}`,
    };

    const formResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });

    if (!formResponse.ok) {
      console.error('Contact delivery failed with status', formResponse.status);
      return NextResponse.json(
        {
          error:
            'The contact service could not accept the message. Please email info@devray.qzz.io directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(
      'Contact route error:',
      error instanceof Error ? error.name : 'Unknown error'
    );
    return NextResponse.json(
      { error: 'The message could not be sent. Please email info@devray.qzz.io directly.' },
      { status: 500 }
    );
  }
}

