import { CONTACT, FLYER, REGISTRATION_URL } from './config'

/** Semua tombol "Daftar" memakai helper ini. */
export const daftarLink = REGISTRATION_URL || '/daftar'

/** Tautan flyer (acuan utama) untuk tombol unduh. */
export const FLYER_LINKS = { flyer: FLYER.url }

export const NAV = [
  { label: 'Beranda', to: '/' },
  { label: 'Program Studi', to: '/program-studi' },
  { label: 'Biaya', to: '/biaya' },
  { label: 'Cara Daftar', to: '/cara-daftar' },
  { label: 'Dosen', to: '/dosen' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Kontak', to: '/kontak' },
  { label: 'Portal Kampus Kita', to: 'https://apps.kampuskita.id', external: true },
]

export const HERO = {
  eyebrow: 'Pendaftaran Mahasiswa Baru · Semester Genap 2026/2027',
  title: 'Kuliah Islam Terbuka untuk Semua Kalangan.',
  subtitle:
    'Lulusan SMA, guru, karyawan, ibu rumah tangga, hingga pensiunan: raih gelar S.Pd. sambil tetap beraktivitas.',
  image: '/images/hero-person-900.webp',
  imageSrcSet: '/images/hero-person-480.webp 480w, /images/hero-person-900.webp 800w',
  imageAlt:
    'Ilustrasi mahasiswa berpakaian putih memegang tumpukan buku — Kuliah Islam Abu Dzar',
}

export const SISTEM_LEGALITAS = [
  { title: 'Online via Google Meet & Classroom', desc: 'Kuliah dari mana saja.' },
  { title: 'Kuliah akhir pekan', desc: 'Sabtu–Ahad, dari mana saja.' },
  {
    title: 'Terdaftar di PDDIKTI',
    desc: 'Kurikulum OBE. Bernaung di bawah kampus induk (nama menyusul).',
  },
]

export const PROGRAM_STUDI = [
  {
    slug: 'pai',
    code: 'PAI',
    name: 'S1 Pendidikan Agama Islam',
    degree: 'S.Pd.',
    badge: null,
    desc: 'Membekali Anda dengan penguasaan khazanah keilmuan Islam dan keterampilan pedagogi modern, sehingga lulusan siap mengajar dan mengembangkan pendidikan Islam di berbagai lingkungan.',
    points: ['Fokus keilmuan Islam & pedagogi', 'Praktik mengajar terstruktur', 'Lulusan memperoleh gelar S.Pd.'],
  },
  {
    slug: 'pgmi',
    code: 'PGMI',
    name: 'S1 Pendidikan Guru Madrasah Ibtidaiyah',
    degree: 'S.Pd.',
    badge: 'Prodi Baru',
    desc: 'Program studi baru yang menyiapkan calon guru kelas di madrasah ibtidaiyah dengan bekal keislaman, pengelolaan kelas, serta penyusunan materi ajar yang menarik dan aplikatif.',
    points: ['Khusus pendidikan guru di MI', 'Praktik kelas & media pembelajaran', 'Lulusan memperoleh gelar S.Pd.'],
  },
]

export const BIAYA = {
  note: 'Biaya PAI dan PGMI sama. Sudah termasuk ujian semester.',
  rows: [
    { item: 'Pendaftaran', value: 'Rp550.000', detail: 'Dibayarkan saat mengirim formulir pendaftaran.', highlight: true },
    { item: 'Uang Masuk', value: 'GRATIS', detail: 'Tidak ada biaya uang masuk / SPP masuk.', free: true },
    { item: 'UKT per Semester', value: 'Rp1.950.000', detail: 'Sudah termasuk biaya ujian semester.', highlight: true },
  ],
  faqNote: 'Rincian biaya lainnya mengikuti flyer pendaftaran.',
}

export const KEUNGGULAN = {
  title: 'Keunggulan Kuliah di Kuliah Islam Abu Dzar',
  items: [
    { title: 'Biaya terjangkau', desc: 'Biaya yang sangat terjangkau: sekitar Rp15 juta hingga selesai.' },
    { title: 'Dosen berkualitas', desc: 'Belajar dari dosen lulusan universitas dalam dan luar negeri ternama.' },
    { title: 'Terbuka untuk semua', desc: 'Cocok untuk lulusan SMA, guru, karyawan, ibu rumah tangga, hingga pensiunan.' },
    { title: 'Kuliah fleksibel', desc: 'Sistem online melalui Google Meet dan Google Classroom.' },
    { title: 'Legal & terukur', desc: 'Terdaftar di PDDIKTI dengan kurikulum berbasis OBE.' },
    { title: 'Jadwal ramah pekerja', desc: 'Slot kuliah disusun agar tetap selaras dengan aktivitas harian.' },
  ],
}

export const KOMPETENSI = {
  title: 'Kompetensi Lulusan',
  items: [
    'Cakap berbahasa Arab lisan dan tulisan',
    "Mahir membaca Al-Qur'an dan memiliki hafalan Al-Qur'an",
    'Menguasai pedagogi, pedagogik, dan pedagogis',
    'Siap menjadi guru yang progresif dan modern dengan wawasan Islami',
    'Kompeten menyusun silabus, RPP/modul ajar, dan media pembelajaran',
  ],
}

export const ALUR_DAFTAR = {
  title: 'Alur Pendaftaran',
  steps: [
    { no: 1, title: 'Isi formulir pendaftaran', desc: 'Lengkapi formulir pendaftaran online dan pilih prodi (PAI atau PGMI).' },
    { no: 2, title: 'Transfer biaya pendaftaran', desc: 'Transfer Rp550.000 ke rekening resmi yang tertera pada flyer.' },
    { no: 3, title: 'Verifikasi berkas', desc: 'Kirim bukti transfer, tim kami memverifikasi data dan pembayaran Anda.' },
    { no: 4, title: 'Mulai kuliah', desc: 'Dapatkan akses Google Meet & Google Classroom, kuliah pun dimulai.' },
  ],
}

/** Rekening & QR — disamakan dengan flyer pendaftaran (acuan utama). */
export const REKENING = {
  bank: 'BSI',
  number: '701 499 1788',
  holder: 'Yayasan Abu Dzar',
  qrImage: '/images/qr-pendaftaran.webp',
  qrCaption: 'QR Pendaftaran — pindai untuk membuka formulir (sesuai flyer).',
}

export const DOSEN = [
  { name: 'Ust. Dr. Makmur Dongoran, Lc.', field: 'Filsafat', alma: 'Menyusul', photo: '/images/dosen-1.svg' },
  { name: 'Ust. Risanugroho Putra Sahidin, S.Pd., M.Pd.', field: 'Bahasa Arab & Bahasa Indonesia', alma: 'Menyusul', photo: '/images/dosen-2.svg' },
  { name: 'Ust. Andriansyah Putra, Lc., M.H.', field: 'Sirah Nabawiyah & Studi Islam', alma: 'Menyusul', photo: '/images/dosen-3.svg' },
  { name: 'Ust. Yahya, B.A., M.Pd., Gr.', field: 'Ilmu Quran', alma: 'Menyusul', photo: '/images/dosen-4.svg' },
  { name: 'Ust. Mohamad Farid, S.S.', field: 'Bahasa Inggris', alma: 'Menyusul', photo: '/images/dosen-5.svg' },
  { name: 'Ust. Ahmad Rifai Zebua, S.Sos., M.Pd., Gr.', field: 'Perencanaan Konselor', alma: 'Menyusul', photo: '/images/dosen-6.svg' },
]

export const KALENDER = {
  note: 'Jadwal resmi semester genap 2026/2027 menyusul dari pengelola — salin dari kalender resmi.',
  rows: [
    { item: 'Pendaftaran mahasiswa baru', value: 'Tidak dibatasi', free: true },
    { item: 'Pengenalan Budaya Akademik (PBAK)', value: 'Menyusul' },
    { item: 'Awal perkuliahan', value: 'Menyusul' },
    { item: 'Ujian Tengah Semester (UTS)', value: 'Menyusul' },
    { item: 'Ujian Akhir Semester (UAS)', value: 'Menyusul' },
    { item: 'Libur akhir semester', value: 'Menyusul' },
  ],
}

export const KURIKULUM = {
  note: 'Struktur kurikulum rinci per prodi menyusul (naskah dari pengelola). Kerangka berikut adalah ilustrasi awal.',
  programs: [
    {
      prodi: 'S1 PAI (S.Pd.)',
      semesters: [
        { sem: 'Semester 1–2', courses: "Al-Qur'an & Tafsir, Bahasa Arab Dasar, Pendidikan Agama Islam, Filsafat Pendidikan, Pengantar Ilmu Islam" },
        { sem: 'Semester 3–4', courses: "Hadits & Ulumul Hadits, Akidah Akhlak, Fikih & Ushul Fikih, Metodologi Pengajaran, Psikologi Pendidikan" },
        { sem: 'Semester 5–6', courses: 'Sejarah Kebudayaan Islam, Manajemen Pendidikan, Statistika Pendidikan, Praktik Pengalaman Lapangan' },
        { sem: 'Semester 7–8', courses: 'Pendidikan Inklusif, Etika Profesi, Proyek Kreatif, Skripsi' },
      ],
    },
    {
      prodi: 'S1 PGMI (S.Pd.)',
      semesters: [
        { sem: 'Semester 1–2', courses: "Al-Qur'an & Tilawah, Bahasa Arab Dasar, Pengantar Pendidikan Islam, Dasar-Dasar PGMI" },
        { sem: 'Semester 3–4', courses: 'Literasi & Numerasi MI, Akidah Akhlak, Fikih Anak, Metode Pengajaran MI' },
        { sem: 'Semester 5–6', courses: 'Media Pembelajaran, Manajemen Kelas, Bimbingan Konseling, Praktik Pengalaman Lapangan' },
        { sem: 'Semester 7–8', courses: 'Pembelajaran Terpadu, Evaluasi Pembelajaran, Proyek Kreatif, Skripsi' },
      ],
    },
  ],
}

export const FAQ = {
  note: 'Jawaban dapat berubah sewaktu-waktu — informasi resmi mengikuti flyer pendaftaran.',
  items: [
    {
      q: 'Apakah bisa kuliah sambil bekerja?',
      a: 'Bisa. Kuliah dilakukan secara online melalui Google Meet dan Google Classroom, dengan slot jadwal yang disesuaikan agar selaras dengan aktivitas kerja Anda — termasuk kelas akhir pekan (Sabtu–Ahad).',
    },
    {
      q: 'Apakah ada batas usia pendaftaran?',
      a: 'Tidak ada batasan usia. Program ini terbuka untuk lulusan SMA/SMK, guru, karyawan, ibu rumah tangga, hingga pensiunan.',
    },
    {
      q: 'Apakah ijazahnya setara dengan kampus lain?',
      a: 'Program studi terdaftar resmi di PDDIKTI dan menerapkan kurikulum OBE. Lulusan memperoleh gelar S.Pd. yang sah, setara dengan program studi serupa di perguruan tinggi lain.',
    },
    {
      q: 'Perangkat apa yang dibutuhkan untuk kuliah online?',
      a: 'Cukup HP atau laptop dengan koneksi internet, serta akun Google untuk mengakses Google Meet dan Google Classroom. Tidak memerlukan perangkat khusus.',
    },
    {
      q: "Bagaimana jika belum bisa membaca Al-Qur'an dengan baik?",
      a: 'Tetap bisa mendaftar. Terdapat matakuliah Al-Qur\'an sejak semester awal untuk mengasah kemampuan membaca hingga tahsin, dibimbing oleh dosen berpengalaman.',
    },
  ],
}

export const TESTIMONI = {
  note: 'Testimoni mahasiswa/alumni menyusul dari pengelola.',
  items: [
    { name: 'Nama Mahasiswa', role: 'Alumni / Mahasiswa', text: 'Testimoni akan ditampilkan di sini setelah dikirim oleh pengelola.' },
    { name: 'Nama Mahasiswa', role: 'Alumni / Mahasiswa', text: 'Testimoni akan ditampilkan di sini setelah dikirim oleh pengelola.' },
    { name: 'Nama Mahasiswa', role: 'Alumni / Mahasiswa', text: 'Testimoni akan ditampilkan di sini setelah dikirim oleh pengelola.' },
  ],
}

export const CTA = {
  title: 'Daftar Sekarang, Tanpa Batasan Kuota',
  flyer: FLYER,
}

export const WA_LINK = `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(
  'Assalamualaikum, saya ingin bertanya tentang pendaftaran Kuliah Islam Abu Dzar.',
)}`
