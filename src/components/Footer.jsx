import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

// Single source of truth for the footer — edit contact details, links, or
// the UEN once here instead of on every page.
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>JSPS Engineering & Solutions Pte. Ltd.</h4>
            <p>Industrial chemical cleaning, mechanical cleaning, pickling & passivation, hydro-testing and nitrogen purging specialists.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              {/* Projects link hidden until there are real projects — see Header.jsx */}
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#industrial-chemical-cleaning">Industrial Chemical Cleaning</Link></li>
              <li><Link to="/services#pipeline-cleaning">Pipeline Cleaning</Link></li>
              <li><Link to="/services#pickling-passivation">Pickling & Passivation</Link></li>
              <li><Link to="/services#mechanical-cleaning">Mechanical Cleaning</Link></li>
              <li><Link to="/services#testing-purging">Testing & Purging</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Phone size={15} strokeWidth={2.25} /> <a href="tel:+6590625329">9062 5329</a></li>
              <li><Mail size={15} strokeWidth={2.25} /> <a href="mailto:selvan@jspsengineering.com">selvan@jspsengineering.com</a></li>
              <li><MapPin size={15} strokeWidth={2.25} /> [Insert office address, Singapore]</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {year} JSPS Engineering & Solutions Pte. Ltd. All rights reserved.</div>
          <div>UEN: [Insert UEN Number]</div>
        </div>
      </div>
    </footer>
  )
}
