'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  {
    icon: '🤖',
    title: 'AI feature',
    description: 'Help me scope an AI assistant or automation workflow',
  },
  {
    icon: '🛒',
    title: 'Web platform',
    description: 'I need a portal, dashboard or internal tool',
  },
  {
    icon: '📱',
    title: 'Mobile app',
    description: 'I need a Flutter Android and iOS app',
  },
  {
    icon: '📊',
    title: 'Data & ML',
    description: 'Help me understand what my data can support',
  },
  {
    icon: '🎯',
    title: 'Not sure yet',
    description: 'Help me work out what kind of project I need',
  },
  {
    icon: '🌐',
    title: 'Existing system',
    description: 'I need help improving or integrating an existing product',
  },
];

function makeId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function createGreeting(): Message {
  return {
    id: makeId(),
    role: 'assistant',
    content:
      "Hello — I'm DevRay AI. I can help you think through an AI, web, mobile or data project. What are you trying to build or improve?",
    timestamp: new Date(),
  };
}

export default function DevRayChat() {
  const [messages, setMessages] = useState<Message[]>([createGreeting()]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: makeId(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    const history = messages.map((message) => ({
      role: message.role,
      content: message.content,
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
            : 'I could not process that request. Please try again.'
        );
      }

      const content =
        typeof data.content === 'string'
          ? data.content
          : data?.choices?.[0]?.message?.content;

      if (typeof content !== 'string' || content.trim().length === 0) {
        throw new Error('The assistant returned an empty response. Please try again.');
      }

      const assistantMessage: Message = {
        id: makeId(),
        role: 'assistant',
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
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

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <section id="chat" aria-labelledby="chat-heading" className="min-h-screen bg-ink-950 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-screen flex flex-col">
        <div className="text-center mb-4">
          <h1 id="chat-heading" className="text-2xl sm:text-3xl font-bold text-parchment-100 mb-1">
            DevRay AI Assistant
          </h1>
          <p className="text-parchment-500 text-sm">
            Explore a project idea or ask about services. AI can make mistakes — confirm commitments
            through the inquiry form.
          </p>
        </div>

        <div className="flex-1 flex flex-col bg-ink-900 rounded-2xl border border-ink-700 overflow-hidden min-h-0">
          <div
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4"
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
                  className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-ochre-400 text-ink-950'
                      : 'bg-ink-800 text-parchment-100 border border-ink-700'
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    {message.role === 'assistant' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ochre-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-ink-950 font-bold text-xs sm:text-sm" aria-hidden="true">DR</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {message.content}
                      </p>
                      <p className="text-xs text-parchment-500 mt-1">
                        <span className="sr-only">{message.role === 'user' ? 'You' : 'DevRay AI'} at </span>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-ink-800 text-parchment-100 border border-ink-700 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ochre-400 rounded-full flex items-center justify-center">
                      <span className="text-ink-950 font-bold text-xs sm:text-sm" aria-hidden="true">DR</span>
                    </div>
                    <div className="flex gap-1" aria-hidden="true">
                      <div className="w-2 h-2 bg-ochre-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-ochre-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-ochre-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="sr-only">DevRay AI is responding</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-ink-700 bg-ink-900">
              <p className="text-xs text-parchment-500 mb-3 text-center">Try asking about:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion.title}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion.description)}
                    className="flex items-center gap-2 p-3 bg-ink-800 rounded-lg border border-ink-700 hover:border-ochre-500/50 hover:bg-ink-700 transition-all text-left group"
                  >
                    <span className="text-xl" aria-hidden="true">{suggestion.icon}</span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-parchment-100 font-medium text-xs sm:text-sm truncate group-hover:text-ochre-300">
                        {suggestion.title}
                      </span>
                      <span className="block text-parchment-500 text-xs truncate">
                        {suggestion.description}
                      </span>
                    </span>
                    <span className="text-parchment-500 group-hover:text-parchment-300 transition-colors flex-shrink-0" aria-hidden="true">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-3 sm:p-4 border-t border-ink-700 bg-ink-900 flex-shrink-0">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <label htmlFor="chat-input" className="sr-only">Ask DevRay AI about your project</label>
              <input
                id="chat-input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Describe your project or ask a question…"
                maxLength={2000}
                autoComplete="off"
                className="flex-1 bg-ink-800 border border-ink-700 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-parchment-100 text-sm placeholder-parchment-500 focus:outline-none focus:border-ochre-400 focus:ring-1 focus:ring-ochre-400 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-ochre-400 text-ink-950 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 font-medium hover:bg-ochre-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 sm:gap-2"
              >
                <span className="text-sm hidden sm:inline">Send</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <p className="text-[10px] sm:text-xs text-parchment-500 text-center mt-2">
              Powered by Groq · Llama 3.3 70B · AI can make mistakes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
