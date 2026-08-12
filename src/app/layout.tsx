import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "DevRay | Web, Mobile & AI Solutions",
  description: "DevRay builds scalable web, mobile, and AI solutions. Expert in full-stack development, data analysis, machine learning, and intelligent automation.",
  keywords: ["DevRay", "full-stack developer", "web development", "mobile apps", "AI solutions", "machine learning", "data analysis", "Python", "Next.js", "Flutter", "intelligent automation"],
  authors: [{ name: "Raymond Klanderman" }],
  metadataBase: new URL("https://devray.qzz.io"),
  openGraph: {
    title: "DevRay | Web, Mobile & AI Solutions",
    description: "DevRay builds scalable web, mobile, and AI solutions. Expert in full-stack development, data analysis, machine learning, and intelligent automation.",
    type: "website",
    url: "https://devray.qzz.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevRay — Web, Mobile & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevRay | Web, Mobile & AI Solutions",
    description: "DevRay builds scalable web, mobile, and AI solutions. Expert in full-stack development, data analysis, machine learning, and intelligent automation.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevRay",
  url: "https://devray.qzz.io",
  founder: {
    "@type": "Person",
    name: "Raymond Klanderman",
    url: "https://rayklanderman.is-a.dev/",
  },
  sameAs: [
    "https://github.com/rayklanderman",
    "https://www.linkedin.com/in/rayklanderman/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
