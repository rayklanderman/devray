'use client';

import { services } from '@/data';
import { motion } from 'motion/react';
import { StaggerGrid, staggerItem, Reveal } from '@/components/motion/Reveal';import TiltCard from '@/components/motion/TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  globe: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  brain: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  pen: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  video: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  smartphone: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  wordpress: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zM4.5 12c0-2.7 1.5-5 3.8-6.3.7 2.3 2.5 4.3 4.7 4.8-.5-.8-.8-1.8-.8-2.8 0-3.3 2.7-6 6-6 1.5 0 2.8.5 3.8 1.4l-1.4 1.4c-.6-.4-1.3-.7-2.1-.7-2.2 0-4 1.8-4 4s1.8 4 4 4c1.2 0 2.3-.5 3.1-1.2.8 1.4 2.2 2.3 3.9 2.3 2.5 0 4.5-2 4.5-4.5 0-.4-.1-.8-.2-1.2 1.2-.4 2.2-1.3 2.7-2.4.3-.6.4-1.3.4-2 0-3.6-2.8-6.5-6.3-6.7.3-.5.5-1 .5-1.6 0-2.5-2-4.5-4.5-4.5-2 0-3.7 1.3-4.3 3.1C9.3 4.4 8.1 4 6.8 4 4.4 4 2.5 5.8 2.5 8c0 1.6.9 3 2.3 3.8-.3 1.1-.5 2.3-.3 3.5.5.2 1.1.3 1.6.3 1.2 0 2.2-.4 3.1-1 .7 1.4 2.2 2.4 3.9 2.4 3.1 0 5.6-2.5 5.6-5.6 0-.3 0-.5-.1-.8 1.2-.5 2-1.5 2-2.6 0-.9-.4-1.8-1.1-2.4.8-.4 1.4-1.1 1.4-2 0-1.3-1.1-2.4-2.4-2.4-1 0-1.9.5-2.4 1.4-.3-.5-.8-1-1.4-1.2 1.6-.7 2.7-2.2 2.7-3.9 0-2.3-1.9-4.2-4.2-4.2-1.6 0-3 1-3.6 2.4C7.3 3.5 6.4 3 5.3 3c-2.3 0-4.2 1.8-4.2 4.2 0 1.3.6 2.5 1.5 3.2-.2 1-.3 2-.1 3 .4.2.9.3 1.4.3 1.5 0 2.7-1 3.4-2.4.8 1 2 1.6 3.4 1.6 3 0 5.5-2.5 5.5-5.5 0-.3 0-.6-.1-.9 1-.4 1.7-1.2 2-2.2.2-.5.3-1 .3-1.5 0-2.3-1.9-4.2-4.2-4.2-1.3 0-2.5.6-3.2 1.6-.4-.5-1-1.1-1.8-1.3C6.2 3.5 5.2 3 4 3c-2.2 0-4 1.8-4 4 0 1.6 1 3 2.4 3.6-.2 1.1-.3 2.3-.1 3.4z"/>
    </svg>
  ),
  social: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const coreServices = services.filter((s) => s.tier === 'core');
const additionalServices = services.filter((s) => s.tier === 'additional');

function ProofLink({ label, url }: { label: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 text-ochre-400 hover:text-ochre-300
                 text-sm font-medium group/proof">
      <span className="w-2 h-2 rounded-full bg-ochre-400 animate-pulse" />
      {label}
      <span className="transition-transform group-hover/proof:translate-x-1">→</span>
    </a>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-parchment-100 mb-4">
            Services
          </h2>
          <p className="text-xl text-parchment-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life.
            From code to content, we deliver results that matter.
          </p>
        </Reveal>

        <Reveal className="mb-4">
          <p className="text-xs font-medium text-ochre-400 mb-6 uppercase tracking-widest">
            Primary Billing
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service) => (
            <TiltCard
              key={service.id}
              variants={staggerItem}
              className="group p-8 bg-ink-800 rounded-2xl border border-ochre-500/40
                hover:border-ochre-500/50 hover:shadow-[0_8px_40px_-12px_rgba(212,162,78,0.25)]
                transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ochre-400 to-transparent" />
              <div className="w-16 h-16 bg-ink-900 rounded-xl flex items-center justify-center text-ochre-400 mb-6 border border-ochre-500/40 transition-transform">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-2xl font-bold text-parchment-100 mb-4">
                {service.title}
              </h3>

              <p className="text-parchment-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-ochre-400 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-parchment-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {service.proof && (
                <ProofLink label={service.proof.label} url={service.proof.url} />
              )}

              {service.technologies && (
                <div className="mt-6 pt-6 border-t border-ink-700">
                  <p className="text-xs font-medium text-parchment-500 mb-3 uppercase tracking-wider">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-ink-900 text-parchment-300 rounded text-xs font-medium border border-ink-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </TiltCard>
          ))}
        </StaggerGrid>

        <Reveal className="mb-4">
          <p className="text-xs font-medium text-parchment-500 mb-6 uppercase tracking-widest">
            Additional Services
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className="group p-6 bg-ink-900 rounded-2xl border border-ink-700
                hover:border-ochre-500/40 hover:shadow-[0_8px_40px_-12px_rgba(212,162,78,0.15)]
                transition-all duration-300"
            >
              <div className="w-12 h-12 bg-ink-800 rounded-lg flex items-center justify-center text-ochre-400 mb-4 border border-ink-700">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-lg font-bold text-parchment-100 mb-2">
                {service.title}
              </h3>

              <p className="text-parchment-500 text-sm mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-4 h-4 text-ochre-400 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-parchment-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
