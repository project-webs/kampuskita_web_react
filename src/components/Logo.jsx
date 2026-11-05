import { CAMPUS_NAME_UPPER } from '../data/config'

/**
 * Logo KITA (mark dari kampuskita.id) + nama kampus.
 * Tagline pada berkas asli memuat kata "Takhassus", sehingga dipotong —
 * nama resmi ditampilkan sebagai teks di samping mark.
 * Ganti /public/images/logo-kita.webp saat logo final dikirim.
 */
export default function Logo() {
  return (
    <>
      <img
        src="/images/logo-kita.webp"
        alt={`Logo ${CAMPUS_NAME_UPPER}`}
        className="logo-mark"
        width={64}
        height={28}
      />
      <span className="logo-text" aria-hidden="true">
        <strong>KULIAH ISLAM</strong>
        <em>ABU DZAR</em>
      </span>
    </>
  )
}
