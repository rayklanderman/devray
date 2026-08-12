'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { projects } from '@/data';
import { StaggerGrid, staggerItem, Reveal } from '@/components/motion/Reveal';
import TiltCard from '@/components/motion/TiltCard';

const signatureProjects = projects.filter((p) => p.tier === 'signature');
const secondaryProjects = projects.filter((p) => p.tier === 'secondary');

function SignatureCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <TiltCard
      variants={staggerItem}
      className="group bg-ink-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-ink-700 relative"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width:768px) 100vw, 33vw"
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
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-ink-800 text-parchment-300 rounded text-xs font-medium border border-ink-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-ink-700 text-parchment-100 rounded-lg hover:bg-ink-800 hover:border-ochre-500/40 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

function SecondaryCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group bg-ink-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-ink-700"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-parchment-100">
            {project.title}
          </h3>
        </div>

        <p className="text-parchment-500 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-ink-800 text-parchment-300 rounded text-xs font-medium border border-ink-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors text-sm font-medium"
            >
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-ink-700 text-parchment-100 rounded-lg hover:bg-ink-800 hover:border-ochre-500/40 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-parchment-100 mb-4">
            Client Case Files &amp; Solutions
          </h2>
          <p className="text-xl text-parchment-300 max-w-3xl mx-auto">
            A showcase of our latest work demonstrating expertise across web development,
            AI/ML, and mobile applications.
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {signatureProjects.map((project) => (
            <SignatureCard key={project.id} project={project} />
          ))}
        </StaggerGrid>

        <div className="border-t border-ochre-500/40 mb-12" />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <SecondaryCard key={project.id} project={project} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
