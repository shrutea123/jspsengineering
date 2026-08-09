import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  // Projects tab hidden until there are real projects to show — the page
  // (src/pages/Projects.jsx) and its route are still there, just unlinked.
  // Re-add once ready: { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

// Single source of truth for the top nav — edit links, phone number, or the
// "Get a Quote" CTA here once, instead of in every page.
export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`site-header${open ? ' open' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">JSPS</span>
          <span className="brand-text">
            JSPS Engineering & Solutions
            <br />
            <small>PTE. LTD.</small>
          </span>
        </Link>

        <nav>
          <ul className="nav-tabs">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="tel:+6590625329" className="nav-phone">
            <Phone size={16} strokeWidth={2.25} /> +65 90625329
          </a>
          <Link to="/contact" className="btn btn-outline-dark">Get a Quote</Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
