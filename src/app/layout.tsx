import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevRay | Web, Mobile & AI Solutions",
  description: "DevRay builds scalable web, mobile, and AI solutions. Expert in full-stack development, data analysis, machine learning, and intelligent automation.",
  keywords: ["DevRay", "full-stack developer", "web development", "mobile apps", "AI solutions", "machine learning", "data analysis", "Python", "Next.js", "Flutter", "intelligent automation"],
  authors: [{ name: "Raymond Klanderman" }],
  openGraph: {
    title: "DevRay | Web, Mobile & AI Solutions",
    description: "DevRay builds scalable web, mobile, and AI solutions. Expert in full-stack development, data analysis, machine learning, and intelligent automation.",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
