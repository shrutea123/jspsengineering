import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { FlaskConical, Waypoints, Sparkles, Droplets, Gauge } from 'lucide-react'

// `id` values here must match the #hash used by links pointing at a specific
// service (e.g. the Footer's "Services" column) so the browser has something
// to scroll to — see ScrollToTop.jsx for the actual scroll-on-hash behaviour.
const SERVICES = [
  {
    id: 'industrial-chemical-cleaning',
    icon: FlaskConical,
    title: 'Industrial Chemical Cleaning',
    desc: 'Specialized chemical cleaning for industrial plant equipment, restoring cleanliness and reliability ahead of start-up, turnaround or maintenance.',
    bullets: ['Steam Boilers', 'Furnaces', 'Heat Exchangers', 'Condensers & Coolers', 'Tanks & Vessels', 'Process Equipment'],
    img: '/chemical_cleaning.jpg',
  },
  {
    id: 'pipeline-cleaning',
    icon: Waypoints,
    title: 'Industrial Pipelines',
    desc: 'Pipeline cleaning services across a wide range of gas, process, utility and chemical pipeline systems.',
    bullets: ['Oxygen Pipelines', 'Nitrogen Pipelines', 'Hydrogen Gas Pipelines', 'Process & Utility Pipelines', 'Fuel & Chemical Pipelines'],
    img: '/pipeline_cleaning.jpg',
  },
  {
    id: 'pickling-passivation',
    icon: Sparkles,
    title: 'Pickling & Passivation',
    desc: 'Removal of weld heat tint, oxides and surface contamination to restore the corrosion resistance of stainless steel and fabricated components.',
    bullets: ['Stainless Steel Pipes', 'Stainless Steel Spools', 'Tanks & Vessels', 'Fabricated Components', 'Process Equipment', 'Removal of Weld Heat Tint, Oxides & Surface Contamination'],
    img: 'pickling_passivation.jpg',
  },
  {
    id: 'mechanical-cleaning',
    icon: Droplets,
    title: 'Mechanical Cleaning',
    desc: 'Mechanical cleaning methods matched to the equipment, contamination type and access constraints of your system.',
    bullets: ['High Pressure Hydro-Jetting', 'Ultra High Pressure Water Jetting', 'Poly-Pig Cleaning', 'Dry-Ice Blasting', 'Manual Mechanical Cleaning'],
    img: '/poly_pig.jpg',
  },
  {
    id: 'testing-purging',
    icon: Gauge,
    title: 'Testing & Purging',
    desc: 'Testing and purging services to confirm system integrity and prepare pipelines and equipment for safe operation.',
    bullets: ['Hydrostatic Testing', 'Pressure Testing', 'Nitrogen Purging', 'Nitrogen Drying', 'Inerting Services'],
    img: '/testing.jpg',
  },
]

const INDUSTRIES = [
  'Oil & Gas', 'Petrochemical', 'Chemical & Process Industries', 'Power Generation', 'Marine & Offshore',
  'Pharmaceutical', 'Food & Beverage', 'Semiconductor', 'Water & Wastewater', 'Industrial Manufacturing',
]

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Our Services"
        description="Specialized industrial chemical cleaning, mechanical cleaning, pickling & passivation, hydro-testing and nitrogen purging services for industrial plants, process equipment, pipelines, tanks and vessels."
      />

      {SERVICES.map((s, i) => (
        <section id={s.id} className={i % 2 === 1 ? 'section-alt' : undefined} key={s.title}>
          <div className="container grid grid-2" style={{ alignItems: 'center' }}>
            {i % 2 === 1 ? (
              <>
                <img src={s.img} style={{ height: 300, borderRadius: 8 }} />
                <ServiceCopy s={s} />
              </>
            ) : (
              <>
                <ServiceCopy s={s} />
                <img src={s.img} style={{ height: 300, borderRadius: 8 }} />
              </>
            )}
          </div>
        </section>
      ))}

      {/* ===== INDUSTRIES SERVED ===== */}
      <section>
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">Industries</span>
            <h2>Industries We Serve</h2>
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

      <section className="section-alt">
        <div className="container">
          <div className="cta-band">
            <div>
              <h3>Not sure which service you need?</h3>
              <p>Tell us about your equipment and we'll recommend the right scope of cleaning support.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Request a Quotation</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCopy({ s }) {
  return (
    <div>
      <div className="icon-box"><s.icon size={28} strokeWidth={1.75} /></div>
      <h2>{s.title}</h2>
      <p>{s.desc}</p>
      <ul>
        {s.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  )
}
