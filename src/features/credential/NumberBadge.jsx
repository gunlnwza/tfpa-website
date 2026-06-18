export default function NumberBadge({ label, n }) {
  return (
    <div className="w-12 h-12 rounded-lg flex flex-col items-center justify-center shrink-0 text-[10px] font-bold bg-brand-bright/10 text-brand-bright">
      <span>{label}</span>
      <span className="text-base leading-none">{n}</span>
    </div>
  )
}
