import { useState } from 'react'
import ImgPlaceholder from '../../components/ui/ImgPlaceholder'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'
import { TYPE_BADGE, TYPE_LABEL, highlighted } from '../../data/news'

function Dot({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-2 h-2 rounded-full transition-colors ${active ? 'bg-brand-bright' : 'bg-gray-300 hover:bg-gray-400'}`}
    />
  )
}

function ArrowButton({ onClick, dir }) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-bright hover:text-brand-bright transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        {dir === 'prev'
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />
        }
      </svg>
    </button>
  )
}

export default function NewsHighlightCarousel() {
  const [idx, setIdx] = useState(0)
  const total = highlighted.length
  const item = highlighted[idx]

  function prev() { setIdx(i => (i - 1 + total) % total) }
  function next() { setIdx(i => (i + 1) % total) }

  return (
    <div className="space-y-3">
      <Heading level={2} className="mb-4">กิจกรรมเด่น</Heading>

      <a href="#" className="flex gap-6 items-stretch hover:shadow-md transition-shadow rounded-xl overflow-hidden border border-gray-200">
        <div className="bg-white pl-4 py-6 flex flex-col justify-between gap-6 shrink-0 w-72">
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${TYPE_BADGE[item.type]}`}>
                {TYPE_LABEL[item.type]}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
            <Heading level={3} className="text-xl">{item.title}</Heading>
            <Paragraph size="sm" className="text-gray-600 leading-relaxed">{item.desc}</Paragraph>
          </div>
          <span className="text-sm font-semibold text-brand-bright text-right">ดูรายละเอียด →</span>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center">
          {item.img
            ? <img src={item.img} alt={item.title} className="h-72 w-auto rounded-lg" />
            : <ImgPlaceholder className="h-72 w-full rounded-lg" />
          }
        </div>
      </a>

      <div className="flex items-center justify-center gap-4">
        <ArrowButton onClick={prev} dir="prev" />
        <div className="flex gap-2">
          {highlighted.map((_, i) => (
            <Dot key={i} active={i === idx} onClick={() => setIdx(i)} />
          ))}
        </div>
        <ArrowButton onClick={next} dir="next" />
      </div>
    </div>
  )
}
