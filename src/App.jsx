import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FlyerStrip from './components/FlyerStrip'
import WhatsAppFloat from './components/WhatsAppFloat'
import Beranda from './pages/Beranda'
import ProgramStudi from './pages/ProgramStudi'
import Biaya from './pages/Biaya'
import CaraDaftar from './pages/CaraDaftar'
import Daftar from './pages/Daftar'
import Dosen from './pages/Dosen'
import Faq from './pages/Faq'
import Kontak from './pages/Kontak'
import { NAV } from './data/content'
import { CAMPUS_NAME } from './data/config'

const BASE_TITLE = CAMPUS_NAME

/** Deskripsi meta per halaman (SEO & preview tautan). */
const META_DESCRIPTIONS = {
  '/': 'Kuliah Islam Abu Dzar — S1 Pendidikan Agama Islam (PAI) & S1 Pendidikan Guru Madrasah Ibtidaiyah (PGMI). Kuliah Islam terbuka untuk semua kalangan, online via Google Meet & Google Classroom.',
  '/program-studi': 'Dua program studi S1 di Kuliah Islam Abu Dzar: S1 PAI dan S1 PGMI (Prodi Baru), keduanya memberikan gelar S.Pd.',
  '/biaya': 'Biaya kuliah Kuliah Islam Abu Dzar: pendaftaran Rp550.000, uang masuk GRATIS, UKT Rp1.950.000 per semester (sudah termasuk ujian). PAI & PGMI sama.',
  '/cara-daftar': 'Cara daftar Kuliah Islam Abu Dzar: isi formulir, transfer biaya pendaftaran, verifikasi, lalu mulai kuliah. QR & rekening mengikuti flyer.',
  '/daftar': 'Formulir pendaftaran Kuliah Islam Abu Dzar — pilih prodi S1 PAI atau S1 PGMI, semester genap 2026/2027.',
  '/dosen': 'Profil dosen Kuliah Islam Abu Dzar — lulusan universitas dalam dan luar negeri ternama.',
  '/faq': 'Pertanyaan yang sering diajukan seputar pendaftaran, biaya, sistem kuliah, dan legalitas program studi Kuliah Islam Abu Dzar.',
  '/kontak': 'Kontak & lokasi Kuliah Islam Abu Dzar — Jl. Sumatera Gg. H. Bakrie 003/007, Jombang, Ciputat, Tangerang Selatan, Banten.',
}
const FALLBACK_DESCRIPTION = META_DESCRIPTIONS['/']

function useDocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const match = NAV.find((item) => item.to === pathname)
    document.title = match
      ? `${match.label} — ${BASE_TITLE}`
      : pathname === '/daftar'
        ? `Formulir Pendaftaran — ${BASE_TITLE}`
        : `${BASE_TITLE} — Kuliah Islam Terbuka untuk Semua Kalangan`

    const desc = META_DESCRIPTIONS[pathname] || FALLBACK_DESCRIPTION
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', desc)

    window.scrollTo({ top: 0, behavior: 'instant' })

    // page_view tambahan saat gtag aktif (isi ID GA4 di index.html)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
      })
    }
  }, [pathname])
}

function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="section-title">Halaman tidak ditemukan</h1>
        <p className="section-desc">Kembali ke beranda untuk melihat informasi pendaftaran.</p>
        <a href="#/" className="btn btn-primary" style={{ marginTop: 16 }}>
          Ke Beranda
        </a>
      </div>
    </section>
  )
}

export default function App() {
  useDocumentTitle()

  return (
    <>
      <Navbar />
      <FlyerStrip />
      <main>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/program-studi" element={<ProgramStudi />} />
          <Route path="/biaya" element={<Biaya />} />
          <Route path="/cara-daftar" element={<CaraDaftar />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
