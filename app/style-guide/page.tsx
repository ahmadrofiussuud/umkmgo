import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-paper text-ink p-8 md:p-16 max-w-6xl mx-auto">
      {/* Header */}
      <header className="border-b border-ink/10 pb-8 mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-ochre">
          Design System & Brand Guidelines
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-black mt-2 tracking-tight">
          Pasar UMKM Desa
        </h1>
        <p className="font-sans text-lg mt-4 text-ink/80 max-w-2xl leading-relaxed">
          Sistem desain visual yang membumi, hangat, dan tepercaya untuk platform digital pemasaran
          UMKM tingkat desa. Dibuat dengan palet warna bernuansa alam pedesaan, tipografi serif klasik
          yang bersahabat, dan aksen modern.
        </p>
      </header>

      {/* Section: Colors */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold border-b border-ink/5 pb-3 mb-6">
          1. Palet Warna (Color Palette)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {/* Ink */}
          <div className="flex flex-col">
            <div className="h-24 bg-ink rounded-lg shadow-inner mb-3 border border-ink/20" />
            <span className="font-sans font-bold text-sm">Ink (Tinta Gelap)</span>
            <span className="font-mono text-xs text-ink/60">#1B2E2B</span>
            <span className="text-xs text-ink/80 mt-1 leading-normal">
              Warna dasar gelap pekat. Dipakai untuk teks utama dan background gelap.
            </span>
          </div>

          {/* Paper */}
          <div className="flex flex-col">
            <div className="h-24 bg-paper rounded-lg shadow-sm mb-3 border border-ink/15" />
            <span className="font-sans font-bold text-sm">Paper (Kertas Hangat)</span>
            <span className="font-mono text-xs text-ink/60">#F3ECD8</span>
            <span className="text-xs text-ink/80 mt-1 leading-normal">
              Warna dasar terang/kartu. Memberikan kesan hangat dan ramah pembaca.
            </span>
          </div>

          {/* Ochre */}
          <div className="flex flex-col">
            <div className="h-24 bg-ochre rounded-lg shadow-sm mb-3 border border-ochre/25" />
            <span className="font-sans font-bold text-sm">Ochre (Kunyit/Emas)</span>
            <span className="font-mono text-xs text-ink/60">#C68A2E</span>
            <span className="text-xs text-ink/80 mt-1 leading-normal">
              Aksen utama/identitas. Dipakai untuk tombol primer dan sorotan penting.
            </span>
          </div>

          {/* Leaf */}
          <div className="flex flex-col">
            <div className="h-24 bg-leaf rounded-lg shadow-sm mb-3 border border-leaf/25" />
            <span className="font-sans font-bold text-sm">Leaf (Daun/WhatsApp)</span>
            <span className="font-mono text-xs text-ink/60">#5C7A3D</span>
            <span className="text-xs text-ink/80 mt-1 leading-normal">
              Aksen aksi khusus. Terutama digunakan untuk tombol pemesanan via WhatsApp.
            </span>
          </div>

          {/* Clay */}
          <div className="flex flex-col">
            <div className="h-24 bg-clay rounded-lg shadow-sm mb-3 border border-clay/25" />
            <span className="font-sans font-bold text-sm">Clay (Tanah Liat/Harga)</span>
            <span className="font-mono text-xs text-ink/60">#9A4B32</span>
            <span className="text-xs text-ink/80 mt-1 leading-normal">
              Aksen highlight & label harga. Menarik perhatian tanpa terkesan agresif.
            </span>
          </div>
        </div>
      </section>

      {/* Section: Typography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold border-b border-ink/5 pb-3 mb-6">
          2. Tipografi (Typography)
        </h2>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Display (Serif)</Badge>
              <span className="font-sans text-xs text-ink/60">Fraunces — Hangat & Tradisional</span>
            </div>
            <h1 className="font-display text-4xl font-bold">Kios Kelontong Makmur Sentosa</h1>
            <p className="font-sans text-sm text-ink/60 mt-1">
              Digunakan untuk judul utama (Heading 1 & 2), memperkuat kesan buatan tangan (artisanal).
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Body (Sans-Serif)</Badge>
              <span className="font-sans text-xs text-ink/60">
                Plus Jakarta Sans — Modern & Bersih
              </span>
            </div>
            <p className="font-sans text-base leading-relaxed">
              Madu Hutan Lestari dipanen langsung dari pohon sialang di pedalaman hutan desa. Proses
              pemanenan tradisional memastikan kualitas nutrisi madu tetap terjaga secara alami dari
              lebah liar Apis dorsata.
            </p>
            <p className="font-sans text-sm text-ink/60 mt-1">
              Digunakan untuk teks deskripsi, paragraf, dan antarmuka umum demi keterbacaan yang
              maksimal.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Utility (Monospace)</Badge>
              <span className="font-sans text-xs text-ink/60">IBM Plex Mono — Presisi & Data</span>
            </div>
            <div className="font-mono text-xl font-bold text-clay">Rp 85.000,-</div>
            <div className="font-mono text-xs text-ink/70 mt-1">
              NO. REK / NO. WA: 0812-3456-7890 | KIOS 03
            </div>
            <p className="font-sans text-sm text-ink/60 mt-1">
              Digunakan untuk angka harga, nomor kontak, kode data, dan label ringkas.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Reusable Components */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold border-b border-ink/5 pb-3 mb-6">
          3. Komponen Reusable (UI Components)
        </h2>

        {/* Buttons */}
        <div className="mb-10">
          <h3 className="font-display text-lg font-bold mb-4">Tombol (Buttons)</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Primary / Ochre</span>
              <Button variant="primary">Lihat Detail Kios</Button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Action / Leaf</span>
              <Button variant="action">Pesan via WhatsApp</Button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Ghost</span>
              <Button variant="ghost">Kembali</Button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Disabled / Small</span>
              <Button variant="primary" size="sm" disabled>
                Tidak Tersedia
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Large Action</span>
              <Button variant="action" size="lg">
                Hubungi Penjual
              </Button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-10">
          <h3 className="font-display text-lg font-bold mb-4">Label & Lencana (Badges)</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Primary</span>
              <Badge variant="primary">Kios 01</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Secondary</span>
              <Badge variant="secondary">Camilan</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Leaf</span>
              <Badge variant="leaf">Madu Asli</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Dark</span>
              <Badge variant="dark">Eko-Friendly</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Outline</span>
              <Badge variant="outline">Sukamaju</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Medium Size</span>
              <Badge variant="secondary" size="md">
                Terpopuler
              </Badge>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div>
          <h3 className="font-display text-lg font-bold mb-4">Kartu Konten (Cards)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Kios (Variant: Organic) */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Kios Card (Variant: Organic)</span>
              <Card variant="organic" className="flex flex-col h-full bg-paper-light">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="primary">Kios 01</Badge>
                    <span className="font-mono text-xs text-ink/60">Caringin</span>
                  </div>
                  <h4 className="font-display text-xl font-bold">Kios Madu Hutan Lestari</h4>
                </CardHeader>
                <CardBody>
                  <p className="font-sans text-sm text-ink/80 line-clamp-2">
                    Madu murni langsung dari sarang lebah liar hutan tropis desa, dipanen secara lestari
                    tanpa merusak ekosistem hutan lindung.
                  </p>
                </CardBody>
                <CardFooter>
                  <span className="font-mono text-[10px] text-ochre font-bold">3 PRODUK</span>
                  <Button variant="primary" size="sm">
                    Masuk Kios
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Card Produk (Variant: Default) */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink/60">Product Card (Variant: Default)</span>
              <Card variant="default" className="flex flex-col h-full bg-paper-light">
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] bg-ink/5 w-full flex items-center justify-center border-b border-ink/10 relative">
                    <div className="absolute top-3 left-3">
                      <Badge variant="dark">Madu</Badge>
                    </div>
                    <span className="font-sans text-xs text-ink/40 font-semibold">Foto Produk</span>
                  </div>
                </CardHeader>
                <CardBody className="p-5">
                  <h4 className="font-display text-lg font-bold mb-1">Madu Hutan Murni 500ml</h4>
                  <p className="font-sans text-xs text-ink/70 line-clamp-2 mb-3">
                    Madu mentah alami tanpa pengawet atau pemanis buatan, dipanen langsung dari hutan liar.
                  </p>
                  <div className="font-mono text-lg font-bold text-clay">Rp 85.000</div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="action" size="sm" className="w-full">
                    Pesan via WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
