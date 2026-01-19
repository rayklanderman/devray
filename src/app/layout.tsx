import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevRay | Full-Stack Developer & AI Engineer",
  description: "Dev Ray (Raymond Klanderman) - Building smart, scalable software and AI systems. Services include web development, data analysis, machine learning, AI development, content creation, live streaming, and mobile app development.",
  keywords: ["DevRay", "Raymond Klanderman", "full-stack developer", "AI engineer", "web development", "data analysis", "machine learning", "AI development", "mobile apps", "Flutter", "Next.js", "Python"],
  authors: [{ name: "Raymond Klanderman" }],
  openGraph: {
    title: "DevRay | Full-Stack Developer & AI Engineer",
    description: "Building smart, scalable software and AI systems. Services include web development, data analysis, machine learning, and more.",
    type: "website",
  },
  icons: {
    icon: '/cropped_circle_image.png',
    apple: '/cropped_circle_image.png',
    shortcut: '/cropped_circle_image.png',
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
