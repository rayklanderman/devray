
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: 'Case Study Not Found — DevRay' };
  }
  return {
    title: `${project.title} — Case Study — DevRay`,
    description: project.description || project.solution,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ink-950">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center text-parchment-500 hover:text-ochre-300 transition-colors text-sm mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Work
          </Link>

          <article>
            <header className="mb-12">
              {project.award && (
                <span
                  aria-label={project.award}
                  className="inline-block mb-4 bg-ochre-400 text-ink-950 rounded-full px-3 py-1 text-xs font-bold shadow-lg"
                >
                  {project.award}
                </span>
              )}
              <span className="text-xs font-medium text-parchment-500 uppercase tracking-widest mb-2 block">
                {project.tier} project
              </span>
              <h1 className="text-4xl font-bold text-parchment-100 mb-4">{project.title}</h1>
              <p className="text-lg text-parchment-300">{project.productType}</p>
              <p className="text-parchment-500 mt-2">
                <span className="font-medium text-parchment-100">Status:</span> {project.projectStatus}{' '}
                <span className="font-medium text-parchment-100">Role:</span> {project.role}
              </p>
            </header>

            <div className="relative mb-16">
              <Image
                src={project.screenshot}
                alt={project.screenshotAlt || project.title}
                width={1200}
                height={630}
                className="w-full rounded-2xl border border-ink-700 shadow-2xl object-cover"
                sizes="(max-width:768px) 100vw, 720px"
                priority
              />
            </div>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-parchment-100 mb-4">The problem</h2>
              <p className="text-parchment-300 leading-relaxed">{project.problem}</p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-parchment-100 mb-4">The solution</h2>
              <p className="text-parchment-300 leading-relaxed">{project.solution}</p>
            </section>

            {project.audience && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-parchment-100 mb-4">Audience</h2>
                <p className="text-parchment-300 leading-relaxed">{project.audience}</p>
              </section>
            )}

            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-parchment-100 mb-4">Technical highlights</h2>
                <ul className="space-y-3 text-parchment-300 leading-relaxed">
                  {project.technicalHighlights.map((h, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-ochre-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>{h}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.responsibilities && project.responsibilities.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-parchment-100 mb-4">My responsibilities</h2>
                <ul className="space-y-3 text-parchment-300 leading-relaxed">
                  {project.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-ochre-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>{r}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {project.constraintsAndTradeoffs && (
              <section className="mb-16 bg-ink-900 rounded-xl p-6 border border-ink-700">
                <h2 className="text-2xl font-bold text-parchment-100 mb-4">Constraints and trade-offs</h2>
                <p className="text-parchment-300 leading-relaxed">{project.constraintsAndTradeoffs}</p>
              </section>
            )}

            {project.privacyAccessibility && (
              <section className="mb-16 bg-ink-900 rounded-xl p-6 border border-ink-700">
                <h2 className="text-2xl font-bold text-parchment-100 mb-4">Privacy and accessibility</h2>
                <p className="text-parchment-300 leading-relaxed">{project.privacyAccessibility}</p>
              </section>
            )}

            {project.verifiedEvidence && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-parchment-100 mb-4">Verified evidence</h2>
                <p className="text-parchment-300 leading-relaxed">{project.verifiedEvidence}</p>
              </section>
            )}

            {project.limitations && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-parchment-100 mb-4">Limitations</h2>
                <p className="text-parchment-300 leading-relaxed italic">{project.limitations}</p>
              </section>
            )}

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-parchment-100 mb-4">Tech</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-ink-900 text-parchment-300 rounded text-sm font-medium border border-ink-700">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-16 flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors font-medium text-sm"
                >
                  View Live
                </a>
              )}
              {project.repositoryUrl && project.isRepositoryPublic && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-ink-700 text-parchment-100 rounded-lg hover:bg-ink-800 hover:border-ochre-500/40 transition-colors font-medium text-sm"
                >
                  Source
                </a>
              )}
              <Link href="/#contact" className="inline-flex items-center justify-center px-6 py-3 border border-ink-700 text-parchment-100 rounded-lg hover:bg-ink-800 hover:border-ochre-500/40 transition-colors font-medium text-sm">
                Discuss This Project
              </Link>
            </section>

            <footer className="mt-16 pt-8 border-t border-ink-700 text-xs text-parchment-500">
              <p>
                Updated {project.updatedAt}. Independent work unless otherwise noted; links and status are
                verified to the best of our knowledge at time of publication.
              </p>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
}
