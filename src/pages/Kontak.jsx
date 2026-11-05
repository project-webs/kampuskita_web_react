import PageHero from '../components/PageHero'
import { CONTACT, MAPS_EMBED_URL, MAPS_LINK } from '../data/config'
import { WA_LINK } from '../data/content'

export default function Kontak() {
  return (
    <>
      <PageHero title="Kontak & Lokasi">
        Hubungi kami untuk pertanyaan seputar pendaftaran, atau datang langsung ke sekretariat
        Kuliah Islam Abu Dzar.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <h3>WhatsApp</h3>
              <p>Pertanyaan pendaftaran & biaya.</p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-wa btn-sm" style={{ marginTop: 12 }}>
                Chat {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="card">
              <h3>Email</h3>
              <p>Untuk keperluan resmi dan administrasi.</p>
              <a href={`mailto:${CONTACT.email}`} className="btn btn-outline btn-sm" style={{ marginTop: 12 }}>
                {CONTACT.email}
              </a>
            </div>
            <div className="card">
              <h3>Media Sosial</h3>
              <p>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                  Instagram @kuliahabudzar
                </a>
                <br />
                <a href={CONTACT.youtube} target="_blank" rel="noreferrer">
                  YouTube Media Abu Dzar
                </a>
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: 26 }}>
            <h3>Alamat</h3>
            <p>
              {CONTACT.address.street},<br />
              {CONTACT.address.village},<br />
              {CONTACT.address.city},<br />
              {CONTACT.address.province}
            </p>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              Buka di Google Maps
            </a>
          </div>

          <div className="map-frame" style={{ marginTop: 26 }}>
            <iframe
              src={MAPS_EMBED_URL}
              title="Peta lokasi Kuliah Islam Abu Dzar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="table-note">
            Peta mengarah langsung ke titik alamat sekretariat (bukan pencarian “SD Islam Abu Dzar”).
          </p>
        </div>
      </section>
    </>
  )
}
