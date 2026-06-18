export default function OutlineCard({ className = '', children }) {
  return (
    <div className={`border border-gray-100 rounded-xl p-5 hover:border-brand-bright hover:shadow-sm transition-all ${className}`}>
      {children}
    </div>
  )
}
