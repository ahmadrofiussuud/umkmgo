import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasar UMKM Desa - Platform Pemasaran Digital Desa",
  description: "Menghubungkan UMKM pedesaan dengan pembeli secara langsung via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
