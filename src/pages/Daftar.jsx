import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { CONTACT, REGISTRATION_URL, FLYER } from '../data/config'
import { PROGRAM_STUDI, REKENING, ALUR_DAFTAR } from '../data/content'

const PENDIDIKAN = ['SMA/SMK', 'S1', 'S2', 'D3', 'Lainnya']

export default function Daftar() {
  const [searchParams] = useSearchParams()
  const initialProdi = searchParams.get('prodi')
  const [form, setForm] = useState({
    nama: '',
    wa: '',
    email: '',
    domisili: '',
    pendidikan: 'SMA/SMK',
    prodi: PROGRAM_STUDI.some((p) => p.slug === initialProdi) ? initialProdi : 'pai',
    catatan: '',
  })
  const [sent, setSent] = useState(false)

  const update = (key) => (event) => setForm((f) => ({ ...f, [key]: event.target.value }))

  const selectedProdi = PROGRAM_STUDI.find((p) => p.slug === form.prodi)

  const handleSubmit = (event) => {
    event.preventDefault()
    const pesan = [
      'ASSALAMUALAIKUM, Saya ingin mendaftar Kuliah Islam Abu Dzar.',
      '',
      `Nama: ${form.nama}`,
      `WhatsApp: ${form.wa}`,
      `Email: ${form.email}`,
      `Domisili: ${form.domisili}`,
      `Pendidikan terakhir: ${form.pendidikan}`,
      `Program studi: ${selectedProdi.name} (${selectedProdi.code})`,
      form.catatan ? `Catatan: ${form.catatan}` : '',
      '',
      'Saya siap mentransfer biaya pendaftaran Rp550.000 sesuai flyer.',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(pesan)}`,
      '_blank',
      'noopener',
    )
    setSent(true)
  }

  useEffect(() => {
    if (REGISTRATION_URL) window.location.href = REGISTRATION_URL
  }, [])

  if (REGISTRATION_URL) return null

  return (
    <>
      <PageHero title="Formulir Pendaftaran">
        Lengkapi data diri Anda dan pilih program studi. Setelah formulir terkirim, lanjutkan dengan
        transfer biaya pendaftaran Rp550.000, lalu tunggu verifikasi dari tim kami.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="form-card">
            <h2 style={{ fontSize: '1.4rem' }}>Data Calon Mahasiswa</h2>
            <p className="form-hint">
              Kolom bertanda <span className="req">*</span> wajib diisi. Formulir ini mengirim data
              Anda ke WhatsApp resmi {CONTACT.phoneDisplay}.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="field full">
                <label>
                  Pilihan Program Studi <span className="req">*</span>
                </label>
                <div className="prodi-radio">
                  {PROGRAM_STUDI.map((prodi) => (
                    <label key={prodi.slug}>
                      <input
                        type="radio"
                        name="prodi"
                        value={prodi.slug}
                        checked={form.prodi === prodi.slug}
                        onChange={update('prodi')}
                      />
                      <span>
                        {prodi.name}
                        <small>
                          Gelar {prodi.degree}
                          {prodi.badge ? ` • ${prodi.badge}` : ''}
                        </small>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-grid" style={{ marginTop: 18 }}>
                <div className="field full">
                  <label>
                    Nama Lengkap <span className="req">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Nama sesuai identitas"
                    value={form.nama}
                    onChange={update('nama')}
                  />
                </div>

                <div className="field">
                  <label>
                    Nomor WhatsApp <span className="req">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={form.wa}
                    onChange={update('wa')}
                  />
                </div>

                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={update('email')}
                  />
                </div>

                <div className="field">
                  <label>
                    Domisili <span className="req">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Kota / Kabupaten"
                    value={form.domisili}
                    onChange={update('domisili')}
                  />
                </div>

                <div className="field">
                  <label>
                    Pendidikan Terakhir <span className="req">*</span>
                  </label>
                  <select value={form.pendidikan} onChange={update('pendidikan')}>
                    {PENDIDIKAN.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field full">
                  <label>Catatan (opsional)</label>
                  <textarea
                    rows="3"
                    placeholder="Pertanyaan atau informasi tambahan"
                    value={form.catatan}
                    onChange={update('catatan')}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-lime btn-block" style={{ marginTop: 22 }}>
                Kirim Formulir via WhatsApp
              </button>

              {sent ? (
                <div className="form-success">
                  Formulir terkirim ke WhatsApp {CONTACT.phoneDisplay}. Langkah berikutnya: transfer
                  biaya pendaftaran Rp550.000 sesuai rekening pada flyer, lalu kirim bukti transfer
                  untuk verifikasi.
                </div>
              ) : null}
            </form>
          </div>

          <div className="grid grid-2" style={{ maxWidth: 720, margin: '30px auto 0' }}>
            <div className="card">
              <h3>Alur Selanjutnya</h3>
              <ul className="prodi-points" style={{ marginBottom: 0 }}>
                {ALUR_DAFTAR.steps.map((step) => (
                  <li key={step.no}>
                    {step.title} — {step.desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Rekening & QR</h3>
              <div className="rek-row">
                <span>Bank</span>
                <span>{REKENING.bank}</span>
              </div>
              <div className="rek-row">
                <span>No. Rekening</span>
                <span>{REKENING.number}</span>
              </div>
              <div className="rek-row">
                <span>Atas Nama</span>
                <span>{REKENING.holder}</span>
              </div>
              <div style={{ textAlign: 'center', marginTop: 12 }}>
                <img
                  src={REKENING.qrImage}
                  alt="QR code pendaftaran Kuliah Islam Abu Dzar sesuai flyer resmi"
                  width={150}
                  height={150}
                  loading="lazy"
                />
              </div>
              <a
                href={FLYER.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-block"
                style={{ marginTop: 10 }}
              >
                Lihat Flyer
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
