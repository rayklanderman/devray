'use client';

import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import dynamic from 'next/dynamic';
import { socialLinks, services } from '@/data';
import MagneticButton from '@/components/motion/MagneticButton';
import StaticHeroCard from '@/components/three/StaticHeroCard';
import ServiceIcon from '@/components/ServiceIcon';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <StaticHeroCard />,
});

const socialIcons: Record<string, ReactElement> = {
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};

const coreServices = services.filter((s) => s.tier === 'core');
const additionalCount = services.filter((s) => s.tier === 'additional').length;

export default function Hero() {
  const reduce = useReducedMotion();
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (reduce) {
        setEnable3D(false);
        return;
      }
      const cores = navigator.hardwareConcurrency;
      setEnable3D(!(cores && cores <= 4));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [reduce]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-ink-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="space-y-3">
              <motion.p
                className="text-ochre-400 font-medium text-xs sm:text-sm tracking-[0.18em] uppercase"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                DevRay Lab · Founder-led software &amp; AI engineering
              </motion.p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-parchment-100 leading-[1.06] tracking-tight">
                <motion.span
                  className="block"
                  initial={reduce ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  Your business problem.
                </motion.span>
                <motion.span
                  className="block text-ochre-400"
                  initial={reduce ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  A software solution
                </motion.span>
                <motion.span
                  className="block"
                  initial={reduce ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.44, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  that works.
                </motion.span>
              </h1>
            </div>

            <motion.p
              className="text-parchment-300 text-lg max-w-xl leading-relaxed"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Custom AI applications, intelligent automation, web platforms and mobile solutions —
              designed, engineered and deployed around real operational needs.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              {coreServices.map((service) => (
                <Link
                  key={service.id}
                  href="/#services"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-ink-900/80 rounded-lg border border-ochre-500/30 text-parchment-300 hover:border-ochre-400 hover:text-ochre-300 transition-colors text-xs sm:text-sm font-medium"
                >
                  <span className="text-ochre-400">
                    <ServiceIcon name={service.icon} className="w-4 h-4" />
                  </span>
                  {service.title.replace(' & Intelligent Automation', '').replace(' & Custom Software', '')}
                </Link>
              ))}
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-3 py-2 text-ochre-400 hover:text-ochre-300 transition-colors text-xs sm:text-sm font-medium"
              >
                +{additionalCount} additional services
                <span aria-hidden="true">↓</span>
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <MagneticButton
                as={Link}
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors font-semibold"
              >
                Discuss Your Project
                <span className="ml-2" aria-hidden="true">→</span>
              </MagneticButton>
              <MagneticButton
                as={Link}
                href="/work"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-ochre-500/50 text-parchment-100 rounded-lg hover:border-ochre-400 hover:text-ochre-300 transition-colors font-semibold"
              >
                Explore Selected Work
              </MagneticButton>
            </motion.div>

            <motion.p
              className="text-sm text-parchment-500"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Led by Raymond (DevRay) Klanderman · Available for remote collaborations
            </motion.p>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-parchment-500"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                'Live systems across health, education, accessibility & civic tech',
                'Founder-led, end to end',
                'Remote-first collaboration',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-ochre-400 mt-0.5 shrink-0">
                    <ServiceIcon name="check" className="w-4 h-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="flex gap-2 pt-2"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-parchment-500 hover:text-ochre-300 hover:bg-ink-900 rounded-lg transition-all"
                  aria-label={`${social.platform} (opens in a new tab)`}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {enable3D ? (
              <div className="w-full h-[380px] sm:h-[460px] lg:h-[500px]">
                <HeroScene />
              </div>
            ) : (
              <StaticHeroCard />
            )}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-ink-800 rounded-full hidden sm:flex items-center justify-center border border-ochre-500/40"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={reduce ? undefined : { repeat: Infinity, duration: 6 }}
              aria-hidden="true"
            >
              <ServiceIcon name="code" className="w-10 h-10 text-ochre-400" />
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-ink-800 rounded-full hidden sm:flex items-center justify-center border border-ochre-500/40"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={reduce ? undefined : { repeat: Infinity, duration: 6, delay: 1 }}
              aria-hidden="true"
            >
              <ServiceIcon name="sparkles" className="w-10 h-10 text-ochre-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
