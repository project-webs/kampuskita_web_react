import PageHero from '../components/PageHero'
import DaftarLink from '../components/DaftarLink'
import { BIAYA, PROGRAM_STUDI } from '../data/content'

export default function Biaya() {
  return (
    <>
      <PageHero title="Biaya Kuliah">
        Biaya transparan untuk kedua program studi. Biaya PAI dan PGMI sama, dan UKT sudah
        termasuk ujian semester.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Rincian Biaya</span>
            <h2 className="section-title">Biaya {PROGRAM_STUDI[0].code} & {PROGRAM_STUDI[1].code} Sama</h2>
            <p className="section-desc">{BIAYA.note}</p>
          </div>

          <table className="price-table">
            <thead>
              <tr>
                <th>Item Biaya</th>
                <th>Nominal</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {BIAYA.rows.map((row) => (
                <tr key={row.item}>
                  <td>
                    <strong>{row.item}</strong>
                  </td>
                  <td className={`amount${row.free ? ' free' : ''}`}>{row.value}</td>
                  <td className="detail">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="table-note">{BIAYA.faqNote}</p>

          <div className="grid grid-3" style={{ marginTop: 34 }}>
            <div className="card">
              <h3>Sudah Termasuk</h3>
              <p>Biaya ujian semester sudah termasuk dalam UKT Rp1.950.000 per semester.</p>
            </div>
            <div className="card">
              <h3>Tanpa Uang Masuk</h3>
              <p>Uang masuk GRATIS — tidak ada biaya tersembunyi saat pertama kali mendaftar.</p>
            </div>
            <div className="card">
              <h3>Flyer Pendaftaran</h3>
              <p>Rincian pembayaran mengikuti flyer pendaftaran semester genap 2026/2027.</p>
            </div>
          </div>

          <div className="cta" style={{ marginTop: 40 }}>
            <div>
              <h2>Siap Mendaftar?</h2>
              <p>Biaya pendaftaran hanya Rp550.000 dan uang masuk GRATIS.</p>
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
