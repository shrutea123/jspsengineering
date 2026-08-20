import PageHero from '../components/PageHero'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const FORM_ACTION = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  function handleSubmit(e) {
    // Once you've set a real Formspree (or similar) endpoint above, remove
    // this guard entirely and let the form submit normally.
    if (FORM_ACTION.includes('YOUR_FORM_ID')) {
      e.preventDefault()
      alert(
        "Contact form is not connected yet. Set up a free endpoint at https://formspree.io and paste it into FORM_ACTION in src/pages/Contact.jsx. For now, please email selvan@jspsengineering.com directly."
      )
    }
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get in Touch"
        description="Have a project or question? Reach out and our team will get back to you."
      />

      <section>
        <div className="container contact-grid">
          {/* ===== CONTACT INFO ===== */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p>We're happy to discuss your project requirements — reach us directly or send a message.</p>

            <div className="contact-line">
              <div className="icon-box"><Phone size={22} strokeWidth={1.75} /></div>
              <div>
                <strong>Phone</strong>
                <a href="tel:+6590625329">+65 9062 5329</a>
              </div>
            </div>

            <div className="contact-line">
              <div className="icon-box"><Mail size={22} strokeWidth={1.75} /></div>
              <div>
                <strong>Email</strong>
                <a href="mailto:selvan@jspsengineering.com">selvan@jspsengineering.com</a>
              </div>
            </div>

            <div className="contact-line">
              <div className="icon-box"><MapPin size={22} strokeWidth={1.75} /></div>
              <div>
                <strong>Office Address</strong>
                <span>1 Soon Lee Street, #06-01, Pioneer Centre, Singapore 627605</span>
              </div>
            </div>

            <div className="contact-line">
              <div className="icon-box"><Clock size={22} strokeWidth={1.75} /></div>
              <div>
                <strong>Operating Hours</strong>
                <div className="contact-hours">
                  <span>Mon–Fri, 8:30 AM – 5:30 PM</span>
                  <span>Sat, 8:30 AM – 12:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CONTACT FORM ===== */}
          <div className="form-card">
            <h3>Send Us a Message</h3>
            <p>Fill in the form below and we'll respond within 1–2 business days.</p>

            {/*
              TODO: Wire this form up to a form backend service — no server needed.
              Easiest option: Formspree (https://formspree.io)
                1. Sign up free, create a form, get your form endpoint
                   (looks like https://formspree.io/f/xxxxxxx)
                2. Paste it into FORM_ACTION at the top of this file
                3. Delete the FORM_ACTION.includes(...) guard in handleSubmit above
              Alternatives: Getform, Web3Forms, Basin.
            */}
            <form action={FORM_ACTION} method="POST" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="John Tan" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Your Company Pte Ltd" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+65 0000 0000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full">
                  <label htmlFor="service">Service of Interest</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="">Select a service</option>
                    <option>Industrial Chemical Cleaning</option>
                    <option>Pipeline Cleaning</option>
                    <option>Pickling & Passivation</option>
                    <option>Mechanical Cleaning</option>
                    <option>Testing & Purging</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              <p className="form-note">* Required fields. By submitting, you agree to be contacted regarding your enquiry.</p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">Find Us</span>
            <h2>Our Location</h2>
          </div>
          {/*
            TODO: Replace the query below with your real address, e.g.
            https://maps.google.com/maps?q=YOUR+ADDRESS+SINGAPORE&output=embed
          */}
          <iframe
            className="map-placeholder"
            style={{ width: '100%', border: 0, borderRadius: 10 }}
            src="https://maps.google.com/maps?q=Singapore&t=&z=12&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office location map"
          ></iframe>
        </div>
      </section>
    </>
  )
}
