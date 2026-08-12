'use client';

import { useState } from 'react';
import { professionalProfile, namedCredentials } from '@/data';
import { Reveal } from '@/components/motion/Reveal';

export default function About() {
  const [showFullBio, setShowFullBio] = useState(false);

  const bioSentences = professionalProfile.extendedBio
    .split('. ')
    .filter((s) => s.trim().length > 0)
    .map((s) => s.endsWith('.') ? s : `${s}.`);

  const shortBio = bioSentences.slice(0, 3).join(' ');
  const fullBio = bioSentences.join(' ');

  return (
    <section id="about" className="py-20 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <Reveal>
                <h2 className="text-4xl font-bold text-parchment-100 mb-6">
                  About DevRay
                </h2>
              </Reveal>
              <Reveal>
                <a
                  href={professionalProfile.founderLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-5 py-3 bg-ink-800 border
                             border-ochre-500/40 rounded-xl hover:border-ochre-400 transition-colors mb-6"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/cropped_circle_image.png" alt="Raymond Klanderman"
                    className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-parchment-100 font-medium group-hover:text-ochre-300 transition-colors">
                    {professionalProfile.founderLink.label}
                  </span>
                </a>
              </Reveal>
              <Reveal>
                <p className="text-parchment-300 text-lg leading-relaxed mb-4">
                  {showFullBio ? fullBio : shortBio}
                </p>
                <button
                  onClick={() => setShowFullBio((prev) => !prev)}
                  className="text-ochre-400 hover:text-ochre-300 text-sm font-medium transition-colors"
                >
                  {showFullBio ? 'Read less' : 'Read more'}
                </button>
              </Reveal>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-parchment-100 mb-4">
                Key Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {professionalProfile.keyTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-ink-900 text-parchment-300 rounded-full text-sm font-medium border border-ink-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-parchment-100 mb-4">
                Named Certifications
              </h3>
              <div className="space-y-4">
                {namedCredentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="p-4 bg-ink-900 rounded-xl border border-ink-700 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-ochre-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-parchment-100">
                        {cred.title}
                      </h4>
                      <p className="text-sm text-parchment-500 mb-2">
                        {cred.issuer}
                      </p>
                      <a
                        href={cred.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-ochre-400 hover:text-ochre-300 font-medium"
                      >
                        Verify →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-ink-900 rounded-2xl p-8 text-parchment-100 border border-ink-700">
              <h3 className="text-2xl font-bold mb-6">What We Do</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ink-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Full-Stack Engineering</h4>
                    <p className="text-parchment-500 text-sm">
                      Building end-to-end solutions with modern frameworks and cloud platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ink-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI & Machine Learning</h4>
                    <p className="text-parchment-500 text-sm">
                      Developing intelligent systems with LLMs, RAG, and autonomous agents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ink-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Analytics</h4>
                    <p className="text-parchment-500 text-sm">
                      Transforming data into actionable insights and visual stories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ink-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Creative Solutions</h4>
                    <p className="text-parchment-500 text-sm">
                      Content creation, live streaming, and multimedia production.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ink-900 rounded-2xl p-8 border border-ink-700">
              <h3 className="text-2xl font-bold text-parchment-100 mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-parchment-500 mb-6">
                Ready to bring your project to life? We&apos;re currently available for
                freelance work and collaborations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
