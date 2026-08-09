import { Link } from 'react-router-dom'

// Compact hero banner used at the top of every inner page (About, Services,
// Projects, Contact). The homepage uses its own larger hero instead.
export default function PageHero({ crumb, title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link> / {crumb}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}
