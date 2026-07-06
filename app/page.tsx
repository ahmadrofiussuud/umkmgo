import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { umkmList } from "@/data/umkm";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col relative z-0">
      {/* Batik Pattern Overlay for textured background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.038] mix-blend-multiply"
        style={{
          backgroundImage: "url('/images/batik_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />
      {/* Soft blurry organic color blobs in the background for depth and flow */}
      <div className="absolute top-[18%] left-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-ochre/10 blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[48%] right-[2%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-leaf/8 blur-[120px] sm:blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[75%] left-[8%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-clay/8 blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      {/* Large Organic Flowing Batik watermark graphics on sides (like shadow clouds/flowers) */}
      {/* Floating Kawung Batik circle pattern on left */}
      <div className="absolute left-0 top-[25%] -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] opacity-[0.025] mix-blend-multiply pointer-events-none -z-10 text-ochre">
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="20" r="80" />
          <circle cx="100" cy="180" r="80" />
          <circle cx="20" cy="100" r="80" />
          <circle cx="180" cy="100" r="80" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="150" cy="50" r="40" />
          <circle cx="50" cy="150" r="40" />
          <circle cx="150" cy="150" r="40" />
          <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Floating Megamendung Cloud-wave pattern on right */}
      <div className="absolute right-0 top-[60%] translate-x-1/4 w-[380px] sm:w-[550px] h-[250px] sm:h-[400px] opacity-[0.025] mix-blend-multiply pointer-events-none -z-10 text-leaf">
        <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Concentric cloud patterns */}
          <path d="M10 90 C 35 60, 75 60, 95 80 C 115 100, 155 100, 175 80 C 190 65, 195 75, 200 90" />
          <path d="M20 80 C 42 53, 78 53, 98 70 C 118 87, 150 87, 170 70 C 183 57, 188 65, 192 80" />
          <path d="M30 70 C 49 46, 81 46, 101 60 C 121 74, 145 74, 165 60 C 176 49, 181 55, 184 70" />
          <path d="M40 60 C 56 39, 84 39, 104 50 C 124 61, 140 61, 160 50" />
        </svg>
      </div>
      {/* Transparent Navigation Bar overlaying Hero */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6 px-4 sm:px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-black tracking-tight text-white hover:text-ochre-light transition-colors">
          Pasar UMKM Desa
        </a>
        <div className="hidden md:flex items-center gap-8 font-sans font-semibold text-sm">
          <a href="#" className="text-white/80 hover:text-ochre-light transition-colors">
            Beranda
          </a>
          <a href="#peta-rute" className="text-white/80 hover:text-ochre-light transition-colors">
            Rute Kios
          </a>
          <a href="#daftar-kios" className="text-white/80 hover:text-ochre-light transition-colors">
            Daftar Kios
          </a>
        </div>
        <div>
          <Badge variant="outline" size="md" className="bg-white/10 text-white border-white/20">
            Desa Caringin
          </Badge>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-0 w-full bg-ink text-paper-light overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36 md:pt-52 md:pb-44 px-4 sm:px-8 md:px-16 text-center flex flex-col items-center justify-center">
        {/* Background Village Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 -z-20 scale-105 transition-transform duration-[10s] ease-out"
          style={{ backgroundImage: "url('/images/foto_desa.jpg')" }}
        />
        {/* Dark Dim Overlay for centered text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink -z-10" />

        {/* Content Wrapper aligned with max-width content below, centered */}
        <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center justify-center">
          <Badge
            variant="primary"
            size="md"
            className="mb-6 bg-ochre/20 text-ochre-light border border-ochre-light/20 flex items-center"
          >
            Platform Pemasaran Digital Desa
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight text-white">
            Menghubungkan <span className="text-ochre-light italic font-serif">Karya Terbaik Desa</span> Langsung ke Genggaman Anda
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-paper-light/80 max-w-2xl mt-6 leading-relaxed">
            Temukan produk-produk unggulan hasil karya warga desa Caringin. Mulai dari madu mentah
            alami, kerajinan anyaman bambu, hingga camilan keripik renyah. Pesan langsung via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center">
            <a href="#peta-rute" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full shadow-lg shadow-ochre/25">
                Jelajahi Rute Desa
              </Button>
            </a>
            <a href="#daftar-kios" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="lg"
                className="w-full !text-paper-light border border-paper-light/25 hover:!bg-paper-light/10 focus-visible:!ring-paper-light transition-all"
              >
                Lihat Daftar Kios
              </Button>
            </a>
          </div>
        </div>

        {/* Organic Curved Hill Divider at bottom of Hero - Inverse filled to blend top part green, bottom transparent */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 select-none pointer-events-none">
          <svg 
            className="relative block w-full h-[32px] sm:h-[48px] md:h-[64px] border-none outline-none" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,0 L0,0 Z"
              fill="#1B2E2B"
              stroke="none"
              strokeWidth="0"
            />
          </svg>
        </div>
      </header>

      {/* Signature Element: Village Map SVG Connectors */}

      <section id="peta-rute" className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto w-full scroll-mt-20">
        <div className="text-center mb-12">
          <Badge variant="secondary" size="md" className="mb-2">
            Rute Kunjungan
          </Badge>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
            Alur Jelajah Kios Desa
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink/70 mt-2">
            Ikuti rute jalan desa kami untuk menemukan kios-kios UMKM secara berurutan.
          </p>
        </div>

        {/* The Desktop/Tablet Map Container */}
        <div className="relative w-full h-[480px] bg-paper-light/40 border border-ink/10 rounded-2xl hidden md:block overflow-hidden p-6 shadow-sm">
          {/* River decorative SVG path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 1000 480">
            {/* The River */}
            <path
              d="M -50 350 Q 200 420, 350 240 T 700 300 T 1050 150"
              fill="none"
              stroke="#D4DFD2"
              strokeWidth="20"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Winding Road Connector */}
            <path
              d="M 180 180 Q 320 120, 500 240 T 820 180"
              fill="none"
              stroke="#C68A2E"
              strokeWidth="3"
              strokeDasharray="12, 10"
              strokeLinecap="round"
            />
            {/* Small decorative trees/dots along the river/road */}
            <circle cx="280" cy="180" r="4" fill="#5C7A3D" opacity="0.4" />
            <circle cx="340" cy="300" r="6" fill="#5C7A3D" opacity="0.3" />
            <circle cx="620" cy="220" r="5" fill="#5C7A3D" opacity="0.4" />
            <circle cx="680" cy="350" r="4" fill="#5C7A3D" opacity="0.3" />
            <circle cx="780" cy="270" r="5" fill="#5C7A3D" opacity="0.4" />

            {/* Little house background indicators */}
            <path d="M 120 110 L 130 100 L 140 110 Z" fill="#9A4B32" opacity="0.3" />
            <rect x="123" y="110" width="14" height="10" fill="#9A4B32" opacity="0.2" />
            <path d="M 450 340 L 460 330 L 470 340 Z" fill="#9A4B32" opacity="0.3" />
            <rect x="453" y="340" width="14" height="10" fill="#9A4B32" opacity="0.2" />
            <path d="M 880 250 L 890 240 L 900 250 Z" fill="#9A4B32" opacity="0.3" />
            <rect x="883" y="250" width="14" height="10" fill="#9A4B32" opacity="0.2" />
          </svg>

          {/* Kios Node 1 Card */}
          <div className="absolute left-[2%] lg:left-[5%] top-[40px] w-[230px] lg:w-[290px]">
            <Card variant="organic" className="shadow-md hover:shadow-lg bg-paper-light border-ochre/30">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="primary">Kios 01</Badge>
                  <span className="font-mono text-[10px] text-ink/60">Langkah 1</span>
                </div>
                <h3 className="font-display text-sm lg:text-lg font-bold text-ink leading-tight">
                  Madu Hutan Lestari
                </h3>
              </CardHeader>
              <CardBody className="pb-3">
                <p className="font-sans text-[11px] lg:text-xs text-ink/75 leading-relaxed">
                  Cicipi rasa murni madu hutan liar alami yang dipanen langsung dari dahan lebah pohon sialang.
                </p>
              </CardBody>
              <CardFooter className="pt-2 border-t border-ink/5">
                <span className="font-mono text-[9px] text-clay font-bold uppercase">Madu Murni</span>
                <a href="#umkm-1">
                  <Button variant="primary" size="sm">
                    Kunjungi Kios
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>

          {/* Kios Node 2 Card */}
          <div className="absolute left-[36%] lg:left-[35.5%] top-[220px] lg:top-[200px] w-[230px] lg:w-[290px]">
            <Card variant="organic" className="shadow-md hover:shadow-lg bg-paper-light border-ochre/30">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="primary">Kios 02</Badge>
                  <span className="font-mono text-[10px] text-ink/60">Langkah 2</span>
                </div>
                <h3 className="font-display text-sm lg:text-lg font-bold text-ink leading-tight">
                  Pengrajin Anyaman Bambu
                </h3>
              </CardHeader>
              <CardBody className="pb-3">
                <p className="font-sans text-[11px] lg:text-xs text-ink/75 leading-relaxed">
                  Lihat detail kerajinan anyaman bambu bernilai seni tinggi hasil buatan tangan pengrajin sepuh.
                </p>
              </CardBody>
              <CardFooter className="pt-2 border-t border-ink/5">
                <span className="font-mono text-[9px] text-clay font-bold uppercase">Kerajinan</span>
                <a href="#umkm-2">
                  <Button variant="primary" size="sm">
                    Kunjungi Kios
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>

          {/* Kios Node 3 Card */}
          <div className="absolute left-[67%] lg:left-[66%] top-[40px] w-[230px] lg:w-[290px]">
            <Card variant="organic" className="shadow-md hover:shadow-lg bg-paper-light border-ochre/30">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="primary">Kios 03</Badge>
                  <span className="font-mono text-[10px] text-ink/60">Langkah 3</span>
                </div>
                <h3 className="font-display text-sm lg:text-lg font-bold text-ink leading-tight">
                  Keripik Mpok Siti
                </h3>
              </CardHeader>
              <CardBody className="pb-3">
                <p className="font-sans text-[11px] lg:text-xs text-ink/75 leading-relaxed">
                  Nikmati gurih dan renyahnya keripik singkong bumbu balado basah racikan resep turun-temurun.
                </p>
              </CardBody>
              <CardFooter className="pt-2 border-t border-ink/5">
                <span className="font-mono text-[9px] text-clay font-bold uppercase">Kuliner</span>
                <a href="#umkm-3">
                  <Button variant="primary" size="sm">
                    Kunjungi Kios
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Mobile Winding Path (Vertical Trail Map) */}
        <div className="relative w-full flex flex-col items-center gap-10 md:hidden py-8 overflow-hidden">
          {/* Background Vertical Connector SVG */}
          <svg
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[120px] h-full pointer-events-none -z-10"
            viewBox="0 0 120 780"
            preserveAspectRatio="none"
          >
            <path
              d="M 60 0 C 10 150, 110 300, 60 420 C 10 540, 110 660, 60 780"
              fill="none"
              stroke="#C68A2E"
              strokeWidth="3"
              strokeDasharray="12, 10"
              strokeLinecap="round"
            />
            <circle cx="35" cy="180" r="4" fill="#5C7A3D" opacity="0.4" />
            <circle cx="85" cy="380" r="5" fill="#5C7A3D" opacity="0.4" />
            <circle cx="35" cy="580" r="4" fill="#5C7A3D" opacity="0.4" />
          </svg>

          {/* Card Mobile 1 */}
          <div className="w-full max-w-[310px] translate-x-[-12px]">
            <Card variant="organic" className="shadow-md bg-paper-light border-ochre/30">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="primary">Kios 01</Badge>
                  <span className="font-mono text-[9px] text-ink/60">Langkah 1</span>
                </div>
                <h3 className="font-display text-base font-bold text-ink leading-tight">
                  Madu Hutan Lestari
                </h3>
              </CardHeader>
              <CardBody className="pb-3">
                <p className="font-sans text-[11px] text-ink/75 leading-relaxed">
                  Cicipi rasa murni madu hutan liar alami yang dipanen langsung dari dahan lebah pohon sialang.
                </p>
              </CardBody>
              <CardFooter className="pt-2 border-t border-ink/5">
                <span className="font-mono text-[8px] text-clay font-bold uppercase">Madu Murni</span>
                <a href="#umkm-1">
                  <Button variant="primary" size="sm">
                    Lihat Kios
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>

          {/* Card Mobile 2 */}
          <div className="w-full max-w-[310px] translate-x-[12px]">
            <Card variant="organic" className="shadow-md bg-paper-light border-ochre/30">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="primary">Kios 02</Badge>
                  <span className="font-mono text-[9px] text-ink/60">Langkah 2</span>
                </div>
                <h3 className="font-display text-base font-bold text-ink leading-tight">
                  Pengrajin Anyaman Bambu
                </h3>
              </CardHeader>
              <CardBody className="pb-3">
                <p className="font-sans text-[11px] text-ink/75 leading-relaxed">
                  Lihat detail kerajinan anyaman bambu bernilai seni tinggi hasil buatan tangan pengrajin sepuh.
                </p>
              </CardBody>
              <CardFooter className="pt-2 border-t border-ink/5">
                <span className="font-mono text-[8px] text-clay font-bold uppercase">Kerajinan</span>
                <a href="#umkm-2">
                  <Button variant="primary" size="sm">
                    Lihat Kios
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>

          {/* Card Mobile 3 */}
          <div className="w-full max-w-[310px] translate-x-[-12px]">
            <Card variant="organic" className="shadow-md bg-paper-light border-ochre/30">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="primary">Kios 03</Badge>
                  <span className="font-mono text-[9px] text-ink/60">Langkah 3</span>
                </div>
                <h3 className="font-display text-base font-bold text-ink leading-tight">
                  Keripik Mpok Siti
                </h3>
              </CardHeader>
              <CardBody className="pb-3">
                <p className="font-sans text-[11px] text-ink/75 leading-relaxed">
                  Nikmati gurih dan renyahnya keripik singkong bumbu balado basah racikan resep turun-temurun.
                </p>
              </CardBody>
              <CardFooter className="pt-2 border-t border-ink/5">
                <span className="font-mono text-[8px] text-clay font-bold uppercase">Kuliner</span>
                <a href="#umkm-3">
                  <Button variant="primary" size="sm">
                    Lihat Kios
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Kiosk Content List */}
      <section id="daftar-kios" className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto w-full scroll-mt-20 flex-1">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" size="md" className="mb-3 border-ochre/30 text-ochre">
            Pilihan UMKM Terbaik ({umkmList.length} Kios Aktif)
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-ink leading-tight">
            Daftar Kios Pasar Desa
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[1px] w-12 bg-ink/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-ochre/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-ochre" />
            <div className="w-1.5 h-1.5 rounded-full bg-ochre/50" />
            <div className="h-[1px] w-12 bg-ink/15" />
          </div>
          <p className="font-sans text-sm sm:text-base text-ink/75 mt-4 leading-relaxed">
            Jelajahi produk-produk kearifan lokal buatan tangan warga desa Caringin. Hubungi langsung kontak WhatsApp tiap kios untuk pemesanan cepat.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {umkmList.map((umkm, idx) => (
            <ScrollReveal key={umkm.id} id={umkm.id} className="scroll-mt-24">
              {/* Kios Header Container */}
              <div className="bg-paper-light/30 border border-ink/10 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="dark">Kios 0{idx + 1}</Badge>
                    <span className="font-mono text-xs text-ink/50">ID: {umkm.id}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-ink">{umkm.nama}</h3>
                  <p className="font-sans text-sm sm:text-base text-ink/80 italic mt-1 leading-relaxed">
                    &ldquo;{umkm.tagline}&rdquo;
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end justify-center font-mono text-xs text-ink/70 gap-2 border-t md:border-t-0 md:border-l border-ink/10 pt-4 md:pt-0 md:pl-6 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-ochre shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{umkm.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-leaf shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>+{umkm.nomorWhatsApp}</span>
                  </div>
                </div>
              </div>

              {/* Product Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
                {umkm.produk.map((product) => {
                  const waUrl = generateWhatsAppUrl(umkm.nama, product.nama, umkm.nomorWhatsApp);
                  const isValid = !!waUrl;

                  return (
                    <Card key={product.id} variant="default" className="flex flex-col h-full bg-paper-light/50 group hover:shadow-md transition-all duration-300">
                      {/* Gambar Produk */}
                      <div className="aspect-[4/3] bg-ink/5 rounded-t-lg relative overflow-hidden border-b border-ink/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.gambar}
                          alt={product.nama}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="outline" size="sm" className="bg-paper-light/80 backdrop-blur-sm">
                            {product.id}
                          </Badge>
                        </div>
                      </div>

                      <CardBody className="p-5 flex flex-col flex-1">
                        <h4 className="font-display text-base sm:text-lg font-bold text-ink leading-tight mb-2">
                          {product.nama}
                        </h4>
                        <p className="font-sans text-xs text-ink/75 leading-relaxed line-clamp-3 mb-4 flex-1">
                          {product.deskripsi}
                        </p>
                        <div className="font-mono text-base font-bold text-clay border-t border-ink/5 pt-3">
                          Rp {product.harga.toLocaleString("id-ID")},-
                        </div>
                      </CardBody>

                      <CardFooter className="pt-0 p-5">
                        {isValid ? (
                          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="action" size="sm" className="w-full py-3 md:py-2.5">
                              Pesan via WhatsApp
                            </Button>
                          </a>
                        ) : (
                          <Button variant="action" size="sm" className="w-full py-3 md:py-2.5" disabled>
                            Nomor WA Tidak Valid
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Simple Earthy Footer */}
      <footer className="bg-ink text-paper-light py-12 px-4 sm:px-8 md:px-16 border-t border-ink/20 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-bold tracking-wide">Pasar UMKM Desa</h4>
            <p className="text-xs text-paper-light/60 mt-1">
              Memberdayakan perekonomian warga Desa Caringin melalui teknologi digital.
            </p>
          </div>
          <div className="flex gap-6 text-xs font-semibold">
            <a href="#" className="hover:text-ochre transition-colors">
              Beranda
            </a>
            <a href="#peta-rute" className="hover:text-ochre transition-colors">
              Rute Kios
            </a>
            <a href="#daftar-kios" className="hover:text-ochre transition-colors">
              Daftar Kios
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-paper-light/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-paper-light/40 gap-4">
          <span>&copy; 2026 Desa Caringin. Hak Cipta Dilindungi Undang-Undang.</span>
          <span className="font-mono">BUILD V1.1.0-RESPONSIVE</span>
        </div>
      </footer>
    </div>
  );
}
