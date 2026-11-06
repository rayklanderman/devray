'use client';

import Link from 'next/link';
import { services, projects } from '@/data';
import { motion } from 'motion/react';
import { StaggerGrid, staggerItem, Reveal } from '@/components/motion/Reveal';
import TiltCard from '@/components/motion/TiltCard';
import ServiceIcon from '@/components/ServiceIcon';

const coreServices = services.filter((s) => s.tier === 'core');
const additionalServices = services.filter((s) => s.tier === 'additional');

function ProofLink({ label, url }: { label: string; url: string }) {
  const className =
    'mt-4 inline-flex items-center gap-2 text-ochre-400 hover:text-ochre-300 text-sm font-medium group/proof';

  if (url.startsWith('/')) {
    return (
      <Link href={url} className={className}>
        <span className="w-2 h-2 rounded-full bg-ochre-400" aria-hidden="true" />
        {label}
        <span className="transition-transform group-hover/proof:translate-x-1" aria-hidden="true">→</span>
      </Link>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      <span className="w-2 h-2 rounded-full bg-ochre-400" aria-hidden="true" />
      {label}
      <span className="transition-transform group-hover/proof:translate-x-1" aria-hidden="true">→</span>
    </a>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
            Services
          </p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
            Four core offers, scoped around the outcome.
          </h2>
          <p className="text-parchment-300 leading-relaxed">
            Each engagement starts with the problem, the people affected and the decision the software
            needs to support. Technology comes after that.
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {coreServices.map((service) => (
            <TiltCard
              key={service.id}
              variants={staggerItem}
              className="group p-7 sm:p-8 bg-ink-900 rounded-2xl border border-ochre-500/30 hover:border-ochre-500/60 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ochre-400 to-transparent" />

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-ink-800 rounded-xl flex items-center justify-center text-ochre-400 border border-ink-700 shrink-0">
                  <ServiceIcon name={service.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-parchment-100">{service.title}</h3>
                  {service.tagline && (
                    <p className="text-sm text-parchment-500 mt-1.5">{service.tagline}</p>
                  )}
                </div>
              </div>

              <p className="text-parchment-300 leading-relaxed mb-6">{service.description}</p>

              <dl className="space-y-3 mb-6">
                {service.for && (
                  <div>
                    <dt className="text-[10px] font-medium text-ochre-400 uppercase tracking-wider">Who it is for</dt>
                    <dd className="text-sm text-parchment-300">{service.for}</dd>
                  </div>
                )}
                {service.problem && (
                  <div>
                    <dt className="text-[10px] font-medium text-ochre-400 uppercase tracking-wider">Problem we solve</dt>
                    <dd className="text-sm text-parchment-300">{service.problem}</dd>
                  </div>
                )}
                {service.delivered && (
                  <div>
                    <dt className="text-[10px] font-medium text-ochre-400 uppercase tracking-wider">What is delivered</dt>
                    <dd className="text-sm text-parchment-300">{service.delivered}</dd>
                  </div>
                )}
                {service.integrations && (
                  <div>
                    <dt className="text-[10px] font-medium text-ochre-400 uppercase tracking-wider">Integrations &amp; constraints</dt>
                    <dd className="text-sm text-parchment-300">{service.integrations}</dd>
                  </div>
                )}
                {service.howToBegin && (
                  <div>
                    <dt className="text-[10px] font-medium text-ochre-400 uppercase tracking-wider">How to begin</dt>
                    <dd className="text-sm text-parchment-300">{service.howToBegin}</dd>
                  </div>
                )}
              </dl>

              {service.evidence && (
                <p className="text-xs text-parchment-500 mb-1">
                  <span className="text-parchment-300 font-medium">Evidence:</span> {service.evidence}
                </p>
              )}

              {service.proof && <ProofLink label={service.proof.label} url={service.proof.url} />}

              {service.relatedProjects && service.relatedProjects.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.relatedProjects.map((slug) => {
                    const project = projects.find((p) => p.slug === slug);
                    if (!project) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/work/${slug}`}
                        className="px-2.5 py-1 bg-ink-950 text-parchment-300 rounded text-xs font-medium border border-ink-700 hover:border-ochre-500/50 hover:text-ochre-300 transition-colors"
                      >
                        {project.title}
                      </Link>
                    );
                  })}
                </div>
              )}

              {service.tech && (
                <div className="mt-6 pt-5 border-t border-ink-700">
                  <p className="text-[10px] font-medium text-parchment-500 mb-2 uppercase tracking-wider">
                    Relevant technology
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-ink-950 text-parchment-300 rounded text-xs font-medium border border-ink-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <a
                  href={`/?service=${service.id}#contact`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ochre-400 hover:text-ochre-300 transition-colors"
                >
                  Discuss this service <span aria-hidden="true">→</span>
                </a>
              </div>
            </TiltCard>
          ))}
        </StaggerGrid>

        <Reveal className="mb-5">
          <p className="text-xs font-medium text-parchment-500 uppercase tracking-[0.18em]">
            Additional capabilities
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {additionalServices.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className="group p-5 bg-ink-900 rounded-2xl border border-ink-700 hover:border-ochre-500/40 transition-colors flex flex-col"
            >
              <div className="w-10 h-10 bg-ink-800 rounded-lg flex items-center justify-center text-ochre-400 mb-4 border border-ink-700">
                <ServiceIcon name={service.icon} className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-parchment-100 mb-2">{service.title}</h3>
              <p className="text-sm text-parchment-500 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-4">
                {service.features?.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-ochre-400 mt-0.5 shrink-0">
                      <ServiceIcon name="check" className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-parchment-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`/?service=${service.id}#contact`}
                className="mt-auto text-xs font-semibold text-ochre-400 hover:text-ochre-300 transition-colors"
              >
                Discuss this capability →
              </a>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
