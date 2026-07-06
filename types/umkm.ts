export interface Produk {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  gambar?: string;
}

export interface UMKM {
  id: string;
  nama: string;
  tagline: string;
  lokasi: string;
  nomorWhatsApp: string;
  produk: Produk[];
}
