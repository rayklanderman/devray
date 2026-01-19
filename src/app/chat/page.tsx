export const dynamic = 'force-dynamic';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevRayChat from '@/components/DevRayChat';

export const metadata = {
  title: 'DevRay AI Chat | Get AI Recommendations',
  description: 'Chat with DevRay AI about our services, get AI-powered recommendations for your business, and start your digital transformation journey.',
};

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <div className="pt-16 px-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
        <DevRayChat />
      </main>
      <Footer />
    </div>
  );
}
