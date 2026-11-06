'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  const fullText = `${professionalProfile.bio} ${professionalProfile.extendedBio}`;
  const bioSentences = fullText
    .split('. ')
    .filter((sentence) => sentence.trim().length > 0)
    .map((sentence) => (sentence.endsWith('.') ? sentence : `${sentence}.`));

  const shortBio = bioSentences.slice(0, 3).join(' ');
  const fullBio = bioSentences.join(' ');

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
                DevRay is the services practice of Raymond (DevRay) Klanderman. The work spans
                full-stack software, applied AI and the practical details that make a system usable:
                privacy, accessibility, testing and handover.
              </p>
            </Reveal>

            <Reveal>
              <a
                href={professionalProfile.founderLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-ink-900 border border-ochre-500/40 rounded-xl hover:border-ochre-400 transition-colors"
              >
                <Image
                  src="/cropped_circle_image.png"
                  alt="Raymond (DevRay) Klanderman"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span>
                  <span className="block text-parchment-100 font-semibold group-hover:text-ochre-300 transition-colors">
                    {professionalProfile.name}
                  </span>
                  <span className="block text-xs text-parchment-500 mt-0.5">
                    {professionalProfile.title}
                  </span>
                  <span className="block text-xs text-ochre-400 mt-1.5">
                    {professionalProfile.founderLink.label}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal>
              <p className="text-parchment-300 leading-relaxed mb-4">
                {showFullBio ? fullBio : shortBio}
              </p>
              <button
                type="button"
                onClick={() => setShowFullBio((prev) => !prev)}
                aria-expanded={showFullBio}
                className="text-ochre-400 hover:text-ochre-300 text-sm font-medium transition-colors"
              >
                {showFullBio ? 'Read less' : 'Read more'}
              </button>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href={professionalProfile.founderLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg border border-ink-700 text-parchment-300 hover:border-ochre-500/50 hover:text-ochre-300 transition-colors"
                >
                  Technical portfolio ↗
                </a>
                <a
                  href={professionalProfile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg border border-ink-700 text-parchment-300 hover:border-ochre-500/50 hover:text-ochre-300 transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={professionalProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg border border-ink-700 text-parchment-300 hover:border-ochre-500/50 hover:text-ochre-300 transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
              <p className="text-sm text-parchment-500 mt-4">{professionalProfile.location}</p>
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

            <Reveal>
              <div className="bg-ink-900 rounded-2xl p-7 border border-ochre-500/30">
                <h3 className="text-xl font-bold text-parchment-100 mb-3">
                  Ready to discuss a project?
                </h3>
                <p className="text-sm text-parchment-500 mb-5">
                  Share the problem, the constraints and what a useful outcome looks like. I will
                  respond with questions or a suggested next step.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors font-semibold"
                >
                  Discuss Your Project
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
