'use client';

import { professionalProfile, certifications } from '@/data';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                About DevRay
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {professionalProfile.extendedBio}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Key Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {professionalProfile.keyTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm font-medium border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Certifications & Badges
              </h3>
              <div className="space-y-4">
                {certifications.slice(0, 3).map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 bg-gray-900 rounded-xl border border-gray-800"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">
                        {cert.title}
                      </h4>
                      {cert.badges > 0 && (
                        <span className="px-2 py-1 bg-white text-black rounded text-xs font-medium">
                          {cert.badges} badge{cert.badges > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-400 bg-black px-2 py-1 rounded border border-gray-800"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 text-white border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">What We Do</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Full-Stack Engineering</h4>
                    <p className="text-gray-400 text-sm">
                      Building end-to-end solutions with modern frameworks and cloud platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI & Machine Learning</h4>
                    <p className="text-gray-400 text-sm">
                      Developing intelligent systems with LLMs, RAG, and autonomous agents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Analytics</h4>
                    <p className="text-gray-400 text-sm">
                      Transforming data into actionable insights and visual stories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Creative Solutions</h4>
                    <p className="text-gray-400 text-sm">
                      Content creation, live streaming, and multimedia production.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-400 mb-6">
                Ready to bring your project to life? We&apos;re currently available for 
                freelance work and collaborations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
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
