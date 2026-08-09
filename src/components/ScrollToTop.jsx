import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't manage scroll position on navigation by default:
// - Without this, going from the bottom of a long page to a new page leaves
//   you scrolled down instead of at the top.
// - A link with a #hash (e.g. the footer's service links to
//   /services#pickling-passivation) doesn't auto-scroll to that element,
//   and if you're already on /services, only the hash changes — the
//   pathname doesn't — so effects that only watch pathname never fire.
//   Watching `hash` as well fixes that case.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // Give the route's content a moment to render before we look for the
    // target element (matters most on first navigation to a new page).
    const id = hash.slice(1)
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
