/**
 * ============================================================================
 * PUSAT KONFIGURASI SITUS — semua perubahan cepat ada di sini.
 * ============================================================================
 */

// Nama kampus (identitas). Kata "Takhassus" sudah dihapus.
export const CAMPUS_NAME = 'Kuliah Islam Abu Dzar'
export const CAMPUS_NAME_UPPER = 'KULIAH ISLAM ABU DZAR'
export const CAMPUS_SHORT = 'KIA'

// Hak cipta footer
export const COPYRIGHT = {
  year: 2026,
  owner: 'Pengelola Kuliah Islam Abu Dzar',
  credit: 'TheRajulain',
}

/**
 * FORMULIR PENDAFTARAN
 * ----------------------------------------------------------------------------
 * Opsi (didiskusikan):
 *  A. Isi URL formulir baru (Google Form / Formfacade / dll) di bawah.
 *     Semua tombol "Daftar" otomatis mengarah ke sana, dan pilihan prodi
 *     (PAI / PGMI) tetap tersedia di halaman /daftar sebagai pelengkap.
 *  B. Biarkan "" (kosong) → tombol "Daftar" mengarah ke halaman daftar bawaan
 *     situs ini (/daftar) yang punya kolom pilihan prodi dan mengirim data
 *     calon mahasiswa lewat WhatsApp (tanpa server, langsung jalan).
 *
 * REKOMENDASI: isi URL formulir resmi (Google Form dengan dropdown prodi)
 * agar data terstruktur; halaman /daftar tetap berfungsi sebagai ringkasan
 * langkah + QR + rekening.
 */
export const REGISTRATION_URL = ''

// Kontak
export const CONTACT = {
  phoneDisplay: '0822 1706 6090',
  phoneIntl: '6282217066090', // untuk wa.me
  email: 'kita@abudzar.or.id', // tautan memakai mailto: biasa (konsisten)
  instagram: 'https://www.instagram.com/kuliahabudzar',
  youtube: 'https://www.youtube.com/@mediaabudzar',
  address: {
    street: 'Jl. Sumatera Gg. H. Bakrie 003/007',
    village: 'Kampung Rawa Lele, Jombang',
    city: 'Ciputat, Tangerang Selatan 15414',
    province: 'Banten',
    full: 'Jl. Sumatera Gg. H. Bakrie 003/007, Kampung Rawa Lele, Jombang, Ciputat, Tangerang Selatan 15414, Banten',
  },
}

// Peta Google Maps — pencarian langsung ke alamat, bukan "SD islam abu dzar"
export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(CONTACT.address.full) +
  '&output=embed'
export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(CONTACT.address.full)

// Berkas flyer (acuan utama). Ganti berkas di /public saat PDF final datang,
// nama berkas memakai "Kuliah Islam Abu Dzar" (tanpa Takhassus).
export const FLYER = {
  url: 'Flyer-Pendaftaran-Kuliah-Islam-Abu-Dzar-Semester-Genap-2026-2027.pdf',
  label: 'Flyer Pendaftaran Semester Genap 2026/2027',
  note: 'Informasi pendaftaran, biaya, rekening, dan QR pendaftaran.',
}
