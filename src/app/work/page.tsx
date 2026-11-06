
import Link from 'next/link';
import { projects } from '@/data';

export const metadata = {
  title: 'Work — DevRay Case Studies',
  description: 'A showcase of DevRay client case files and applied-AI engineering work.',
};

export default function WorkPage() {
  const signature = projects.filter((p) => p.tier === 'signature');
  const secondary = projects.filter((p) => p.tier === 'secondary');

  return (
    <div className="min-h-screen bg-ink-950">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-parchment-100 mb-4">
              Client Case Files &amp; Solutions
            </h1>
            <p className="text-xl text-parchment-500 max-w-3xl mx-auto">
              A showcase of our work demonstrating expertise across web development, AI/ML, and mobile applications.
            </p>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-parchment-100 mb-8">
              Signature Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signature.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group block bg-ink-900 rounded-2xl border border-ink-700 overflow-hidden hover:border-ochre-500/40 transition-colors"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.screenshot}
                      alt={project.screenshotAlt || project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {project.award && (
                      <span
                        aria-label={project.award}
                        className="absolute top-3 left-3 bg-ochre-400 text-ink-950 rounded-full px-3 py-1 text-xs font-bold shadow-lg"
                      >
                        {project.award}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-ink-950/80 text-ochre-300 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-ochre-500/40">
                      Signature
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-parchment-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-parchment-500 text-sm mb-4">
                      {project.description || project.solution}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-parchment-500">{project.tier}</span>
                      <span className="text-xs text-ochre-400 font-medium">
                        Case study &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-parchment-100 mb-8">
              Additional Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondary.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group block bg-ink-900 rounded-xl border border-ink-700 p-6 hover:border-ochre-500/40 transition-colors"
                >
                  <h3 className="text-lg font-bold text-parchment-100 mb-2 group-hover:text-ochre-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-parchment-500 text-sm mb-4">
                    {project.description || project.solution}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-ink-800 text-parchment-300 rounded text-xs font-medium border border-ink-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-ochre-400 font-medium">
                    Case study &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
