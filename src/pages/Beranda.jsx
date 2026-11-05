import { Link } from 'react-router-dom'
import {
  HERO,
  SISTEM_LEGALITAS,
  PROGRAM_STUDI,
  BIAYA,
  ALUR_DAFTAR,
  DOSEN,
  KALENDER,
  TESTIMONI,
  FAQ,
  CTA,
  REKENING,
  WA_LINK,
} from '../data/content'
import { CONTACT, FLYER, MAPS_EMBED_URL } from '../data/config'
import DaftarLink from '../components/DaftarLink'

function SectionHead({ eyebrow, title, desc, align = 'center' }) {
  return (
    <div className={`section-head${align === 'left' ? ' left' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {desc ? <p className="section-desc">{desc}</p> : null}
    </div>
  )
}

export default function Beranda() {
  return (
    <>
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">{HERO.eyebrow}</span>
            <h1>{HERO.title}</h1>
            <p className="lead">{HERO.subtitle}</p>

            <div className="hero-badges">
              <span className="pill">✓ Terdaftar di PDDIKTI</span>
              <span className="pill">✓ Kurikulum OBE</span>
              <span className="pill lime">✓ Online akhir pekan (Sabtu–Ahad)</span>
            </div>

            <div className="hero-actions">
              <DaftarLink className="btn btn-lime">Daftar Sekarang</DaftarLink>
              <a href={FLYER.url} target="_blank" rel="noreferrer" className="btn btn-outline">
                Unduh Brosur
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="poster"
              src={HERO.image}
              srcSet={HERO.imageSrcSet}
              sizes="(max-width: 1024px) 88vw, 360px"
              width={800}
              height={1200}
              fetchPriority="high"
              alt={HERO.imageAlt}
            />
            <img
              className="ornament"
              src="/images/study-ornament.webp"
              alt=""
              aria-hidden="true"
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* --------------------------- PROGRAM STUDI ------------------------ */}
      <section className="section section-alt" id="program-studi">
        <div className="container">
          <SectionHead
            eyebrow="Program Studi"
            title="Dua Program Studi S1, Satu Tujuan"
            desc="Keduanya memberikan gelar S.Pd. dan terbuka bagi semua kalangan."
          />
          <div className="grid grid-2">
            {PROGRAM_STUDI.map((prodi, index) => (
              <article
                className={`prodi-card${index === 0 ? ' solid' : ' outline'}`}
                key={prodi.slug}
              >
                {prodi.badge ? <span className="prodi-badge">{prodi.badge}</span> : null}
                <div className="prodi-code">{prodi.code}</div>
                <h3>{prodi.name}</h3>
                <div className="prodi-degree">Gelar: {prodi.degree}</div>
                <p>{prodi.desc}</p>
                <Link to="/program-studi" className="prodi-link">
                  Lihat struktur kurikulum →
                </Link>
                <DaftarLink prodi={prodi.slug} className="btn btn-primary btn-block">
                  Daftar {prodi.code}
                </DaftarLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- SISTEM KULIAH & LEGALITAS ------------------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Sistem Kuliah & Legalitas"
            title="Kuliah Fleksibel dengan Legalitas Resmi"
            desc="Belajar daring kapan saja — termasuk akhir pekan — dengan program studi terukur di PDDIKTI."
          />
          <div className="grid grid-3">
            {SISTEM_LEGALITAS.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- BIAYA --------------------------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Biaya" title="Biaya Transparan & Terjangkau" desc={BIAYA.note} />
          <table className="price-table">
            <thead>
              <tr>
                <th>Item Biaya</th>
                <th>Nominal</th>
              </tr>
            </thead>
            <tbody>
              {BIAYA.rows.map((row) => (
                <tr key={row.item}>
                  <td>
                    <strong>{row.item}</strong>
                  </td>
                  <td className={`amount${row.free ? ' free' : ''}`}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="table-note">Biaya sama untuk PAI dan PGMI.</p>
        </div>
      </section>

      {/* --------------------------- ALUR PENDAFTARAN -------------------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Alur Pendaftaran"
            title={ALUR_DAFTAR.title}
            desc="Empat langkah singkat untuk memulai kuliah."
          />
          <div className="steps">
            {ALUR_DAFTAR.steps.map((step) => (
              <div className="step" key={step.no}>
                <div className="num">{step.no}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- DOSEN --------------------------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Dosen"
            title="Belajar dari Dosen Berkualitas"
            desc="Enam dosen dengan bidang studi beragam — profil resmi lengkap menyusul dari pengelola."
          />
          <div className="grid grid-3">
            {DOSEN.map((dosen) => (
              <div className="dosen-card" key={dosen.name}>
                <img
                  src={dosen.photo}
                  alt={`Foto dummy dosen ${dosen.name}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <div className="body">
                  <h3>{dosen.name}</h3>
                  <div className="role">{dosen.field}</div>
                  <p className="alma">Almamater: {dosen.alma}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- KALENDER AKADEMIK -------------------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Kalender Akademik"
            title="Kalender Semester Genap 2026/2027"
            desc="Ringkasan tahapan akademik semester genap."
          />
          <div className="kalender">
            {KALENDER.rows.map((row) => (
              <div className="kalender-row" key={row.item}>
                <span>{row.item}</span>
                <strong className={row.free ? 'free' : ''}>{row.value}</strong>
              </div>
            ))}
          </div>
          <p className="table-note">{KALENDER.note}</p>
        </div>
      </section>

      {/* ------------------------------ TESTIMONI ------------------------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Testimoni"
            title="Kata Mahasiswa & Alumni"
            desc={TESTIMONI.note}
          />
          <div className="grid grid-3">
            {TESTIMONI.items.map((item, index) => (
              <div className="quote-card" key={index}>
                <p>“{item.text}”</p>
                <div className="who">
                  <div className="avatar">{index + 1}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- FAQ ----------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            desc="Klik pertanyaan untuk melihat jawabannya."
          />
          <div className="faq-list">
            {FAQ.items.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <div className="answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- CTA ----------------------------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta with-qr">
            <DaftarLink className="cta-qr" aria-label="Buka formulir pendaftaran">
              <img
                src="/images/qr-pendaftaran.webp"
                alt="QR code pendaftaran Kuliah Islam Abu Dzar"
                width={150}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </DaftarLink>
            <div>
              <h2 className="cta-accent">{CTA.title}</h2>
              <p>
                Konsultasi gratis via{' '}
                <a href={WA_LINK} target="_blank" rel="noreferrer">
                  WhatsApp {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                Transfer pendaftaran:{' '}
                <strong>
                  {REKENING.bank} {REKENING.number}
                </strong>{' '}
                a/n {REKENING.holder}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ KONTAK ---------------------------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Kontak & Lokasi"
            title="Sekretariat Kuliah Islam Abu Dzar"
            desc="Kunjungi kami atau hubungi melalui WhatsApp."
          />
          <div className="kontak-grid">
            <div className="map-frame">
              <iframe
                src={MAPS_EMBED_URL}
                title="Peta lokasi Kuliah Islam Abu Dzar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="kontak-info card">
              <h3>Kuliah Islam Abu Dzar</h3>
              <p>
                {CONTACT.address.street}, {CONTACT.address.village}, {CONTACT.address.city},{' '}
                {CONTACT.address.province}
              </p>
              <p>
                WhatsApp{' '}
                <a href={WA_LINK} target="_blank" rel="noreferrer">
                  {CONTACT.phoneDisplay}
                </a>
                <br />
                Instagram{' '}
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                  @kuliahabudzar
                </a>
              </p>
              <p>
                Email{' '}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
              <DaftarLink className="btn btn-lime">Daftar Sekarang</DaftarLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
