'use client';

import { education, certifications } from '@/data';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-parchment-100 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-parchment-500 max-w-3xl mx-auto">
            Continuous learning and professional development across multiple platforms and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-parchment-100 mb-8 flex items-center">
              <svg className="w-8 h-8 mr-3 text-parchment-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-ink-900 rounded-xl p-6 hover:shadow-lg transition-shadow border border-ink-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-parchment-100">
                        {edu.institution}
                      </h4>
                      <p className="text-parchment-500 font-medium">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'completed'
                            ? 'bg-ochre-400 text-ink-950'
                            : 'bg-ink-700 text-parchment-100'
                        }`}
                      >
                        {edu.status === 'completed' ? 'Completed' : 'Ongoing'}
                      </span>
                      <p className="text-sm text-parchment-500 mt-1">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-parchment-500 text-sm mb-4">
                    {edu.description}
                  </p>
                  {edu.skills && (
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-ink-950 text-parchment-300 rounded text-xs border border-ink-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-parchment-100 mb-8 flex items-center">
              <svg className="w-8 h-8 mr-3 text-parchment-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications & Badges
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-ink-900 rounded-xl p-6 hover:shadow-lg transition-shadow border border-ink-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-ochre-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-ochre-400 font-bold text-sm">
                          {cert.platform.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-parchment-100">
                          {cert.platform}
                        </h4>
                        <p className="text-sm text-parchment-500">
                          {cert.title}
                        </p>
                      </div>
                    </div>
                    {cert.badges > 0 && (
                      <span className="px-3 py-1 bg-ochre-400 text-ink-950 rounded-full text-sm font-medium">
                        {cert.badges} badge{cert.badges > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    {cert.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-parchment-500">
                        <svg
                          className="w-4 h-4 text-parchment-100 mr-2 flex-shrink-0"
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
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {cert.expiry && (
                    <p className="text-xs text-parchment-500 mt-3 pt-3 border-t border-ink-700">
                      Expires: {cert.expiry}
                    </p>
                  )}

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-sm text-parchment-100 hover:text-parchment-300 font-medium"
                    >
                      View Profile
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
