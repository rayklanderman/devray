import Link from 'next/link';
import { faqs } from '@/data';
import { Reveal } from '@/components/motion/Reveal';

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.6fr] gap-12 items-start">
          <Reveal>
            <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
              Questions
            </p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
              Straight answers before we start.
            </h2>
            <p className="text-parchment-300 leading-relaxed mb-6">
              If your question is not covered here, send it through the project form. I will answer
              directly rather than route you through a sales sequence.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-ochre-400 hover:text-ochre-300 font-medium transition-colors"
            >
              Ask a question <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <div className="divide-y divide-ink-700 border-y border-ink-700">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-parchment-100 font-medium hover:text-ochre-300 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full border border-ink-700 flex items-center justify-center text-ochre-400 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-10 text-sm text-parchment-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
