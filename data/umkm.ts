import { UMKM } from "@/types/umkm";

export const umkmList: UMKM[] = [
  {
    id: "umkm-1",
    nama: "Kios Madu Hutan Lestari",
    tagline: "Madu murni langsung dari sarang lebah liar hutan tropis desa",
    lokasi: "Desa Sukamaju, RT 02/RW 01, Kecamatan Caringin",
    nomorWhatsApp: "6281234567891",
    produk: [
      {
        id: "prod-1-1",
        nama: "Madu Hutan Murni 500ml",
        deskripsi: "Madu mentah alami tanpa bahan pengawet atau pemanis buatan, dipanen langsung dari hutan liar.",
        harga: 85000,
        gambar: "/images/madu_murni.jpg",
      },
      {
        id: "prod-1-2",
        nama: "Sarang Madu Melifera 250g",
        deskripsi: "Sarang lebah madu asli yang masih utuh dan penuh dengan madu segar, dapat langsung dikonsumsi.",
        harga: 65000,
        gambar: "/images/sarang_madu.jpg",
      },
      {
        id: "prod-1-3",
        nama: "Propolis Liquid Premium 10ml",
        deskripsi: "Ekstrak propolis alami berkhasiat tinggi untuk menjaga imunitas dan daya tahan tubuh keluarga.",
        harga: 95000,
        gambar: "/images/propolis.jpg",
      },
    ],
  },
  {
    id: "umkm-2",
    nama: "Pengrajin Bambu Sukamaju",
    tagline: "Kerajinan anyaman bambu tradisional bernilai seni tinggi",
    lokasi: "Desa Sukamaju, RT 05/RW 02, Kecamatan Caringin",
    nomorWhatsApp: "6289876543210",
    produk: [
      {
        id: "prod-2-1",
        nama: "Lampu Hias Bambu Minimalis",
        deskripsi: "Kap lampu dari anyaman bambu halus, sangat cocok untuk dekorasi kamar tidur atau ruang tamu bernuansa etnik.",
        harga: 120000,
        gambar: "/images/lampu_bambu.jpg",
      },
      {
        id: "prod-2-2",
        nama: "Rantang Anyaman Bambu 2 Susun",
        deskripsi: "Rantang makan ramah lingkungan berbahan bambu awet, ideal untuk wadah hantaran atau piknik.",
        harga: 45000,
        gambar: "/images/rantang_bambu.jpg",
      },
      {
        id: "prod-2-3",
        nama: "Nampan Anyaman Bambu Oval",
        deskripsi: "Nampan saji estetik untuk menyuguhkan camilan dan minuman, tahan lama dan anti jamur.",
        harga: 25000,
        gambar: "/images/nampan_bambu.jpg",
      },
    ],
  },
  {
    id: "umkm-3",
    nama: "Keripik Singkong Renyah Mpok Siti",
    tagline: "Camilan desa legendaris yang renyah, gurih, dan bikin nagih",
    lokasi: "Desa Sukamaju, RT 01/RW 03, Kecamatan Caringin",
    nomorWhatsApp: "6285551234567",
    produk: [
      {
        id: "prod-3-1",
        nama: "Keripik Singkong Original Gurih 200g",
        deskripsi: "Keripik singkong tipis dengan taburan garam dan bumbu bawang putih khas pedesaan.",
        harga: 15000,
        gambar: "/images/singkong_original.jpg",
      },
      {
        id: "prod-3-2",
        nama: "Keripik Singkong Balado Pedas Manis 200g",
        deskripsi: "Keripik singkong renyah dibalut bumbu balado basah racikan resep rahasia Mpok Siti.",
        harga: 18000,
        gambar: "/images/singkong_balado.jpg",
      },
    ],
  },
];
