import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { umkmList } from "@/data/umkm";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 bg-paper/85 backdrop-blur-md z-50 border-b border-ink/5 py-4 px-4 sm:px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-black tracking-tight text-ink hover:opacity-90">
          Pasar UMKM Desa
        </a>
        <div className="hidden md:flex items-center gap-8 font-sans font-semibold text-sm">
          <a href="#" className="text-ink hover:text-ochre transition-colors">
            Beranda
          </a>
          <a href="#peta-rute" className="text-ink hover:text-ochre transition-colors">
            Rute Kios
          </a>
          <a href="#daftar-kios" className="text-ink hover:text-ochre transition-colors">
            Daftar Kios
          </a>
        </div>
        <div>
          <Badge variant="dark" size="md">
            Desa Caringin
          </Badge>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto text-center flex flex-col items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-ochre/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <Badge variant="primary" size="md" className="mb-4">
          Platform Pemasaran Digital Desa
        </Badge>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl leading-tight">
          Menghubungkan Karya Terbaik Desa Langsung ke Tangan Anda
        </h1>
        <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-ink/80 max-w-2xl mt-4 sm:mt-6 leading-relaxed">
          Temukan produk-produk unggulan terbaik hasil karya warga desa Caringin. Mulai dari madu
          mentah alami, kerajinan anyaman bambu, hingga camilan keripik renyah. Pesan langsung
          via WhatsApp tanpa perantara.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 w-full sm:w-auto justify-center px-4 sm:px-0">
          <a href="#peta-rute" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              Jelajahi Rute Desa
            </Button>
          </a>
          <a href="#daftar-kios" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full">
              Langsung Lihat Kios
            </Button>
          </a>
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-ink/10 pb-4 mb-12 sm:mb-16 gap-3">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">Daftar Kios Pasar Desa</h2>
          <span className="font-mono text-xs font-bold text-ochre uppercase tracking-wider">
            {umkmList.length} KIOS AKTIF
          </span>
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
                    <span className="text-ochre">📍</span>
                    <span>{umkm.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-leaf">💬</span>
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
                    <Card key={product.id} variant="default" className="flex flex-col h-full bg-paper-light/50">
                      {/* Dummy image representation with premium gradients */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-ochre/5 to-clay/10 w-full flex items-center justify-center border-b border-ink/10 relative p-4 text-center">
                        <div className="absolute top-3 left-3">
                          <Badge variant="outline" size="sm" className="bg-paper-light/80 backdrop-blur-sm">
                            {product.id}
                          </Badge>
                        </div>
                        <span className="font-display text-sm text-ink/40 font-bold italic">
                          {product.nama}
                        </span>
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
