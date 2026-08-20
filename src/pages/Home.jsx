import { Link } from 'react-router-dom'
import { FlaskConical, Waypoints, Sparkles, Droplets, Gauge, Target, ShieldCheck, BadgeCheck, Workflow, Puzzle } from 'lucide-react'

const SERVICES = [
  {
    icon: FlaskConical,
    title: 'Industrial Chemical Cleaning',
    desc: 'Steam boilers, furnaces, heat exchangers, condensers & coolers, tanks & vessels, process equipment.',
  },
  {
    icon: Waypoints,
    title: 'Industrial Pipelines',
    desc: 'Pipeline cleaning for oxygen, nitrogen, hydrogen gas, process & utility, and fuel & chemical pipelines.',
  },
  {
    icon: Sparkles,
    title: 'Pickling & Passivation',
    desc: 'Stainless steel pipes, spools, tanks & vessels, fabricated components — removal of weld heat tint, oxides & surface contamination.',
  },
  {
    icon: Droplets,
    title: 'Mechanical Cleaning',
    desc: 'High pressure hydro-jetting, ultra high pressure water jetting, poly-pig cleaning, dry-ice blasting, manual mechanical cleaning.',
  },
  {
    icon: Gauge,
    title: 'Testing & Purging',
    desc: 'Hydrostatic testing, pressure testing, nitrogen purging, nitrogen drying, inerting services.',
  },
]

const WHY_US = [
  { icon: Target, title: 'Technical Expertise', desc: 'Our experienced engineering team provides technically appropriate cleaning methods based on equipment condition, contamination, material of construction and customer requirements.' },
  { icon: ShieldCheck, title: 'Safety First', desc: 'Safety is integrated into every stage of our work through risk assessment, method statements, safe work procedures, chemical handling controls and appropriate PPE.' },
  { icon: BadgeCheck, title: 'Quality Workmanship', desc: 'We follow controlled procedures to achieve the required cleaning, surface condition and system cleanliness.' },
  { icon: Workflow, title: 'Complete Service', desc: 'From site assessment and engineering proposal through execution, inspection, documentation and waste management, we provide an integrated service.' },
  { icon: Puzzle, title: 'Flexible Solutions', desc: 'We can provide chemical, mechanical or combined cleaning solutions depending on the application and project requirements.' },
]

const INDUSTRIES = [
  'Oil & Gas',
  'Petrochemical',
  'Chemical & Process Industries',
  'Power Generation',
  'Pharmaceutical',
  'Food & Beverage',
  'Semiconductor',
  'Water & Wastewater',
  'Industrial Manufacturing',
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-inner">
          <h1>Industrial Chemical Cleaning Specialists</h1>
          <p className="lead">
            Professional cleaning solutions for industrial plants, equipment and process systems.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Request a Quotation</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section>
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-tag">Who We Are</span>
            <h2>Safe, Technically Controlled & Cost-Effective Cleaning</h2>
            <p>
              JSPS Engineering & Solutions Pte. Ltd. provides specialized industrial
              chemical cleaning, pickling & passivation, mechanical cleaning,
              hydro-testing and nitrogen purging services for industrial plants,
              process equipment, pipelines, tanks and vessels.
            </p>
            <p>
              We provide safe, technically controlled and cost-effective cleaning
              solutions to help customers achieve clean, reliable and
              ready-for-service equipment and process systems.
            </p>
            <Link to="/about" className="btn btn-outline-dark">More About Us</Link>
          </div>
          <img src="/who_we_are_img.jpg" alt="Photo of plant / cleaning crew / equipment" style={{
            height: 400,
            borderRadius: 8,

          }} />
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">Our Key Services</span>
            <h2>What We Do</h2>
          </div>

          <div className="grid grid-3">
            {SERVICES.map((s) => (
              <div className="card service-card" key={s.title}>
                <div className="icon-box"><s.icon size={26} strokeWidth={1.75} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="learn-more">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE JSPS ===== */}
      <section>
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">Why Choose JSPS?</span>
            <h2>A Technically-Led, Safety-First Partner</h2>
          </div>
          <div className="grid grid-3">
            {WHY_US.map((w) => (
              <div className="card" key={w.title}>
                <div className="icon-box"><w.icon size={26} strokeWidth={1.75} /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">Industries We Serve</span>
            <h2>We Support Industrial Customers In</h2>
          </div>
          <div className="grid grid-4">
            {INDUSTRIES.map((ind) => (
              <div className="card" style={{ textAlign: 'center' }} key={ind}>
                <h4 style={{ margin: 0 }}>{ind}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR COMMITMENT ===== */}
      <section>
        <div className="container" style={{ textAlign: 'center', maxWidth: 780 }}>
          <span className="section-tag">Our Commitment</span>
          <h2 style={{ letterSpacing: '0.02em' }}>Safety · Quality · Reliability · Technical Excellence</h2>
          <p>
            JSPS Engineering & Solutions Pte. Ltd. is committed to delivering
            professional industrial cleaning and engineering services while
            maintaining high standards of safety, quality, environmental
            responsibility and customer satisfaction.
          </p>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="cta-band">
            <div>
              <h3>Need Industrial Chemical Cleaning?</h3>
              <p>Talk to our technical team about your equipment or cleaning requirements.</p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Request a Quotation</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
