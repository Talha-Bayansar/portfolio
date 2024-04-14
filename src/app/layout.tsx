import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Talha Bayansar - Portfolio",
  description:
    "Welcome to Talha Bayansar's portfolio website. Talha is a frontend developer passionate about creating elegant user interfaces using React and Next.js. Explore Talha's projects and get in touch!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased flex",
          fontSans.variable
        )}
      >
        <Navigation />
        <div className="md:ml-52">{children}</div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
