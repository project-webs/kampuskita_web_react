import { Link } from 'react-router-dom'
import { CONTACT, COPYRIGHT, CAMPUS_NAME } from '../data/config'
import { NAV, FLYER_LINKS } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand">
            <span className="nav-logo">
              <Logo />
            </span>
            <p style={{ margin: '14px 0 12px', fontSize: '0.95rem' }}>
              Kuliah Islam terbuka untuk semua kalangan. Program S1 Pendidikan Agama Islam (PAI)
              dan S1 Pendidikan Guru Madrasah Ibtidaiyah (PGMI).
            </p>
            <p className="logo-note">
              Logo sementara memakai mark KITA dengan nama kampus di sebelahnya — logo final
              menyusul dari pengelola.
            </p>
          </div>

          <div>
            <h4>Navigasi</h4>
            <ul>
              {NAV.map((item) => (
                <li key={item.to}>
                  {item.external ? (
                    <a href={item.to} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to}>{item.label}</Link>
                  )}
                </li>
              ))}
              <li>
                <Link to="/daftar">Formulir Pendaftaran</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Kontak & Media Sosial</h4>
            <ul className="contact-list">
              <li>
                <span aria-hidden="true">📱</span>
                <a href={`https://wa.me/${CONTACT.phoneIntl}`} target="_blank" rel="noreferrer">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <span aria-hidden="true">✉️</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <span aria-hidden="true">📸</span>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                  @kuliahabudzar
                </a>
              </li>
              <li>
                <span aria-hidden="true">▶️</span>
                <a href={CONTACT.youtube} target="_blank" rel="noreferrer">
                  Media Abu Dzar
                </a>
              </li>
              <li>
                <span aria-hidden="true">📍</span>
                <span>
                  {CONTACT.address.street}, {CONTACT.address.village}, {CONTACT.address.city},{' '}
                  {CONTACT.address.province}
                </span>
              </li>
              <li>
                <span aria-hidden="true">📄</span>
                <a href={FLYER_LINKS.flyer} target="_blank" rel="noreferrer">
                  Unduh Flyer Pendaftaran
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            Copyright © {COPYRIGHT.year} {COPYRIGHT.owner}
          </span>
          <span>
            Made by {COPYRIGHT.credit} — {CAMPUS_NAME}
          </span>
        </div>
      </div>
    </footer>
  )
}
