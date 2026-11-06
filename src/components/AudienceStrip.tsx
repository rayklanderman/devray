import { painPoints } from '@/data';
import { Reveal } from '@/components/motion/Reveal';

export default function AudienceStrip() {
  return (
    <section aria-labelledby="audience-heading" className="py-16 bg-ink-900 border-y border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.7fr] gap-10 items-start">
          <Reveal>
            <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
              Common starting points
            </p>
            <h2 id="audience-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
              What are you trying to make work?
            </h2>
            <p className="text-parchment-300 leading-relaxed max-w-md">
              Most projects start with an operational bottleneck, an AI idea that needs grounding, or a
              system that has outgrown spreadsheets and manual follow-up.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((point) => (
              <a
                key={point.title}
                href={point.serviceId ? `/?service=${point.serviceId}#contact` : '/#contact'}
                className="group block p-5 bg-ink-950/70 rounded-xl border border-ink-700 hover:border-ochre-500/50 transition-colors"
              >
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="block text-parchment-100 font-semibold mb-1.5">{point.title}</span>
                    <span className="block text-sm text-parchment-500 leading-relaxed">{point.description}</span>
                  </span>
                  <span className="text-ochre-400 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
