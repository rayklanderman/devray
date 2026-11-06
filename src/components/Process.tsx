'use client';

import { processSteps } from '@/data';
import { Reveal, StaggerGrid, staggerItem } from '@/components/motion/Reveal';
import { motion } from 'motion/react';

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-24 bg-ink-900 border-y border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
            How we work
          </p>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
            A visible path from problem to launch.
          </h2>
          <p className="text-parchment-300 leading-relaxed">
            Every engagement follows the same decision points, adapted to the size of the work. You
            should always know what is being built, what is being tested, and what happens next.
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative p-6 bg-ink-950/70 rounded-2xl border border-ink-700 hover:border-ochre-500/40 transition-colors"
            >
              <span className="block text-4xl font-bold text-ochre-400/30 mb-3" aria-hidden="true">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-parchment-100 mb-2">{step.title}</h3>
              <p className="text-sm text-parchment-500 leading-relaxed mb-4">{step.description}</p>
              <p className="text-xs text-parchment-300 border-t border-ink-700 pt-3">
                <span className="text-parchment-500 uppercase tracking-wider text-[10px] block mb-1">
                  Typical deliverables
                </span>
                {step.deliverables}
              </p>
            </motion.div>
          ))}
        </StaggerGrid>

        <Reveal className="mt-8">
          <p className="text-sm text-parchment-500 max-w-3xl">
            Timelines and costs are quoted after discovery. No guaranteed delivery date or support SLA is
            implied before the scope and assumptions are agreed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
