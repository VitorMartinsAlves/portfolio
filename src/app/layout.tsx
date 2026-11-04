import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Vitor Martins | Desenvolvedor Full Stack";
const description =
  "Portfólio de Vitor Martins: desenvolvimento full stack, aplicações web, APIs, integrações e automações.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Vitor Martins — Portfólio",
  authors: [{ name: "Vitor Martins", url: "https://github.com/VitorMartinsAlves" }],
  creator: "Vitor Martins",
  keywords: [
    "Vitor Martins",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MySQL",
    "Desenvolvimento Web",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description,
    siteName: "Vitor Martins",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f3f1eb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
