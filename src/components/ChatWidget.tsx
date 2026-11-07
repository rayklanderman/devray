'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import ServiceIcon from '@/components/ServiceIcon';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const QUICK_STARTERS = [
  'Scope an AI assistant or automation feature',
  'Build a role-based web portal or SaaS MVP',
  'Engineer a Flutter mobile app',
  'Explore applied ML on existing data',
];

function makeId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function initialGreeting(): Message {
  return {
    id: makeId(),
    role: 'assistant',
    content: "Hi! I'm DevRay AI. How can I help you think through an AI, web platform, mobile, or data project today?",
    timestamp: new Date(),
  };
}

export default function ChatWidget() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialGreeting()]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Do not render floating widget on the dedicated /chat page
  const isChatRoute = pathname === '/chat';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText ?? input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      id: makeId(),
      role: 'user',
      content: textToSend,
      timestamp: new Date(),
    };

    const history = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...history, { role: 'user', content: userMessage.content }],
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof data.error === 'string'
            ? data.error
            : 'Could not connect to the assistant. Please try again or email info@devray.site.'
        );
      }

      const content = data.content?.trim();
      if (!content) {
        throw new Error('The assistant returned an empty response. Please try again.');
      }

      const assistantMessage: Message = {
        id: makeId(),
        role: 'assistant',
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      if (!isOpen) setHasUnread(true);
    } catch (error) {
      const errorMessage: Message = {
        id: makeId(),
        role: 'assistant',
        content:
          error instanceof Error
            ? error.message
            : 'I encountered an issue processing your request. Please try again or email info@devray.site.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isChatRoute) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="devray-chatbot-panel"
            role="dialog"
            aria-label="DevRay AI Chatbot"
            aria-modal="false"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-[calc(100vw-2.5rem)] sm:w-[390px] h-[520px] max-h-[80vh] bg-ink-950 border border-ochre-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-3"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-ink-900 border-b border-ink-700 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-ochre-400 text-ink-950 font-bold flex items-center justify-center text-xs">
                    DR
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-ink-900 rounded-full" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-parchment-100 flex items-center gap-2">
                    DevRay Assistant
                    <span className="text-[10px] font-normal px-1.5 py-0.5 rounded bg-ink-800 text-ochre-400 border border-ochre-500/30">
                      AI
                    </span>
                  </h2>
                  <p className="text-[11px] text-parchment-500">Groq Llama 3.3 · Online</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Link
                  href="/chat"
                  title="Expand to full chat page"
                  className="p-1.5 text-parchment-500 hover:text-ochre-300 hover:bg-ink-800 rounded-lg transition-colors"
                  aria-label="Open full chat page"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-parchment-500 hover:text-ochre-300 hover:bg-ink-800 rounded-lg transition-colors"
                  aria-label="Close chatbot"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              className="flex-1 overflow-y-auto p-3.5 space-y-3 min-h-0 bg-ink-950/80"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm ${
                      message.role === 'user'
                        ? 'bg-ochre-400 text-ink-950 font-medium'
                        : 'bg-ink-900 text-parchment-100 border border-ink-700'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
                    <span className={`block text-[10px] mt-1 text-right ${message.role === 'user' ? 'text-ink-950/70' : 'text-parchment-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-ink-900 border border-ink-700 rounded-2xl px-3.5 py-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-ochre-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-ochre-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-ochre-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="sr-only">DevRay AI is typing</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starters (if conversation is fresh) */}
            {messages.length <= 1 && (
              <div className="px-3 py-2 bg-ink-900 border-t border-ink-700 shrink-0">
                <p className="text-[10px] uppercase tracking-wider text-parchment-500 mb-1.5">Ask about:</p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_STARTERS.map((starter) => (
                    <button
                      key={starter}
                      type="button"
                      onClick={() => handleSend(starter)}
                      className="text-[11px] px-2 py-1 bg-ink-950 border border-ink-700 text-parchment-300 rounded hover:border-ochre-400 hover:text-ochre-300 transition-colors text-left"
                    >
                      {starter}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Input */}
            <div className="p-3 bg-ink-900 border-t border-ink-700 shrink-0">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask a question or describe your project…"
                  maxLength={2000}
                  className="flex-1 bg-ink-950 border border-ink-700 rounded-xl px-3 py-2 text-xs text-parchment-100 placeholder-parchment-500 focus:outline-none focus:border-ochre-400 focus:ring-1 focus:ring-ochre-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-ochre-400 text-ink-950 rounded-xl hover:bg-ochre-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              <div className="flex items-center justify-between mt-2 text-[10px] text-parchment-500">
                <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-ochre-400 hover:text-ochre-300 underline">
                  Discuss a project →
                </Link>
                <span>info@devray.site</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="devray-chatbot-panel"
        aria-label={isOpen ? 'Close DevRay AI assistant' : 'Open DevRay AI assistant'}
        className="group flex items-center gap-2.5 px-4 py-3 bg-ink-900 hover:bg-ink-800 text-parchment-100 border border-ochre-500/50 hover:border-ochre-400 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.03]"
      >
        <span className="relative flex items-center justify-center w-6 h-6 text-ochre-400">
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <ServiceIcon name="sparkles" className="w-5 h-5 text-ochre-400 group-hover:rotate-12 transition-transform" />
          )}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-ochre-400 rounded-full animate-ping" />
          )}
        </span>
        <span className="text-xs font-semibold text-parchment-100 group-hover:text-ochre-300 transition-colors hidden sm:inline">
          {isOpen ? 'Close' : 'Chat with DevRay AI'}
        </span>
      </button>
    </div>
  );
}
