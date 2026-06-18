import { useState } from 'react'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'

function FAQItem({ item, open, onToggle }) {
  return (
    <div>
      <button type="button" onClick={onToggle} className="w-full flex justify-between items-center gap-4 py-4 text-left">
        <span className="text-sm font-medium text-gray-800">{item.q}</span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && <Paragraph size="sm" className="leading-relaxed pb-4">{item.a}</Paragraph>}
    </div>
  )
}

export default function CredentialFAQ({ items }) {
  const [open, setOpen] = useState(null)
  const toggle = i => setOpen(o => o === i ? null : i)
  return (
    <div className="space-y-4">
      <Heading level={2}>คำถามที่พบบ่อย</Heading>
      <div className="divide-y divide-gray-100">
        {items.map((item, i) => <FAQItem key={i} item={item} open={open === i} onToggle={() => toggle(i)} />)}
      </div>
    </div>
  )
}
