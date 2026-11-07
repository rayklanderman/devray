'use client';

import { useState } from 'react';
import Image from 'next/image';
import { professionalProfile, namedCredentials } from '@/data';
import { Reveal } from '@/components/motion/Reveal';
import ServiceIcon from '@/components/ServiceIcon';

const focusAreas = [
  { title: 'Health information', description: 'Multilingual AI assistants with explicit safety boundaries.' },
  { title: 'Education', description: 'Curriculum-aligned platforms, assessments and AI tutoring.' },
  { title: 'Accessibility', description: 'Mobile tools designed around assistive technology and consent.' },
  { title: 'Civic technology', description: 'Human-reviewed AI for structured public feedback.' },
  { title: 'Applied ML', description: 'Recommenders and evaluation with honest metric context.' },
  { title: 'Research & agents', description: 'Multi-agent workflows for documents, research and content.' },
];

export default function About() {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Reveal>
              <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
                About the founder
              </p>
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
                Founder-led engineering, with the context to match.
              </h2>
              <p className="text-parchment-300 leading-relaxed">
                DevRay is the engineering services practice of Raymond (DevRay) Klanderman. Every project
                is handled directly with senior engineering ownership — spanning architecture, data
                models, interface design, safety boundaries and reliable deployment.
              </p>
            </Reveal>

            <Reveal>
              <div className="p-5 bg-ink-900 border border-ochre-500/40 rounded-xl space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/cropped_circle_image.png"
                    alt="Raymond (DevRay) Klanderman"
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full object-cover border border-ochre-500/30"
                  />
                  <div>
                    <h3 className="text-parchment-100 font-semibold text-lg">
                      {professionalProfile.name}
                    </h3>
                    <p className="text-xs text-parchment-500">
                      {professionalProfile.title} · {professionalProfile.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1 text-xs">
                  <a
                    href={professionalProfile.founderLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink-950 border border-ink-700 text-parchment-300 hover:border-ochre-400 hover:text-ochre-300 transition-colors font-medium"
                  >
                    Technical portfolio ↗<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={professionalProfile.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink-950 border border-ink-700 text-parchment-300 hover:border-ochre-400 hover:text-ochre-300 transition-colors font-medium"
                  >
                    LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={professionalProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink-950 border border-ink-700 text-parchment-300 hover:border-ochre-400 hover:text-ochre-300 transition-colors font-medium"
                  >
                    GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="space-y-3 text-parchment-300 leading-relaxed text-sm sm:text-base">
                <p>
                  On client engagements and independent systems, I work across the full development stack
                  and the applied AI lifecycle: data schemas, APIs, interfaces, automated testing and cloud
                  infrastructure, paired with prompt design, agent workflows, model evaluation and privacy guardrails.
                </p>
                {showFullBio && (
                  <p className="text-parchment-400">
                    My focus is practical: engineering software that solves real operational bottlenecks
                    rather than chasing speculative hype. Beyond engineering, I produce clear documentation
                    and handover materials so teams can maintain and extend their systems with confidence.
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowFullBio((prev) => !prev)}
                aria-expanded={showFullBio}
                className="mt-3 text-ochre-400 hover:text-ochre-300 text-sm font-medium transition-colors"
              >
                {showFullBio ? 'Read less' : 'Read more'}
              </button>
            </Reveal>

            <Reveal>
              <h3 className="text-lg font-bold text-parchment-100 mb-3">Key technologies</h3>
              <div className="flex flex-wrap gap-2">
                {professionalProfile.keyTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-ink-900 text-parchment-300 rounded-full text-xs font-medium border border-ink-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal>
              <div className="bg-ink-900 rounded-2xl p-7 border border-ink-700">
                <h3 className="text-xl font-bold text-parchment-100 mb-5">Domains and focus</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((area) => (
                    <div key={area.title} className="flex items-start gap-3">
                      <span className="text-ochre-400 mt-0.5 shrink-0">
                        <ServiceIcon name="check" className="w-4 h-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-parchment-100">{area.title}</span>
                        <span className="block text-xs text-parchment-500 leading-relaxed">
                          {area.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {professionalProfile.institutionalExperience.map((experience) => (
              <Reveal key={`${experience.organisation}-${experience.year}`}>
                <div className="bg-ink-900 rounded-2xl p-7 border border-ink-700">
                  <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-2">
                    Institutional experience
                  </p>
                  <h3 className="text-lg font-bold text-parchment-100">
                    {experience.organisation} · {experience.year}
                  </h3>
                  <p className="text-xs text-parchment-500 mb-3">{experience.role}</p>
                  <p className="text-sm text-parchment-300 leading-relaxed">{experience.description}</p>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="bg-ink-900 rounded-2xl p-7 border border-ink-700">
                <h3 className="text-xl font-bold text-parchment-100 mb-4">
                  Named certifications
                </h3>
                <div className="space-y-4">
                  {namedCredentials.map((cred) => (
                    <div key={cred.title} className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-ochre-500/15 rounded-full flex items-center justify-center shrink-0 text-ochre-400">
                        <ServiceIcon name="shield" className="w-4 h-4" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-parchment-100">{cred.title}</p>
                        <p className="text-xs text-parchment-500 mb-1">{cred.issuer}</p>
                        <a
                          href={cred.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-ochre-400 hover:text-ochre-300 font-medium"
                        >
                          Verify credential ↗<span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
