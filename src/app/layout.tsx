import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Dorothy - Licensed Clinical Psychologist",
  description: "Professional psychological services including therapy, counseling, and mental health support. Specializing in anxiety, depression, trauma, and relationship issues.",
  keywords: ["psychologist", "therapy", "counseling", "mental health", "anxiety", "depression", "trauma"],
  authors: [{ name: "Dr. Dorothy" }],
  openGraph: {
    title: "Dr. Dorothy - Licensed Clinical Psychologist",
    description: "Professional psychological services including therapy, counseling, and mental health support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
