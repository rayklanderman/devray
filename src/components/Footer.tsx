import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, professionalProfile, services, projects } from '@/data';

const socialIcons: Record<string, ReactElement> = {
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};

const coreServices = services.filter((service) => service.tier === 'core');
const additionalCount = services.filter((service) => service.tier === 'additional').length;
const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

const companyLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'AI Chat', href: '/chat' },
  { label: 'All work', href: '/work' },
  { label: 'Privacy', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-parchment-300 border-t border-ink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" aria-label="DevRay home">
              <Image
                src="/cropped_circle_image.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-parchment-100">DevRay</span>
            </Link>
            <p className="text-sm text-parchment-500 leading-relaxed">
              Founder-led software and applied-AI engineering. Live systems across health, education,
              accessibility and civic technology.
            </p>
            <p className="text-sm text-parchment-500">{professionalProfile.location}</p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-parchment-500 hover:text-ochre-300 hover:bg-ink-900 rounded-lg transition-colors"
                  aria-label={`${social.platform} (opens in a new tab)`}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-parchment-100 font-semibold mb-4 text-sm uppercase tracking-wider">Services</h2>
            <ul className="space-y-2.5 text-sm">
              {coreServices.map((service) => (
                <li key={service.id}>
                  <Link href="/#services" className="text-parchment-500 hover:text-ochre-300 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#services" className="text-parchment-500 hover:text-ochre-300 transition-colors">
                  +{additionalCount} additional capabilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-parchment-100 font-semibold mb-4 text-sm uppercase tracking-wider">Selected work</h2>
            <ul className="space-y-2.5 text-sm">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-parchment-500 hover:text-ochre-300 transition-colors"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/work" className="text-ochre-400 hover:text-ochre-300 transition-colors font-medium">
                  All case studies →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-parchment-100 font-semibold mb-4 text-sm uppercase tracking-wider">DevRay</h2>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-parchment-500 hover:text-ochre-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-parchment-100 font-semibold mb-3 mt-6 text-sm uppercase tracking-wider">Founder</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={professionalProfile.founderLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-500 hover:text-ochre-300 transition-colors"
                >
                  Technical portfolio ↗
                </a>
              </li>
              <li>
                <a
                  href={professionalProfile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-500 hover:text-ochre-300 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@devray.site"
                  className="text-parchment-500 hover:text-ochre-300 transition-colors"
                >
                  info@devray.site
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-700 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-parchment-500">
          <p>&copy; {new Date().getFullYear()} DevRay. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-ochre-300 transition-colors">Privacy</Link>
            <span aria-hidden="true">·</span>
            <span>Built with Next.js, TypeScript and Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
