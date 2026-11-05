import { Link } from 'react-router-dom'
import { REGISTRATION_URL } from '../data/config'

const isExternal = (to) => /^https?:\/\//.test(to)

/**
 * Tombol/tautan "Daftar" tunggal di seluruh situs.
 * - REGISTRATION_URL terisi  → membuka formulir resmi (opsi yang direkomendasikan).
 * - REGISTRATION_URL kosong  → halaman daftar bawaan situs, dengan pilihan prodi.
 */
export default function DaftarLink({ prodi, className = 'btn btn-lime', children, ...rest }) {
  const base = REGISTRATION_URL || '/daftar'
  const sep = base.includes('?') ? '&' : '?'
  const to = prodi && !REGISTRATION_URL ? `${base}${sep}prodi=${prodi}` : base

  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className} {...rest}>
        {children ?? 'Daftar'}
      </a>
    )
  }

  return (
    <Link to={to} className={className} {...rest}>
      {children ?? 'Daftar'}
    </Link>
  )
}
