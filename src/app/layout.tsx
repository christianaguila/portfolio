import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
