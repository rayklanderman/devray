'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { navItems, professionalProfile } from '@/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;

    const sectionIds = navItems
      .map((item) => item.href.split('#')[1])
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      return pathname === '/' && activeSection === id;
    }
    if (href === '/work') {
      return pathname === '/work' || pathname.startsWith('/work/');
    }
    return pathname === href;
  };

  const solidHeader = isScrolled || pathname !== '/';

  return (
    <motion.header
      initial={reduce ? false : { y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidHeader
          ? 'bg-ink-950/95 backdrop-blur-md border-b border-ink-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="DevRay home">
            <Image
              src="/cropped_circle_image.png"
              alt=""
              width={40}
              height={40}
              priority
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-parchment-100">
              DevRay
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-ochre-300 ${
                  isActive(item.href) ? 'text-ochre-400' : 'text-parchment-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={professionalProfile.founderLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-parchment-500 hover:text-ochre-300 transition-colors"
            >
              Portfolio ↗
            </a>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors text-sm font-semibold"
            >
              Discuss Your Project
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-parchment-100 hover:bg-ink-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:hidden bg-ink-950 border-t border-ink-700 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`block px-4 py-2.5 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-ochre-400 bg-ink-900'
                      : 'text-parchment-300 hover:bg-ink-900 hover:text-ochre-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={professionalProfile.founderLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 rounded-lg text-sm text-parchment-500 hover:bg-ink-900 hover:text-ochre-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technical Portfolio ↗
              </a>
              <Link
                href="/#contact"
                className="block mt-2 px-4 py-3 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discuss Your Project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
