import { useState } from 'react'
import PageHero from '../components/PageHero'
import PlaceholderImg from '../components/PlaceholderImg'
import { Link } from 'react-router-dom'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'chemical-cleaning', label: 'Chemical Cleaning' },
  { key: 'pipeline', label: 'Pipeline Cleaning' },
  { key: 'pickling', label: 'Pickling & Passivation' },
  { key: 'mechanical', label: 'Mechanical Cleaning' },
  { key: 'testing', label: 'Testing & Purging' },
]

// TODO: Replace with real projects, photos and descriptions.
// Note: many clients require confidentiality — check before naming clients
// publicly; use generic descriptions (e.g. "Heat exchanger cleaning, Jurong
// Island petrochemical plant") if needed.
const PROJECTS = [
  { category: 'chemical-cleaning', label: 'Chemical Cleaning' },
  { category: 'pipeline', label: 'Pipeline Cleaning' },
  { category: 'pickling', label: 'Pickling & Passivation' },
  { category: 'mechanical', label: 'Mechanical Cleaning' },
  { category: 'testing', label: 'Testing & Purging' },
  { category: 'chemical-cleaning', label: 'Chemical Cleaning' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        crumb="Projects"
        title="Our Projects"
        description="A selection of the cleaning and engineering work we've delivered for clients across the process industries."
      />

      <section>
        <div className="container">
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-tag${filter === f.key ? ' active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-3">
            {visible.map((p, i) => (
              <div className="card project-card" key={i}>
                <PlaceholderImg label="Project photo" />
                <div className="project-body">
                  <span className="tag-pill">{p.label}</span>
                  <h3>[Project Name]</h3>
                  <p>[Brief description of scope, equipment/system, client industry, and outcome — 1–2 sentences.]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="cta-band">
            <div>
              <h3>Have a similar project?</h3>
              <p>Let's discuss how we can support your next cleaning or maintenance requirement.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Request a Quotation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
