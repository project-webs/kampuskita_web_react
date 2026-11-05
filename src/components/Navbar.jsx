import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from '../data/content'
import DaftarLink from './DaftarLink'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" aria-label="Beranda Kuliah Islam Abu Dzar">
          <Logo />
        </Link>

        <nav className="nav-links" aria-label="Menu utama">
          {NAV.map((item) =>
            item.external ? (
              <a key={item.to} href={item.to} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <DaftarLink className="btn btn-lime btn-sm nav-cta-desktop">Daftar</DaftarLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {NAV.map((item) =>
          item.external ? (
            <a key={item.to} href={item.to} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ),
        )}
        <DaftarLink className="btn btn-lime" style={{ marginTop: 8 }}>
          Daftar Sekarang
        </DaftarLink>
      </div>
    </header>
  )
}
