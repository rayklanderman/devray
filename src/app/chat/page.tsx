export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevRayChat from '@/components/DevRayChat';

export const metadata = {
  title: 'AI Chat',
  description:
    'Ask DevRay AI about software, AI, web, mobile and data/ML services, or use it to prepare a project inquiry.',
  alternates: { canonical: '/chat' },
};

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-ink-950 flex flex-col justify-between">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col pt-20 pb-12">
        <DevRayChat />
      </main>
      <Footer />
    </div>
  );
}
