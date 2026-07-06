/**
 * Menormalisasi nomor telepon ke format WhatsApp internasional (tanpa karakter non-digit, awalan 62).
 * Contoh: "0812-3456-7890" -> "6281234567890"
 * Contoh: "+62 898-7654-3210" -> "6289876543210"
 */
export function normalizeWhatsAppNumber(phone: string): string | null {
  if (!phone) return null;

  // Hapus semua karakter non-digit
  let cleaned = phone.replace(/\D/g, "");

  // Jika diawali dengan "0", ubah menjadi "62"
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.slice(1);
  }

  // Validasi panjang nomor WhatsApp standar internasional (biasanya 9-15 digit)
  if (cleaned.length >= 9 && cleaned.length <= 15) {
    return cleaned;
  }

  return null;
}

/**
 * Membuat tautan wa.me dengan pesan pesanan ter-encode secara otomatis.
 */
export function generateWhatsAppUrl(
  namaUMKM: string,
  namaProduk: string,
  nomorWhatsApp: string
): string | null {
  const normalizedNumber = normalizeWhatsAppNumber(nomorWhatsApp);
  if (!normalizedNumber) return null;

  // Format pesan: sapaan singkat + nama produk (tebal) + nama UMKM (tebal) + ketersediaan
  const message = `Halo *${namaUMKM}*, saya tertarik dengan produk *${namaProduk}*. Apakah produk tersebut masih tersedia?`;

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}
