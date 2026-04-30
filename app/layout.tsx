import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Progressive Shapes — Beautiful React Progress Indicators",
  description: "A free, open-source React component library for customizable, accessible, and animated progress indicators. Shapes include circles, hearts, stars, donuts, and more.",
  keywords: [
    "react progress indicator",
    "progressive shapes",
    "react component library",
    "open source react",
    "progress bar react",
    "animated shapes react",
  ],
  authors: [{ name: "amiola_dev", url: "https://github.com/feranmiba" }],
  openGraph: {
    title: "Progressive Shapes — Beautiful React Progress Indicators",
    description: "Drop beautiful, customizable progress shapes into any React app in seconds. Free and open source.",
    url: "https://progressive-shapes.vercel.app",
    siteName: "Progressive Shapes",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Progressive Shapes",
    description: "Beautiful, customizable React progress indicators.",
    creator: "@emmanuel_amiola",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
