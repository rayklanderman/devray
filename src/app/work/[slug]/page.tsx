import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data';

const siteUrl = 'https://devray.qzz.io';

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Case study not found' };
  }

  const description = project.description || project.solution || project.problem;
  const url = `/work/${project.slug}`;

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${project.title} — DevRay case study`,
      description,
      url,
      images: [
        {
          url: project.screenshot,
          width: 1200,
          height: 630,
          alt: project.screenshotAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — DevRay case study`,
      description,
      images: [project.screenshot],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const caseUrl = `${siteUrl}/work/${project.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description || project.solution,
    url: caseUrl,
    image: `${siteUrl}${project.screenshot}`,
    dateModified: project.updatedAt,
    creator: {
      '@type': 'Person',
      name: 'Raymond (DevRay) Klanderman',
      url: 'https://rayklanderman.is-a.dev/',
    },
    about: project.tech,
  };

  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-parchment-500">
              <li><Link href="/" className="hover:text-ochre-300 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/work" className="hover:text-ochre-300 transition-colors">Work</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-parchment-300" aria-current="page">{project.title}</li>
            </ol>
          </nav>

          <article>
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {project.award && (
                  <span className="bg-ochre-400 text-ink-950 rounded-full px-3 py-1 text-xs font-bold">
                    {project.award}
                  </span>
                )}
                <span className="text-xs font-medium text-parchment-500 uppercase tracking-widest">
                  {project.tier} case study
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-parchment-100 mb-4">{project.title}</h1>
              <p className="text-lg text-parchment-300 mb-5">{project.productType}</p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-ink-900 rounded-xl border border-ink-700 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-parchment-500 mb-1">Status</dt>
                  <dd className="text-parchment-100 font-medium">{project.projectStatus}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-parchment-500 mb-1">Engagement</dt>
                  <dd className="text-parchment-100 font-medium">{project.engagementType}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider text-parchment-500 mb-1">Role</dt>
                  <dd className="text-parchment-100 font-medium">{project.role}</dd>
                </div>
              </dl>
            </header>

            <div className="relative mb-14 rounded-2xl overflow-hidden border border-ink-700 bg-ink-900">
              <Image
                src={project.screenshot}
                alt={project.screenshotAlt}
                width={1200}
                height={630}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            <section className="mb-14" aria-labelledby="problem-heading">
              <h2 id="problem-heading" className="text-2xl font-bold text-parchment-100 mb-4">The problem</h2>
              <p className="text-parchment-300 leading-relaxed">{project.problem}</p>
            </section>

            <section className="mb-14" aria-labelledby="solution-heading">
              <h2 id="solution-heading" className="text-2xl font-bold text-parchment-100 mb-4">What was built</h2>
              <p className="text-parchment-300 leading-relaxed">{project.solution}</p>
            </section>

            {project.architecture && (
              <section className="mb-14" aria-labelledby="architecture-heading">
                <h2 id="architecture-heading" className="text-2xl font-bold text-parchment-100 mb-4">Architecture and engineering decisions</h2>
                <p className="text-parchment-300 leading-relaxed">{project.architecture}</p>
              </section>
            )}

            {project.audience && (
              <section className="mb-14" aria-labelledby="audience-heading">
                <h2 id="audience-heading" className="text-2xl font-bold text-parchment-100 mb-4">Audience</h2>
                <p className="text-parchment-300 leading-relaxed">{project.audience}</p>
              </section>
            )}

            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
              <section className="mb-14" aria-labelledby="highlights-heading">
                <h2 id="highlights-heading" className="text-2xl font-bold text-parchment-100 mb-4">Technical highlights</h2>
                <ul className="space-y-3 text-parchment-300 leading-relaxed">
                  {project.technicalHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <span className="text-ochre-400 mr-3 mt-0.5 shrink-0" aria-hidden="true">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.responsibilities && project.responsibilities.length > 0 && (
              <section className="mb-14" aria-labelledby="responsibilities-heading">
                <h2 id="responsibilities-heading" className="text-2xl font-bold text-parchment-100 mb-4">My responsibilities</h2>
                <ul className="space-y-3 text-parchment-300 leading-relaxed">
                  {project.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start">
                      <span className="text-ochre-400 mr-3 mt-0.5 shrink-0" aria-hidden="true">✓</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.clientRelevance && (
              <section className="mb-14" aria-labelledby="relevance-heading">
                <h2 id="relevance-heading" className="text-2xl font-bold text-parchment-100 mb-4">Why it matters for a client</h2>
                <p className="text-parchment-300 leading-relaxed">{project.clientRelevance}</p>
              </section>
            )}

            {project.constraintsAndTradeoffs && (
              <section className="mb-14 bg-ink-900 rounded-xl p-6 border border-ink-700" aria-labelledby="constraints-heading">
                <h2 id="constraints-heading" className="text-2xl font-bold text-parchment-100 mb-4">Constraints and trade-offs</h2>
                <p className="text-parchment-300 leading-relaxed">{project.constraintsAndTradeoffs}</p>
              </section>
            )}

            {project.privacyAccessibility && (
              <section className="mb-14 bg-ink-900 rounded-xl p-6 border border-ink-700" aria-labelledby="privacy-heading">
                <h2 id="privacy-heading" className="text-2xl font-bold text-parchment-100 mb-4">Privacy and accessibility</h2>
                <p className="text-parchment-300 leading-relaxed">{project.privacyAccessibility}</p>
              </section>
            )}

            {project.verifiedEvidence && (
              <section className="mb-14" aria-labelledby="evidence-heading">
                <h2 id="evidence-heading" className="text-2xl font-bold text-parchment-100 mb-4">Verified evidence</h2>
                <p className="text-parchment-300 leading-relaxed">{project.verifiedEvidence}</p>
              </section>
            )}

            {project.limitations && (
              <section className="mb-14" aria-labelledby="limitations-heading">
                <h2 id="limitations-heading" className="text-2xl font-bold text-parchment-100 mb-4">Limitations</h2>
                <p className="text-parchment-300 leading-relaxed italic">{project.limitations}</p>
              </section>
            )}

            <section className="mb-14" aria-labelledby="tech-heading">
              <h2 id="tech-heading" className="text-2xl font-bold text-parchment-100 mb-4">Technology</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-ink-900 text-parchment-300 rounded text-sm font-medium border border-ink-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-14 flex flex-col sm:flex-row gap-3" aria-label="Project links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors font-semibold text-sm"
                >
                  View live<span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-ink-700 text-parchment-100 rounded-lg hover:bg-ink-800 transition-colors font-semibold text-sm"
                >
                  View demo<span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.repositoryUrl && project.isRepositoryPublic && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-ink-700 text-parchment-100 rounded-lg hover:bg-ink-800 hover:border-ochre-500/40 transition-colors font-semibold text-sm"
                >
                  View source<span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              <Link
                href={`/?source=case-${project.slug}#contact`}
                className="inline-flex items-center justify-center px-6 py-3 border border-ochre-500/40 text-parchment-100 rounded-lg hover:bg-ink-800 hover:border-ochre-400 transition-colors font-semibold text-sm"
              >
                Discuss a project like this
              </Link>
            </section>

            <footer className="mt-16 pt-8 border-t border-ink-700 text-xs text-parchment-500">
              <p>
                Updated {project.updatedAt}. Independent work unless otherwise noted. Links, status and
                claims are qualified where they have not been independently verified.
              </p>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
