import assert from "node:assert";
import { normalizeWhatsAppNumber, generateWhatsAppUrl } from "./whatsapp";

console.log("=== Menjalankan Unit Test untuk lib/whatsapp.ts ===");

try {
  // Test 1: Normalisasi nomor lokal diawali dengan '0'
  console.log("Test 1: Menormalisasi nomor diawali 08...");
  const num1 = normalizeWhatsAppNumber("08123456789");
  assert.strictEqual(num1, "628123456789");
  console.log("✅ Berhasil: '08123456789' -> '628123456789'");

  // Test 2: Normalisasi nomor dengan spasi dan tanda hubung
  console.log("Test 2: Menormalisasi nomor dengan spasi dan tanda hubung...");
  const num2 = normalizeWhatsAppNumber("+62 812-3456-7890");
  assert.strictEqual(num2, "6281234567890");
  console.log("✅ Berhasil: '+62 812-3456-7890' -> '6281234567890'");

  // Test 3: Normalisasi nomor yang sudah dalam format internasional
  console.log("Test 3: Menormalisasi nomor yang sudah format internasional...");
  const num3 = normalizeWhatsAppNumber("6285551234567");
  assert.strictEqual(num3, "6285551234567");
  console.log("✅ Berhasil: '6285551234567' -> '6285551234567'");

  // Test 4: Nomor telepon terlalu pendek (tidak valid)
  console.log("Test 4: Menangani nomor telepon terlalu pendek...");
  const num4 = normalizeWhatsAppNumber("0812");
  assert.strictEqual(num4, null);
  console.log("✅ Berhasil: '0812' -> null");

  // Test 5: Nomor telepon kosong
  console.log("Test 5: Menangani nomor telepon kosong...");
  const num5 = normalizeWhatsAppNumber("");
  assert.strictEqual(num5, null);
  console.log("✅ Berhasil: '' -> null");

  // Test 6: Pembuatan URL WhatsApp dengan encoding karakter yang benar
  console.log("Test 6: Membuat URL WhatsApp valid dengan encoding...");
  const url = generateWhatsAppUrl("Kios Madu Hutan Lestari", "Madu Murni 500ml", "08123456789");
  assert.ok(url);
  assert.ok(url.startsWith("https://wa.me/628123456789?text="));

  const expectedMessage =
    "Halo *Kios Madu Hutan Lestari*, saya tertarik dengan produk *Madu Murni 500ml*. Apakah produk tersebut masih tersedia?";
  const expectedUrl = `https://wa.me/628123456789?text=${encodeURIComponent(expectedMessage)}`;
  assert.strictEqual(url, expectedUrl);
  console.log("✅ Berhasil: URL dan pesan ter-encode dengan tepat!");

  // Test 7: Pembuatan URL WhatsApp dengan nomor tidak valid
  console.log("Test 7: Membuat URL WhatsApp dengan nomor tidak valid...");
  const urlInvalid = generateWhatsAppUrl("Kios Madu", "Madu", "123");
  assert.strictEqual(urlInvalid, null);
  console.log("✅ Berhasil: URL bernilai null jika nomor tidak valid");

  console.log("\n🎉 SEMUA UNIT TEST LULUS DENGAN SUKSES! 🎉\n");
} catch (error) {
  console.error("❌ UNIT TEST GAGAL:", error);
  process.exit(1);
}
