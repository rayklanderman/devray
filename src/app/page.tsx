import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AudienceStrip from '@/components/AudienceStrip';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyDevRay from '@/components/WhyDevRay';
import Process from '@/components/Process';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main id="main-content">
        <Hero />
        <AudienceStrip />
        <Services />
        <Projects />
        <WhyDevRay />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
