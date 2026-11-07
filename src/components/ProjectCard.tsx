import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Project } from '@/types';

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const caseStudyHref = project.caseStudyUrl ?? `/work/${project.slug}`;

  if (!featured) {
    return (
      <article className="group bg-ink-900 rounded-2xl border border-ink-700 overflow-hidden hover:border-ochre-500/40 transition-colors flex flex-col">
        <Link href={caseStudyHref} className="relative block h-40 overflow-hidden">
          <Image
            src={project.screenshot}
            alt={project.screenshotAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-bold text-parchment-100">
              <Link href={caseStudyHref} className="hover:text-ochre-300 transition-colors">
                {project.title}
              </Link>
            </h3>
            {project.award && (
              <span className="shrink-0 bg-ochre-400 text-ink-950 rounded-full px-2 py-0.5 text-[10px] font-bold">
                {project.award}
              </span>
            )}
          </div>
          <p className="text-xs text-parchment-500 mb-3">
            {project.projectStatus}
            {project.engagementType ? ` · ${project.engagementType}` : ''}
          </p>
          <p className="text-sm text-parchment-500 leading-relaxed mb-4 line-clamp-3">
            {project.solution}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-ink-950 text-parchment-300 rounded text-[11px] font-medium border border-ink-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-4 text-xs font-semibold">
            <Link href={caseStudyHref} className="text-ochre-400 hover:text-ochre-300 transition-colors">
              Case study →
            </Link>
            {project.liveUrl && (
              <ExternalLink
                href={project.liveUrl}
                className="text-parchment-300 hover:text-ochre-300 transition-colors"
              >
                Live app ↗
              </ExternalLink>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-ink-900 rounded-2xl border border-ink-700 overflow-hidden hover:border-ochre-500/40 transition-colors flex flex-col h-full">
      <Link href={caseStudyHref} className="relative block h-48 overflow-hidden">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.award && (
            <span className="bg-ochre-400 text-ink-950 rounded-full px-3 py-1 text-xs font-bold shadow-lg">
              {project.award}
            </span>
          )}
          
        </span>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-parchment-500 mb-2">
          {project.projectStatus}
          {project.engagementType ? ` · ${project.engagementType}` : ''}
        </p>
        <h3 className="text-xl font-bold text-parchment-100 mb-3">
          <Link href={caseStudyHref} className="hover:text-ochre-300 transition-colors">
            {project.title}
          </Link>
        </h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-parchment-500 leading-relaxed line-clamp-2">
            <span className="text-parchment-300 font-medium">Problem: </span>
            {project.problem}
          </p>
          <p className="text-sm text-parchment-500 leading-relaxed line-clamp-2">
            <span className="text-parchment-300 font-medium">Built: </span>
            {project.solution}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-ink-950 text-parchment-300 rounded text-[11px] font-medium border border-ink-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 text-sm font-semibold">
          <Link href={caseStudyHref} className="text-ochre-400 hover:text-ochre-300 transition-colors">
            Read case study →
          </Link>
          {project.liveUrl && (
            <ExternalLink
              href={project.liveUrl}
              className="text-parchment-300 hover:text-ochre-300 transition-colors"
            >
              View live ↗
            </ExternalLink>
          )}
          {project.repositoryUrl && project.isRepositoryPublic && (
            <ExternalLink
              href={project.repositoryUrl}
              className="text-parchment-500 hover:text-ochre-300 transition-colors"
            >
              Source ↗
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
