// Reusable placeholder block for images you haven't added yet.
// Once you have a real photo, just swap the call site for a plain <img>.
export default function PlaceholderImg({ label = 'Image placeholder', style, className = '' }) {
  return (
    <div className={`placeholder-img ${className}`} style={style}>
      [ {label} ]
    </div>
  )
}
