import PageHero from '../components/PageHero'
import PlaceholderImg from '../components/PlaceholderImg'
import { Link } from 'react-router-dom'
import { Target, Telescope, Gem, Award } from 'lucide-react'

const VALUES = [
  { icon: Target, title: 'Mission', desc: 'To deliver safe, technically controlled and cost-effective cleaning solutions that help our customers achieve clean, reliable and ready-for-service equipment and process systems.' },
  { icon: Telescope, title: 'Vision', desc: 'To be a trusted industrial cleaning and engineering partner of choice for process industries across Singapore and the region.' },
  { icon: Gem, title: 'Values', desc: 'Safety, quality, reliability and technical excellence guide every project we undertake.' },
]

const CERTS = ['[Certification 1]', '[Certification 2]', '[Certification 3]', '[Certification 4]']

const TEAM = [
  {
    name: 'Senthamaraiselvan',
    title: 'Founder',
    bio: 'Over 25 years of experience in the chemical cleaning industry.',
  },
  // TODO: Add more team members here as the company grows
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About JSPS Engineering & Solutions"
        description="Industrial chemical cleaning & mechanical cleaning specialists supporting process industries with safe, reliable solutions."
      />

      {/* ===== COMPANY OVERVIEW ===== */}
      <section>
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-tag">Our Story</span>
            <h2>Built to Fill a Gap in the Industry</h2>
            <p>
              JSPS Engineering & Solutions Pte. Ltd. was set up to give plant
              operators and contractors a dedicated, technically-led partner for
              industrial chemical and mechanical cleaning — one that treats
              cleaning, pickling, testing and purging work with the same
              engineering discipline as any other critical plant activity.
            </p>
            <p>
              As a newly established company, we're building our track record
              project by project — backed by hands-on industry experience and a
              commitment to getting the technical detail right the first time.
            </p>
          </div>
          <PlaceholderImg label="Company / facility photo" style={{ minHeight: 300 }} />
        </div>
      </section>

      {/* ===== MISSION / VISION / VALUES ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">Our Foundation</span>
            <h2>Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid grid-3">
            {VALUES.map((v) => (
              <div className="card" key={v.title}>
                <div className="icon-box"><v.icon size={26} strokeWidth={1.75} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">Accreditations</span>
            <h2>Certifications</h2>
          </div>
          <div className="grid grid-4">
            {CERTS.map((c) => (
              <div className="cert-badge" key={c}>
                <div className="icon-box"><Award size={22} strokeWidth={1.75} /></div>
                <div>{c}</div>
              </div>
            ))}
          </div>
          {/* TODO: Replace with real certification logos/names, or remove this section if not applicable */}
        </div>
      </section>

      {/* ===== TEAM (placeholder) ===== */}
      <section className="section-alt">
        <div className="container center">
          <div className="section-head center">
            <span className="section-tag">Our People</span>
            <h2>Leadership Team</h2>
          </div>
          <div className="grid grid-3">
            {TEAM.map((member) => (
              <div className="card" style={{ textAlign: 'center' }} key={member.name}>
                <PlaceholderImg
                  label="Photo"
                  style={{ minHeight: 160, borderRadius: '50%', width: 160, margin: '0 auto 18px' }}
                />
                <h4>{member.name}</h4>
                <p style={{ color: 'var(--color-teal)', fontWeight: 600, marginBottom: 8 }}>{member.title}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-band">
            <div>
              <h3>Want to know more about our capabilities?</h3>
              <p>Get in touch and we'll walk you through how we can support your equipment or plant.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Request a Quotation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
