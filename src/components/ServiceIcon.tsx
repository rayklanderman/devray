import type { ReactNode } from 'react';

const paths: Record<string, ReactNode> = {
  globe: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  ),
  chart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  ),
  brain: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  sparkles: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  ),
  pen: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  ),
  video: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  ),
  smartphone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  ),
  wordpress: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M12 2a10 10 0 100 20 10 10 0 000-20zM3 12c0 3.5 2 6.5 5 8l-4-11c-.6 1-1 2-1 3zm9 9c.7 0 1.4-.1 2-.3l-2.4-7-2.4 7c.9.2 1.8.3 2.8.3zm4.5-2.5c1-1.7 1.5-3.5 1.5-4.5 0-1.6-.6-2.7-1.1-3.5-.5-.8-1-1.5-1-2.3 0-.9.7-1.7 1.7-1.7h.2C16.5 4.2 14.4 3 12 3c-1.7 0-3.3.6-4.5 1.6h.3c1 0 1.7.9 1.7 1.7 0 1-.6 1.8-1.2 2.7-.5.8-1 1.9-1 3.4 0 2.1 1.2 4.9 2.7 7.4 1-2.6 2-5.2 2.9-7.8-.6 0-1.2-.1-1.8-.4l.5-1.4c.9.4 1.9.6 2.8.6.9 0 1.8-.2 2.6-.6l.6 1.4c-.7.3-1.4.4-2.1.4l2.7 7.1z"
    />
  ),
  social: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  ),
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M9 12l2 2 4-4m5.6-4.4A11.9 11.9 0 0112 3a11.9 11.9 0 01-8.6 2.6A12 12 0 003 12c0 4.4 2.4 8.4 6 10 1-.6 1.9-1.3 2.7-2.2m9.9-12.2A12 12 0 0121 12c0 4.4-2.4 8.4-6 10"
    />
  ),
  compass: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M12 21a9 9 0 100-18 9 9 0 000 18zm3.5-12.5l-2 5-5 2 2-5 5-2z"
    />
  ),
  layers: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M12 3l9 5-9 5-9-5 9-5zm9 9l-9 5-9-5m18 4l-9 5-9-5"
    />
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  ),
};

export default function ServiceIcon({
  name,
  className = 'w-6 h-6',
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] ?? paths.sparkles}
    </svg>
  );
}
