import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasar UMKM Desa Caringin - Pemasaran Digital Lokal",
  description: "Temukan produk unggulan dari desa Caringin seperti madu murni, anyaman bambu, dan keripik singkong. Pesan mudah langsung via WhatsApp tanpa perantara.",
  keywords: ["UMKM Desa", "Pasar Desa", "Caringin", "Kerajinan Bambu", "Madu Hutan", "Kuliner Tradisional", "WhatsApp Marketing"],
  openGraph: {
    title: "Pasar UMKM Desa Caringin - Platform Pemasaran Digital Lokal",
    description: "Temukan produk unggulan lokal langsung dari produsen pedesaan Caringin. Hubungi mudah via WhatsApp.",
    type: "website",
    locale: "id_ID",
    url: "https://umkmgo.desa.id",
    siteName: "Pasar UMKM Desa Caringin",
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
    <html
      lang="id"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
