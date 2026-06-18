import { TYPE_BADGE } from '../../data/knowledge'

function KnowledgeCard({ item, className = '' }) {
  return (
    <a
      href="#"
      className={`flex flex-col border border-gray-200 rounded-lg hover:border-brand-bright hover:shadow-sm transition-all overflow-hidden ${className}`}
    >
      <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <span className={`self-start text-xs font-semibold px-2 py-0.5 rounded ${TYPE_BADGE[item.typeKey]}`}>
          {item.typeLabel}
        </span>
        <span className="text-xs font-[Athiti] text-brand-bright">{item.category}</span>
        <span className="text-sm font-medium font-[Prompt] text-gray-800 leading-snug">{item.title}</span>
        <span className="text-xs font-[Athiti] text-gray-400 mt-auto">{item.meta}</span>
      </div>
    </a>
  )
}

export default KnowledgeCard
