import { useState, useEffect } from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

function SearchBar({ title, subtitle, suggestions, chips, onQuery }) {
  const [draft, setDraft] = useState('')
  const [placeholderIdx, setPlaceholderIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPlaceholderIdx(i => (i + 1) % suggestions.length)
    }, 5000)
    return () => clearInterval(id)
  }, [suggestions])

  function commit() { onQuery(draft) }

  return (
    <div className="py-2 text-center px-6 space-y-8">
      <Heading level={1} className="mb-4">{title}</Heading>
      {subtitle && <Paragraph size="sm" className="-mt-4">{subtitle}</Paragraph>}
      <div className="flex max-w-xl mx-auto shadow-md rounded-lg overflow-hidden">
        <div className="relative flex-1">
          <input
            type="search"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && commit()}
            className="w-full px-4 py-3 text-gray-800 text-sm font-[Athiti] outline-none bg-white"
          />
          {!draft && (
            <span
              key={placeholderIdx}
              className="animate-placeholder-in absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none truncate max-w-[calc(100%-1rem)]"
            >
              {suggestions[placeholderIdx]}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={commit}
          className="bg-brand-bright text-white font-semibold px-6 py-3 text-sm hover:bg-[#3c95cd] transition-colors"
        >
          ค้นหา
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {chips.map(chip => (
          <button
            key={chip.label}
            type="button"
            onClick={() => { setDraft(chip.label); onQuery(chip.label) }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-[Athiti] text-gray-700 hover:border-brand-bright hover:text-brand-bright transition-colors"
          >
            {chip.icon && <span>{chip.icon}</span>}
            <span>{chip.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
