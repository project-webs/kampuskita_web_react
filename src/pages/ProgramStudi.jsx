import PageHero from '../components/PageHero'
import DaftarLink from '../components/DaftarLink'
import { PROGRAM_STUDI, KURIKULUM, FLYER_LINKS } from '../data/content'

export default function ProgramStudi() {
  return (
    <>
      <PageHero title="Program Studi">
        Dua program studi S1 di Kuliah Islam Abu Dzar — keduanya memberikan gelar S.Pd. dan terbuka
        untuk semua kalangan: lulusan SMA, guru, karyawan, ibu rumah tangga, hingga pensiunan.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {PROGRAM_STUDI.map((prodi) => (
              <article className="prodi-card" key={prodi.slug}>
                {prodi.badge ? <span className="prodi-badge">{prodi.badge}</span> : null}
                <div className="prodi-code">{prodi.code}</div>
                <h3>{prodi.name}</h3>
                <div className="prodi-degree">Gelar: {prodi.degree}</div>
                <p>{prodi.desc}</p>
                <ul className="prodi-points">
                  {prodi.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <DaftarLink prodi={prodi.slug} className="btn btn-primary btn-block">
                  Daftar {prodi.code}
                </DaftarLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Kurikulum</span>
            <h2 className="section-title">Struktur Kurikulum per Prodi</h2>
            <p className="section-desc">{KURIKULUM.note}</p>
          </div>

          {KURIKULUM.programs.map((program) => (
            <div className="kurikulum-block" key={program.prodi}>
              <h3>{program.prodi}</h3>
              <table className="kurikulum-table">
                <tbody>
                  {program.semesters.map((row) => (
                    <tr key={row.sem}>
                      <th>{row.sem}</th>
                      <td>{row.courses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <div className="placeholder-note" style={{ marginTop: 24 }}>
            Struktur kurikulum rinci (kode mata kuliah, SKS, urutan persetujuan) menyusul dari
            pengelola — akan menggantikan kerangka ilustrasi di atas.
          </div>

          <div style={{ textAlign: 'center' }}>
            <DaftarLink className="btn btn-lime">Daftar Sekarang</DaftarLink>
            <span style={{ display: 'inline-block', margin: '0 10px', color: 'var(--muted)' }}>
              atau
            </span>
            <a
              href={FLYER_LINKS.flyer}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Lihat Flyer
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
