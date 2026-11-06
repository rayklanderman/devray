'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { projects } from '@/data';
import { StaggerGrid, staggerItem, Reveal } from '@/components/motion/Reveal';
import ProjectCard from '@/components/ProjectCard';

const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 bg-ink-900 border-y border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
            Selected work
          </p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
            Client case files &amp; engineering evidence.
          </h2>
          <p className="text-parchment-300 leading-relaxed">
            A selection of live systems across health, education, accessibility, civic technology and
            machine learning. Each case study separates what was built from what has actually been
            verified.
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem} className="h-full">
              <ProjectCard project={project} featured />
            </motion.div>
          ))}
        </StaggerGrid>

        <Reveal className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-6 py-3 border border-ink-700 text-parchment-100 rounded-lg hover:bg-ink-800 hover:border-ochre-500/40 transition-colors font-medium text-sm"
          >
            Explore all {projects.length} case studies
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
