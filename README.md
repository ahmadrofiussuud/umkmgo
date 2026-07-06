# Pasar UMKM Desa

Pasar UMKM Desa adalah platform pemasaran digital terintegrasi untuk usaha mikro, kecil, dan menengah (UMKM) tingkat pedesaan. Di platform ini, pengunjung dapat menjelajahi berbagai kios UMKM, melihat detail produk, serta melakukan pemesanan langsung melalui WhatsApp secara otomatis (pre-filled message).

Proyek ini dibangun menggunakan **Next.js 14+ (App Router)** dengan **TypeScript** dan **Tailwind CSS**.

---

## Fitur & Fondasi
- **Next.js App Router**: Menggunakan sistem routing berbasis `/app` Next.js terbaru.
- **Type Safety**: Kontrak data UMKM dan Produk didefinisikan dengan jelas menggunakan TypeScript di `/types/umkm.ts`.
- **Decoupled Data**: Data UMKM & Produk tidak ditulis keras (hardcoded) di komponen, melainkan dipisah di `/data/umkm.ts` guna memudahkan integrasi CMS / Database di masa mendatang.
- **Code Consistency**: Terintegrasi dengan **ESLint** dan **Prettier** untuk penulisan kode yang rapi dan seragam.

---

## Struktur Folder
```text
umkmgo/
├── app/                  # Routing Next.js, layout, halaman utama, dan routing global
├── components/           # Komponen UI modular dan reusable (button, card, dll.)
├── data/                 # Penyimpanan data dummy (umkm.ts)
├── lib/                  # Fungsi pembantu / helper (seperti formatter, helper WA)
├── public/               # File aset statis (gambar, logo, dll.)
├── types/                # Definisi tipe data TypeScript (umkm.ts)
├── .prettierrc           # Konfigurasi Prettier
├── eslint.config.mjs     # Konfigurasi ESLint 9+
├── next.config.ts        # Konfigurasi Next.js
└── tsconfig.json         # Konfigurasi compiler TypeScript
```

---

## Cara Menjalankan Proyek Secara Lokal

### Prasyarat
- Node.js versi 18.17.0 ke atas.
- npm (bawaan dari Node.js).

### Langkah-langkah
1. **Clone repositori dan masuk ke direktori proyek**:
   ```bash
   cd umkmgo
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (development server)**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya.

4. **Jalankan pengecekan TypeScript & Linting**:
   - Pengecekan tipe TypeScript:
     ```bash
     npx tsc --noEmit
     ```
   - Pemeriksaan standardisasi kode (ESLint):
     ```bash
     npm run lint
     ```

5. **Build proyek untuk produksi**:
   ```bash
   npm run build
   ```
