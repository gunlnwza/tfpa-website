import ImgPlaceholder from './ImgPlaceholder'
import { TYPE_BADGE, TYPE_LABEL } from '../../data/news'

function NewsCard({ item, className = '' }) {
  return (
    <a
      href="#"
      className={`flex flex-col border border-gray-200 rounded-lg hover:border-brand-bright hover:shadow-sm transition-all overflow-hidden ${className}`}
    >
      {item.img
        ? <img src={item.img} alt={item.title} className="h-36 w-full object-cover" />
        : <ImgPlaceholder className="h-36" />
      }
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${TYPE_BADGE[item.type]}`}>
            {TYPE_LABEL[item.type]}
          </span>
          <span className="text-xs font-[Athiti] text-gray-400">{item.date}</span>
        </div>
        <span className="text-sm font-medium font-[Prompt] text-gray-800 leading-snug">{item.title}</span>
        <span className="text-xs font-[Athiti] text-gray-500 line-clamp-2">{item.desc}</span>
      </div>
    </a>
  )
}

export default NewsCard
