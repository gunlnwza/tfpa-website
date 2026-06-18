import { useState } from 'react'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'

// row shape: { id, period, range, name, chips[], details[{label,value,highlight?}], status, statusLabel }

const STATUS_STYLE = {
  closed: 'bg-gray-100 text-gray-500',
  open:   'bg-green-50 text-green-700',
  soon:   'bg-blue-50 text-brand-bright',
}

function TimetableRow({ row, open, onToggle }) {
  const isOpen = open === row.id
  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(row.id)}
        className={`w-full flex items-center gap-4 p-4 border rounded-xl text-left transition-all ${isOpen ? 'border-brand-bright bg-blue-50/30' : 'border-gray-100 hover:border-gray-200'}`}
      >
        <div className="min-w-28 shrink-0">
          <Paragraph size="xs" className="!text-gray-400">{row.period}</Paragraph>
          <Paragraph size="sm" className="font-semibold text-gray-700">{row.range}</Paragraph>
        </div>
        <div className="flex-1 min-w-0">
          <Paragraph size="sm" className="text-gray-800">{row.name}</Paragraph>
          <Paragraph size="xs" className="!text-gray-400 mt-0.5">{row.chips.join(' · ')}</Paragraph>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${STATUS_STYLE[row.status]}`}>{row.statusLabel}</span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {isOpen && (
        <div className="border border-t-0 border-brand-bright rounded-b-xl px-4 py-3 bg-white space-y-2">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {row.chips.map(c => <span key={c} className="text-xs bg-blue-50 text-brand-bright px-2 py-0.5 rounded-full">{c}</span>)}
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
            {row.details.map(d => (
              <div key={d.label}>
                <span className="text-gray-400">{d.label}: </span>
                <span className={d.highlight ? 'font-semibold text-green-700' : 'text-gray-700'}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function CredentialTimetable({ heading, subtitle, rows }) {
  const [open, setOpen] = useState(null)
  const toggle = id => setOpen(o => o === id ? null : id)
  return (
    <div className="space-y-4">
      <div>
        <Heading level={2} className="mb-1">{heading}</Heading>
        {subtitle && <Paragraph size="xs" className="!text-gray-400">{subtitle}</Paragraph>}
      </div>
      <div className="space-y-2">
        {rows.map(row => <TimetableRow key={row.id} row={row} open={open} onToggle={toggle} />)}
      </div>
    </div>
  )
}
