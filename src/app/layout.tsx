import type { Metadata } from "next";
import { Outfit, Inter_Tight } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Christian Rhomel Aguila — AI Automation Specialist",
  description:
    "AI Automation Developer building production-grade systems with n8n, Claude API, and Python. 3 years of enterprise analytics at Globe Telecom and Solaire Resort.",
  keywords: [
    "AI Automation",
    "n8n",
    "Claude API",
    "Python",
    "Workflow Automation",
    "Christian Rhomel Aguila",
  ],
  authors: [{ name: "Christian Rhomel Aguila" }],
  openGraph: {
    title: "Christian Rhomel Aguila — AI Automation Specialist",
    description:
      "Building AI-powered workflows that eliminate manual work and deliver measurable business results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${interTight.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
