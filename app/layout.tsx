import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo | Portfolio",
  description: "Leo's portfolio site for development work and community projects.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
