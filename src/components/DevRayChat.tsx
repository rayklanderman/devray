'use client';

import { useState, useRef, useEffect } from 'react';
import { services } from '@/data';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  {
    icon: '🤖',
    title: 'AI-Powered Website',
    description: 'Build an autonomous AI site for marketing, sales & shipping',
  },
  {
    icon: '🛒',
    title: 'E-commerce Solution',
    description: 'Full online store with AI-driven recommendations',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform apps for iOS & Android',
  },
  {
    icon: '📊',
    title: 'Data Analytics Dashboard',
    description: 'Transform your data into actionable insights',
  },
  {
    icon: '🎯',
    title: 'Digital Marketing',
    description: 'AI-powered social media & content strategy',
  },
  {
    icon: '🌐',
    title: 'Custom Web Platform',
    description: 'Scalable web solutions with modern tech stack',
  },
];

const SYSTEM_PROMPT = `You are DevRay AI, the official AI assistant for DevRay - a premium digital services company.

## About DevRay
DevRay provides cutting-edge digital solutions including:
- Web Development (Next.js, React, TypeScript, Node.js, Python)
- AI & Machine Learning (LLMs, RAG systems, autonomous agents)
- Data Analysis & Analytics (Python, Pandas, Power BI, Tableau)
- WordPress Development (Divi, Elementor, SEO optimization)
- Digital Media & Social Media Management
- Mobile App Development (Flutter, React Native)
- Live Streaming & Videography
- PWA Development

## Your Personality & Tone
- Professional yet friendly
- Solution-oriented and proactive
- Technical but accessible
- Confident about capabilities
- Always highlight business value

## Key Selling Points
1. **Autonomous AI Agents**: "Today's business environment requires AI-powered systems that run autonomously to handle marketing, sales, transactions, and shipping. DevRay builds intelligent agent systems that work 24/7 without human intervention."

2. **Production-Ready Solutions**: All solutions are production-ready with automated deployment pipelines, cloud architecture, and scalable infrastructure.

3. **Modern Tech Stack**: Using latest frameworks like Next.js 15, Python FastAPI, Flutter, and cloud platforms like Google Cloud.

4. **AI-First Approach**: Every solution can be enhanced with AI capabilities - chatbots, recommendations, automation, analytics.

## Response Guidelines
- Understand client needs before suggesting solutions
- Highlight how AI can automate their specific business processes
- Mention relevant technologies for their use case
- Be specific about capabilities and outcomes
- Always end with a call-to-action to discuss their project
- If asked about topics outside DevRay's scope, politely redirect to services

## Services Quick Reference
${services.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Remember: You are helping businesses understand how modern AI-powered solutions can transform their operations. Focus on business value and practical applications.`;

export default function DevRayChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hello! I'm DevRay AI. How can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: SYSTEM_PROMPT,
            },
            ...messages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
            {
              role: 'user',
              content: userMessage.content,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I apologize, but I encountered an issue processing your request. Please try again or contact us directly at info@devray.site for immediate assistance.`,
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
    <section id="chat" className="min-h-screen bg-black pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-screen flex flex-col">
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            DevRay AI Assistant
          </h1>
          <p className="text-gray-400 text-sm">
            Ask about our services, get AI recommendations, or start your project
          </p>
        </div>

        <div className="flex-1 flex flex-col bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden min-h-0">
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-white border border-gray-700'
                  }`}
                >
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    {message.role === 'assistant' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-xs sm:text-sm">DR</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {message.content}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.role === 'user' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white border border-gray-700 rounded-2xl px-4 py-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xs sm:text-sm">DR</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-gray-800 bg-gray-900">
              <p className="text-xs text-gray-400 mb-3 text-center">
                Try asking about:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUGGESTIONS.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.description)}
                    className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-750 transition-all text-left group"
                  >
                    <span className="text-xl">{suggestion.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-xs sm:text-sm truncate group-hover:text-gray-200">
                        {suggestion.title}
                      </p>
                      <p className="text-gray-500 text-xs truncate">
                        {suggestion.description}
                      </p>
                    </div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 group-hover:text-gray-300 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-3 sm:p-4 border-t border-gray-800 bg-gray-900 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI solutions..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-white text-black rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1 sm:space-x-2"
              >
                <span className="text-sm hidden sm:inline">Send</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-2">
              Powered by Groq API • Llama 3.3 70B
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
