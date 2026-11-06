import { differentiators } from '@/data';
import { Reveal } from '@/components/motion/Reveal';
import ServiceIcon from '@/components/ServiceIcon';

const expectations = [
  'A written scope before implementation starts',
  'Reviewable increments and previews rather than a black-box handover',
  'Privacy and accessibility considered in the design, not patched afterwards',
  'Clear qualifications when a claim has not been independently verified',
  'Documentation and a handover path that do not depend on me being available forever',
];

export default function WhyDevRay() {
  return (
    <section id="why" aria-labelledby="why-heading" className="py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
            Why work with DevRay
          </p>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
            Senior engineering ownership, without an agency layer.
          </h2>
          <p className="text-parchment-300 leading-relaxed">
            DevRay is founder-led. That means the person who scopes the work is the person who builds
            it, and the trade-offs are explained in plain language rather than hidden in a handoff.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-ink-900 rounded-2xl border border-ink-700 hover:border-ochre-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center text-ochre-400 mb-4">
                <ServiceIcon name="check" className="w-5 h-5" />
              </div>
              <h3 className="text-parchment-100 font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-parchment-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.6fr] gap-8 p-7 sm:p-9 bg-ink-900 rounded-2xl border border-ochre-500/30">
            <div>
              <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
                What to expect
              </p>
              <h3 className="text-2xl font-bold text-parchment-100 mb-3">
                A calmer, clearer engagement.
              </h3>
              <p className="text-sm text-parchment-500 leading-relaxed">
                Commitments are qualified, not inflated. Scope, assumptions and change control are
                written down so both sides know what is being delivered.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-parchment-300">
                  <span className="text-ochre-400 mt-0.5 shrink-0">
                    <ServiceIcon name="check" className="w-4 h-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
