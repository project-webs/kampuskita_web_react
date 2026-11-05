import PageHero from '../components/PageHero'
import DaftarLink from '../components/DaftarLink'
import { DOSEN } from '../data/content'

export default function Dosen() {
  return (
    <>
      <PageHero title="Dosen">
        Belajar dari dosen berkualitas dengan bidang studi yang beragam. Nama dan bidang studi
        mengikuti data awal dari pengelola — almamater akan diisi setelah diverifikasi.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {DOSEN.map((dosen) => (
              <article className="dosen-card" key={dosen.name}>
                <img
                  src={dosen.photo}
                  alt={`Foto dummy dosen ${dosen.name}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <div className="body">
                  <div className="role">{dosen.field}</div>
                  <h3>{dosen.name}</h3>
                  <p className="alma">Almamater: {dosen.alma}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="placeholder-note" style={{ marginTop: 28 }}>
            Foto dosen masih placeholder dan almamater menunggu data resmi dari pengelola —
            akan disesuaikan begitu data final diterima.
          </div>

          <div className="cta">
            <div>
              <h2>Siap Belajar Bersama Dosen Kami?</h2>
              <p>Amankan kursi Anda pada pendaftaran semester genap 2026/2027.</p>
            </div>
            <div className="actions">
              <DaftarLink className="btn btn-lime">Daftar Sekarang</DaftarLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
