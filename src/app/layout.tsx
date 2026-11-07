import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import ChatWidget from '@/components/ChatWidget';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const siteUrl = 'https://devray.qzz.io';
const siteDescription =
  'DevRay is a founder-led software and applied-AI engineering practice. Custom AI applications, web platforms, mobile apps and data/ML work — designed, engineered and deployed around real operational needs.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DevRay | Founder-led Software & AI Engineering',
    template: '%s | DevRay',
  },
  description: siteDescription,
  applicationName: 'DevRay',
  authors: [{ name: 'Raymond (DevRay) Klanderman', url: 'https://rayklanderman.is-a.dev/' }],
  creator: 'Raymond (DevRay) Klanderman',
  keywords: [
    'DevRay',
    'software engineering',
    'AI engineering',
    'AI applications',
    'web platforms',
    'Flutter mobile apps',
    'applied machine learning',
    'Nairobi software engineer',
    'founder-led software consultancy',
  ],
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'DevRay',
    title: 'DevRay | Founder-led Software & AI Engineering',
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevRay — founder-led software and AI engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevRay | Founder-led Software & AI Engineering',
    description: siteDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#070d0a',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      name: 'DevRay',
      alternateName: 'DevRay Lab',
      url: siteUrl,
      description: siteDescription,
      email: 'info@devray.qzz.io',
      founder: { '@id': `${siteUrl}/#person` },
      areaServed: 'Worldwide',
      sameAs: [
        'https://github.com/rayklanderman',
        'https://www.linkedin.com/in/rayklanderman/',
        'https://www.youtube.com/@RealDevRay',
      ],
      knowsAbout: [
        'AI applications',
        'Web platform engineering',
        'Flutter mobile applications',
        'Applied machine learning',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Raymond (DevRay) Klanderman',
      jobTitle: 'Software & AI Engineer',
      url: 'https://rayklanderman.is-a.dev/',
      sameAs: [
        'https://www.linkedin.com/in/rayklanderman/',
        'https://github.com/rayklanderman',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'DevRay',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ochre-400 focus:text-ink-950 focus:rounded-lg focus:font-semibold"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

