"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardFooter } from "@/components/ui/card";
import { umkmList } from "@/data/umkm";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

// Flatten all products with their seller information and custom category tag
const allProducts = umkmList.flatMap((umkm) =>
  umkm.produk.map((prod) => ({
    ...prod,
    sellerName: umkm.nama,
    sellerWhatsApp: umkm.nomorWhatsApp,
    category: umkm.id === "umkm-1" ? "Madu" : umkm.id === "umkm-2" ? "Kerajinan" : "Kuliner",
    rating: umkm.id === "umkm-1" ? 4.9 : umkm.id === "umkm-2" ? 4.8 : 5.0,
    sales: umkm.id === "umkm-1" ? "88 Terjual" : umkm.id === "umkm-2" ? "32 Terjual" : "120 Terjual",
    originalHarga: Math.round(prod.harga * 1.2), // Dummy discount calculation
  }))
);

export default function ContohLayout() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Countdown timer calculation
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 14, minutes: 48, seconds: 18 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        clearInterval(interval);
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredProducts =
    activeTab === "Semua" ? allProducts : allProducts.filter((p) => p.category === activeTab);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "Bagaimana cara melakukan pembelian produk UMKM?",
      a: "Klik tombol 'Pesan via WhatsApp' pada kartu produk yang Anda inginkan. Anda akan otomatis diarahkan ke chat WhatsApp pengrajin/penjual produk tersebut dengan format pesan pemesanan yang sudah terisi otomatis.",
    },
    {
      q: "Apakah madu dari Kios Madu Hutan Lestari benar-benar murni?",
      a: "Ya, madu dipanen langsung dari sarang lebah liar (Apis dorsata) di hutan tropis sekitar Caringin secara berkala, tanpa pemanis buatan maupun bahan pengawet kimia.",
    },
    {
      q: "Berapa lama proses pembuatan kerajinan anyaman bambu kustom?",
      a: "Untuk pesanan kustom di luar katalog, proses anyaman memakan waktu sekitar 3 hingga 7 hari kerja tergantung tingkat kerumitan dan antrean pengrajin sepuh kami.",
    },
    {
      q: "Apakah produk makanan (keripik) bisa dikirim ke luar daerah?",
      a: "Bisa. Pengemasan keripik singkong Mpok Siti telah menggunakan kantong plastik kedap udara berkualitas food-grade sehingga tahan kerenyahannya hingga 2 bulan dalam pengiriman.",
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col relative z-0">
      {/* Repeating Batik Background Pattern */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.15] mix-blend-multiply"
        style={{
          backgroundImage: "url('/images/batik_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Floating abstract blobs like portfolio */}
      <div className="absolute top-[15%] left-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-ochre/8 blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[50%] right-[2%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-leaf/6 blur-[120px] sm:blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[80%] left-[8%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-clay/6 blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      {/* 1. Green Top-bar */}
      <div className="relative bg-ink text-paper-light py-2 text-center text-xs font-mono tracking-wide px-4 border-b border-white/5 z-20">
        📢 BAZAAR DESA ACTIVE: Belanja langsung via WA tanpa perantara, dukung ekonomi warga Caringin!
      </div>

      {/* 2. Navigation Bar - Absolute to overlay Hero */}
      <nav className="absolute top-10 left-0 right-0 z-50 bg-transparent py-6 px-4 sm:px-8 md:px-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-black tracking-tight text-white hover:text-ochre-light transition-colors">
          Pasar UMKM Desa
        </a>
        <div className="hidden md:flex items-center gap-8 font-sans font-semibold text-sm">
          <a href="/" className="text-white/80 hover:text-ochre-light transition-colors">
            Beranda
          </a>
          <a href="/#peta-rute" className="text-white/80 hover:text-ochre-light transition-colors">
            Rute Kios
          </a>
          <a href="/#daftar-kios" className="text-white/80 hover:text-ochre-light transition-colors">
            Daftar Kios
          </a>
          <a href="/contoh" className="text-white hover:text-ochre-light font-bold transition-colors">
            Contoh Layout
          </a>
        </div>
        <div>
          <Badge variant="outline" size="md" className="bg-white/10 text-white border-white/20">
            Desa Caringin
          </Badge>
        </div>
      </nav>

      {/* 3. Hero Section (Split Layout, matching main header styling) */}
      <header className="relative z-0 w-full bg-ink text-paper-light overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36 md:pt-52 md:pb-44 px-4 sm:px-8 md:px-16">
        {/* Background Village Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 -z-20 scale-105 transition-transform duration-[10s] ease-out"
          style={{ backgroundImage: "url('/images/foto_desa.jpg')" }}
        />
        {/* Dark Dim Overlay for centered text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink -z-10" />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="md:col-span-7 text-left flex flex-col items-start">
            <Badge
              variant="primary"
              size="md"
              className="mb-4 bg-ochre/20 text-ochre-light border border-ochre-light/20"
            >
              🍃 Estetika Organik Pedesaan
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
              Pusat Hasil Alam & <span className="text-ochre-light italic font-serif">Karya Anyaman</span> Desa Caringin
            </h1>
            <p className="font-sans text-base sm:text-lg text-paper-light/80 max-w-xl mt-6 leading-relaxed">
              Membawa kehangatan karya tradisional anyaman bambu, khasiat madu hutan liar murni, dan kelezatan camilan singkong langsung dari teras rumah warga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <a href="#best-sellers" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full shadow-lg shadow-ochre/25">
                  Belanja Sekarang
                </Button>
              </a>
              <a href="#promo-banners" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full !text-paper-light border border-paper-light/25 hover:!bg-paper-light/10 focus-visible:!ring-paper-light"
                >
                  Lihat Promo Hemat
                </Button>
              </a>
            </div>
          </div>

          {/* Right Product Image Column (Cosmetics style frame) */}
          <div className="md:col-span-5 relative hidden md:block">
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-ochre-light/35 shadow-2xl relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/madu_murni.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <Badge variant="primary" className="mb-2">Produk Unggulan</Badge>
                <h4 className="font-display text-lg font-bold text-white leading-tight">Madu Hutan Lestari</h4>
                <p className="text-xs text-paper-light/80 mt-1 font-sans">Apis Dorsata Asli Hutan Lindung Caringin</p>
              </div>
            </div>
            {/* Absolute badge */}
            <div className="absolute -top-4 -right-4 bg-ochre text-ink w-16 h-16 rounded-full flex flex-col items-center justify-center font-mono text-[9px] font-bold border-2 border-paper-light shadow-lg rotate-12">
              <span>100%</span>
              <span>ASLI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hill curve sibling */}
      <div className="relative w-full h-[32px] sm:h-[48px] md:h-[64px] overflow-hidden leading-[0] z-10 select-none pointer-events-none">
        <svg 
          className="relative block w-full h-full border-none outline-none" 
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

      {/* 4. Circle Category Row */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full text-center">
        <span className="font-mono text-xs font-bold text-ochre uppercase tracking-wider">Kategori Pilihan</span>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-ink mt-2 mb-10">Belanja Berdasarkan Kategori</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { name: "Madu Hutan", desc: "Suplemen Alami", img: "/images/madu_murni.jpg", link: "#best-sellers", val: "Madu" },
            { name: "Sarang Lebah", desc: "Madu Segar", img: "/images/sarang_madu.jpg", link: "#best-sellers", val: "Madu" },
            { name: "Lampu Bambu", desc: "Kriya Anyaman", img: "/images/lampu_bambu.jpg", link: "#best-sellers", val: "Kerajinan" },
            { name: "Rantang Piknik", desc: "Ramah Lingkungan", img: "/images/rantang_bambu.jpg", link: "#best-sellers", val: "Kerajinan" },
            { name: "Keripik Desa", desc: "Camilan Renyah", img: "/images/singkong_original.jpg", link: "#best-sellers", val: "Kuliner" },
          ].map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(cat.val);
                const el = document.getElementById("best-sellers");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center group cursor-pointer border-none bg-transparent outline-none"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-ink/10 group-hover:border-ochre shadow-md transition-all duration-300 relative">
                <div className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-300" style={{ backgroundImage: `url('${cat.img}')` }} />
              </div>
              <span className="font-display text-sm font-bold text-ink mt-3 group-hover:text-ochre transition-colors">{cat.name}</span>
              <span className="font-sans text-[10px] text-ink/60 mt-0.5">{cat.desc}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 5. Special Promo Grid Banners */}
      <section id="promo-banners" className="py-12 px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Banner */}
          <div className="bg-ochre/15 border border-ochre/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="text-left max-w-xs relative z-10">
              <Badge variant="primary" className="mb-2 bg-ochre text-ink">Diskon 10%</Badge>
              <h3 className="font-display text-2xl font-bold text-ink leading-tight">Madu Hutan Murni Sialang</h3>
              <p className="font-sans text-xs text-ink/75 mt-3 leading-relaxed">Nikmati manis murni berkhasiat hasil panen lestari Caringin langsung ke meja makan Anda.</p>
              <a href="#best-sellers" onClick={() => setActiveTab("Madu")} className="inline-block mt-6">
                <Button variant="primary" size="sm">Beli Madu</Button>
              </a>
            </div>
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-paper shadow-lg relative shrink-0">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/sarang_madu.jpg')" }} />
            </div>
          </div>

          {/* Right Banner */}
          <div className="bg-leaf/10 border border-leaf/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="text-left max-w-xs relative z-10">
              <Badge variant="primary" className="mb-2 bg-leaf text-paper-light">Diskon 15%</Badge>
              <h3 className="font-display text-2xl font-bold text-ink leading-tight">Kerajinan Anyaman Bambu</h3>
              <p className="font-sans text-xs text-ink/75 mt-3 leading-relaxed">Lengkapi dekorasi etnik ruangan Anda dengan kap lampu bambu karya pengrajin sepuh.</p>
              <a href="#best-sellers" onClick={() => setActiveTab("Kerajinan")} className="inline-block mt-6">
                <Button variant="action" size="sm">Beli Kerajinan</Button>
              </a>
            </div>
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-paper shadow-lg relative shrink-0">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/lampu_bambu.jpg')" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. About Us Section (Collage & Stats) */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Side: Images Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-ink/5 shadow-sm relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/foto_desa.jpg')" }} />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border border-ink/5 shadow-sm relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/singkong_original.jpg')" }} />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-xl overflow-hidden border border-ink/5 shadow-sm relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/madu_murni.jpg')" }} />
              </div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-ink/5 shadow-sm relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/lampu_bambu.jpg')" }} />
              </div>
            </div>
          </div>

          {/* Right Side: Text & Counter Block */}
          <div className="md:col-span-6 text-left">
            <span className="font-mono text-xs font-bold text-ochre uppercase tracking-wider">Kisah Pengrajin Desa</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-ink mt-2 leading-tight">Perjalanan Panjang Karya Tangan Penuh Keikhlasan</h2>
            <p className="font-sans text-sm text-ink/75 mt-4 leading-relaxed">
              Setiap produk dikerjakan secara manual di teras rumah warga. Mulai dari pemilahan ruas bambu pilihan, penyaringan tetes madu liar, hingga bumbu tumbuk keripik buatan ibu-ibu PKK Caringin. Anda tidak hanya membeli barang, melainkan mendukung kemandirian ekonomi desa.
            </p>

            {/* Stats Block */}
            <div className="grid grid-cols-3 gap-4 bg-ink text-paper-light p-5 rounded-xl mt-8 border border-white/5">
              <div className="text-center border-r border-paper-light/10">
                <div className="font-mono text-xl sm:text-2xl font-bold text-ochre-light">3+</div>
                <div className="font-sans text-[10px] text-paper-light/60 mt-1 uppercase">Kios Aktif</div>
              </div>
              <div className="text-center border-r border-paper-light/10">
                <div className="font-mono text-xl sm:text-2xl font-bold text-ochre-light">8+</div>
                <div className="font-sans text-[10px] text-paper-light/60 mt-1 uppercase">Produk Unggul</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-ochre-light">100%</div>
                <div className="font-sans text-[10px] text-paper-light/60 mt-1 uppercase">Asli Desa</div>
              </div>
            </div>
            <div className="font-display italic text-sm text-ink/80 mt-6 text-right">— Warga Kios Caringin</div>
          </div>
        </div>
      </section>

      {/* 7. Best Sellers Section */}
      <section id="best-sellers" className="py-16 px-4 max-w-6xl mx-auto w-full text-center scroll-mt-20">
        <span className="font-mono text-xs font-bold text-ochre uppercase tracking-wider">Terlaris Pekan Ini</span>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-ink mt-2 mb-6">Produk Terlaris Desa Caringin</h2>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {["Semua", "Madu", "Kerajinan", "Kuliner"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xs font-mono tracking-wider uppercase border rounded-full transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-ink text-paper-light border-ink"
                  : "bg-paper-light/60 text-ink/75 border-ink/10 hover:border-ink/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
          {filteredProducts.map((prod) => {
            const waUrl = generateWhatsAppUrl(prod.sellerName, prod.nama, prod.sellerWhatsApp);
            return (
              <Card key={prod.id} variant="default" className="flex flex-col h-full bg-paper-light/50 group hover:shadow-md transition-all duration-300 relative">
                {/* Image Wrap */}
                <div className="aspect-[4/3] rounded-t-lg overflow-hidden border-b border-ink/10 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.gambar}
                    alt={prod.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Sale Tag */}
                  <div className="absolute top-3 left-3 bg-clay text-paper-light px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase">
                    Terlaris
                  </div>
                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-paper/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-sans font-bold text-ink flex items-center gap-1 shadow-sm">
                    ⭐ {prod.rating}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="font-mono text-[9px] text-ochre font-bold uppercase tracking-wider">{prod.category}</span>
                  <h3 className="font-display text-lg font-bold text-ink mt-1 mb-2 leading-tight">{prod.nama}</h3>
                  <span className="font-sans text-[11px] text-ink/60 mb-2">Kios: {prod.sellerName}</span>
                  <p className="font-sans text-xs text-ink/75 leading-relaxed line-clamp-3 mb-4 flex-1">{prod.deskripsi}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-2 border-t border-ink/5 pt-3 mt-auto">
                    <span className="font-mono text-base font-bold text-clay">Rp {prod.harga.toLocaleString("id-ID")},-</span>
                    <span className="font-mono text-xs text-ink/40 line-through">Rp {prod.originalHarga.toLocaleString("id-ID")},-</span>
                  </div>
                </div>

                <CardFooter className="pt-0 p-5">
                  <a href={waUrl || undefined} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="action" size="sm" className="w-full py-2.5">
                      Pesan via WhatsApp
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 8. Special Savings Banner (Countdown Timer) */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full">
        <div className="bg-ink text-paper-light rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/5 text-center flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/foto_desa.jpg')" }} />
          
          <div className="relative z-10 max-w-xl flex flex-col items-center">
            <Badge variant="primary" className="mb-4 bg-ochre/25 text-ochre-light border border-ochre-light/20">Program Musiman</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight">Festival Panen Raya Caringin</h2>
            <p className="font-sans text-sm text-paper-light/75 mt-3 max-w-md">Dapatkan penawaran harga spesial bazaar untuk seluruh komoditas kerajinan dan produk tani desa sebelum program berakhir.</p>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 my-8 font-mono max-w-xs sm:max-w-md w-full">
              {[
                { label: "Hari", val: timeLeft.days },
                { label: "Jam", val: timeLeft.hours },
                { label: "Menit", val: timeLeft.minutes },
                { label: "Detik", val: timeLeft.seconds },
              ].map((time, idx) => (
                <div key={idx} className="bg-paper-light/10 border border-white/10 rounded-lg p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-ochre-light">{String(time.val).padStart(2, "0")}</div>
                  <div className="text-[9px] text-paper-light/50 mt-1 uppercase font-sans">{time.label}</div>
                </div>
              ))}
            </div>

            <a href="#best-sellers">
              <Button variant="primary" size="lg" className="shadow-lg shadow-ochre/25">Ambil Promo Panen Sekarang</Button>
            </a>
          </div>
        </div>
      </section>

      {/* 9. FAQ Accordion & Contact Box */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Accordion Column */}
          <div className="md:col-span-7 text-left">
            <span className="font-mono text-xs font-bold text-ochre uppercase tracking-wider">Ada Pertanyaan?</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-ink mt-2 mb-8">Informasi Umum Pemesanan</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-paper-light/50 border border-ink/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-5 flex items-center justify-between font-display text-sm sm:text-base font-bold text-ink cursor-pointer border-none bg-transparent outline-none focus:outline-none"
                  >
                    <span>{item.q}</span>
                    <span className="text-ochre text-lg font-mono ml-4">{openFaqIndex === i ? "−" : "+"}</span>
                  </button>
                  {openFaqIndex === i && (
                    <div className="px-5 pb-5 font-sans text-xs sm:text-sm text-ink/75 leading-relaxed border-t border-ink/5 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Solid Box Column */}
          <div className="md:col-span-5 w-full">
            <div className="bg-leaf text-paper-light p-8 sm:p-10 rounded-2xl border border-white/5 text-left relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
              <div className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none" style={{ backgroundImage: "url('/images/foto_desa.jpg')" }} />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-white leading-tight">Punya Pertanyaan Khusus?</h3>
                <p className="font-sans text-xs text-paper-light/80 mt-4 leading-relaxed">
                  Kami siap membantu jika Anda memerlukan pesanan dalam jumlah besar (grosir), suvenir pernikahan dari kerajinan bambu, atau kustomisasi lainnya. Hubungi langsung perwakilan pengurus desa kami.
                </p>
              </div>
              <a href="https://wa.me/6281234567891?text=Halo%20Pengurus%20Desa%20Caringin%2C%20saya%20ingin%20tanya%20mengenai%20pesanan%20UMKM..." target="_blank" rel="noopener noreferrer" className="mt-8 relative z-10">
                <Button variant="ghost" size="md" className="w-full !text-white border border-white/30 hover:bg-white/10 font-bold">
                  Hubungi Pengurus Desa
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Newsletter & Footer */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full text-center border-t border-ink/10 mt-12">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <span className="font-mono text-xs font-bold text-ochre uppercase tracking-wider">Kabar Bazaar Desa</span>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-ink mt-2 leading-tight">Langganan Kabar Desa Caringin</h3>
          <p className="font-sans text-xs sm:text-sm text-ink/70 mt-3">Dapatkan info terupdate mengenai bazaar musiman, diskon hasil tani, dan peluncuran produk kerajinan anyaman baru.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Terima kasih telah berlangganan!"); }} className="flex flex-col sm:flex-row gap-2 mt-6 w-full max-w-md">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              required
              className="px-4 py-2.5 rounded-lg border border-ink/10 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-ochre flex-1 bg-paper-light/60 text-ink placeholder:text-ink/35"
            />
            <Button variant="primary" size="md" type="submit" className="px-6">Berlangganan</Button>
          </form>
        </div>
      </section>

      <footer className="bg-ink text-paper-light py-12 px-4 sm:px-8 md:px-16 border-t border-ink/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div className="space-y-4">
            <h4 className="font-display text-lg font-black text-white">Pasar UMKM Desa</h4>
            <p className="font-sans text-xs text-paper-light/60 leading-relaxed">Platform pemasaran digital resmi milik Desa Caringin untuk memperkenalkan karya pengrajin sepuh dan komoditas tani terbaik warga desa.</p>
          </div>
          <div>
            <h5 className="font-sans text-xs font-bold uppercase text-ochre-light mb-4 tracking-wider">Kategori</h5>
            <ul className="space-y-2 text-xs font-sans text-paper-light/60">
              <li><a href="#best-sellers" onClick={() => setActiveTab("Madu")} className="hover:text-white">Madu Hutan</a></li>
              <li><a href="#best-sellers" onClick={() => setActiveTab("Kerajinan")} className="hover:text-white">Anyaman Bambu</a></li>
              <li><a href="#best-sellers" onClick={() => setActiveTab("Kuliner")} className="hover:text-white">Kuliner Tradisional</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans text-xs font-bold uppercase text-ochre-light mb-4 tracking-wider">Halaman</h5>
            <ul className="space-y-2 text-xs font-sans text-paper-light/60">
              <li><a href="/" className="hover:text-white">Beranda Utama</a></li>
              <li><a href="/#peta-rute" className="hover:text-white">Rute Kios Peta</a></li>
              <li><a href="/contoh" className="hover:text-white">Contoh Layout</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans text-xs font-bold uppercase text-ochre-light mb-4 tracking-wider">Kontak Desa</h5>
            <ul className="space-y-2 text-xs font-sans text-paper-light/60">
              <li>📍 Kantor Kepala Desa Caringin</li>
              <li>📞 +62 812-3456-7891</li>
              <li>✉️ info@desacaringin.id</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-paper-light/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-paper-light/40 gap-4 text-left">
          <span>&copy; {new Date().getFullYear()} Pasar UMKM Desa Caringin. All Rights Reserved.</span>
          <span>Desain Premium Terinspirasi Keindahan Kosmetik & Tradisi Budaya.</span>
        </div>
      </footer>
    </div>
  );
}
