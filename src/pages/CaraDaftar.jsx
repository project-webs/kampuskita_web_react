import PageHero from '../components/PageHero'
import DaftarLink from '../components/DaftarLink'
import { ALUR_DAFTAR, REKENING, FLYER_LINKS } from '../data/content'

export default function CaraDaftar() {
  return (
    <>
      <PageHero title="Cara Daftar">
        Empat langkah singkat: isi formulir, transfer biaya pendaftaran, verifikasi, lalu mulai
        kuliah. QR pendaftaran dan rekening mengikuti flyer pendaftaran.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="steps">
            {ALUR_DAFTAR.steps.map((step) => (
              <div className="step" key={step.no}>
                <div className="num">{step.no}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="pay-box">
            <div>
              <span className="eyebrow">Pembayaran</span>
              <h3 style={{ fontSize: '1.3rem' }}>Transfer Biaya Pendaftaran</h3>
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
              <div className="rek-row">
                <span>Nominal</span>
                <span style={{ color: 'var(--green-800)' }}>Rp550.000 (Pendaftaran)</span>
              </div>
              <p className="form-hint" style={{ marginTop: 12 }}>
                Pastikan rekening sama persis dengan yang tertera pada flyer pendaftaran.
              </p>
            </div>

            <div className="qr-box">
              <img
                src={REKENING.qrImage}
                alt="QR code pendaftaran Kuliah Islam Abu Dzar sesuai flyer resmi"
                width={190}
                height={190}
                loading="lazy"
              />
              <p>{REKENING.qrCaption}</p>
            </div>
          </div>

          <div className="grid grid-2" style={{ marginTop: 30 }}>
            <div className="card">
              <h3>Formulir Pendaftaran</h3>
              <p>Isi data diri dan pilih prodi: S1 PAI atau S1 PGMI.</p>
              <div style={{ marginTop: 16 }}>
                <DaftarLink className="btn btn-primary btn-block">Isi Formulir Pendaftaran</DaftarLink>
              </div>
            </div>
            <div className="card">
              <h3>Unduh Flyer</h3>
              <p>Informasi resmi pendaftaran semester genap 2026/2027 dalam satu berkas PDF.</p>
              <div style={{ marginTop: 16 }}>
                <a
                  href={FLYER_LINKS.flyer}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lime btn-block"
                >
                  Unduh Flyer PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
