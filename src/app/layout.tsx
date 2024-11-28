import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "School Management System",
  description:
    "A comprehensive SaaS platform for educational institutions, streamlining operations from student enrollment to administrative tasks and parent-teacher communication.",
  keywords:
    "school management, education software, student portal, teacher portal, admin dashboard, academic management",
  authors: [{ name: "School LMS Team" }],
  creator: "School LMS",
  publisher: "School LMS",
  applicationName: "School Management System",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "School Management System",
    description: "Comprehensive educational institution management platform",
    images: "/og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Management System",
    description: "Streamline your educational institution operations",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
