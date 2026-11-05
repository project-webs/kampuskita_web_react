import PageHero from '../components/PageHero'
import DaftarLink from '../components/DaftarLink'
import { FAQ } from '../data/content'

export default function Faq() {
  return (
    <>
      <PageHero title="FAQ — Pertanyaan yang Sering Diajukan">
        Jawaban singkat seputar pendaftaran, biaya, sistem kuliah, dan legalitas program studi.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="placeholder-note">{FAQ.note}</div>

          <div className="faq-list">
            {FAQ.items.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <div className="answer">{item.a}</div>
              </details>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <DaftarLink className="btn btn-lime">Daftar Sekarang</DaftarLink>
          </div>
        </div>
      </section>
    </>
  )
}
