import { FLYER } from '../data/config'
import DaftarLink from './DaftarLink'

/**
 * Strip flyer pendaftaran semester genap 2026/2027 — ACUAN UTAMA.
 * Tampil di bagian atas setiap halaman.
 */
export default function FlyerStrip() {
  return (
    <div className="flyer-strip">
      <div className="container">
        <div>
          <strong>{FLYER.label}</strong>
          <div className="note">{FLYER.note}</div>
        </div>
        <div className="actions">
          <a href={FLYER.url} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            Lihat Flyer
          </a>
          <a href={FLYER.url} download className="btn btn-lime btn-sm">
            Unduh PDF
          </a>
          <DaftarLink className="btn btn-sm" style={{ background: '#fff', color: '#0b2b89' }}>
            Daftar
          </DaftarLink>
        </div>
      </div>
    </div>
  )
}
