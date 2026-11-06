import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Live systems and engineering case studies across AI, web platforms, mobile accessibility, civic technology and applied machine learning.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'DevRay case studies',
    description:
      'Live systems and engineering case studies across AI, web platforms, mobile accessibility, civic technology and applied machine learning.',
    url: '/work',
  },
};

export default function WorkPage() {
  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-16">
            <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
              Case files
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-parchment-100 mb-5">
              Selected work and engineering evidence
            </h1>
            <p className="text-lg text-parchment-300 leading-relaxed">
              Real projects across health, education, accessibility, civic technology, research and
              applied ML. Independent products, hackathon builds and client work are labelled
              separately, and unverified claims are qualified.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 text-sm">
              <span className="px-3 py-1.5 rounded-full bg-ink-900 border border-ink-700 text-parchment-300">
                {projects.length} case files
              </span>
              <span className="px-3 py-1.5 rounded-full bg-ink-900 border border-ink-700 text-parchment-300">
                Live systems + prototypes
              </span>
              <span className="px-3 py-1.5 rounded-full bg-ink-900 border border-ink-700 text-parchment-300">
                Source links only when public
              </span>
            </div>
          </header>

          <section aria-labelledby="featured-work-heading" className="mb-20">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-medium text-parchment-500 uppercase tracking-[0.18em] mb-2">
                  Signature projects
                </p>
                <h2 id="featured-work-heading" className="text-2xl sm:text-3xl font-bold text-parchment-100">
                  Strongest client-service evidence
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </section>

          <section aria-labelledby="more-work-heading">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-medium text-parchment-500 uppercase tracking-[0.18em] mb-2">
                  More work
                </p>
                <h2 id="more-work-heading" className="text-2xl sm:text-3xl font-bold text-parchment-100">
                  Additional products and experiments
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondary.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section className="mt-20 p-8 sm:p-10 bg-ink-900 rounded-2xl border border-ochre-500/30 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-parchment-100 mb-3">
              Have a problem that looks like one of these?
            </h2>
            <p className="text-parchment-300 max-w-2xl mx-auto mb-6">
              Share the context and constraints. I will tell you what is realistic, what needs more
              discovery, and whether another specialist is a better fit.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors font-semibold"
            >
              Discuss Your Project
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
