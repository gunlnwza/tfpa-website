import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageLayout from '../../../components/layout/PageLayout'

import intro         from '../../member/docs/intro.md?raw'
import account       from '../../member/docs/account.md?raw'
import profile       from '../../member/docs/profile.md?raw'
import password      from '../../member/docs/password.md?raw'
import notification  from '../../member/docs/notification.md?raw'
import faq           from '../../member/docs/faq.md?raw'
import cpd           from '../../member/docs/cpd.md?raw'
import cpdSubmit     from '../../member/docs/cpd-submit.md?raw'
import cpdHistory    from '../../member/docs/cpd-history.md?raw'
import renewal       from '../../member/docs/renewal.md?raw'
import renewalStatus from '../../member/docs/renewal-status.md?raw'
import payment       from '../../member/docs/payment.md?raw'
import pathway       from '../../member/docs/pathway.md?raw'
import education     from '../../member/docs/education.md?raw'
import exam          from '../../member/docs/exam.md?raw'
import examSchedule  from '../../member/docs/exam-schedule.md?raw'
import examResult    from '../../member/docs/exam-result.md?raw'
import certification from '../../member/docs/certification.md?raw'
import ethics        from '../../member/docs/ethics.md?raw'
import standard      from '../../member/docs/standard.md?raw'
import disciplinary  from '../../member/docs/disciplinary.md?raw'
import code          from '../../member/docs/code.md?raw'
import download      from '../../member/docs/download.md?raw'
import forms         from '../../member/docs/forms.md?raw'
import policy        from '../../member/docs/policy.md?raw'
import contact       from '../../member/docs/contact.md?raw'
import support       from '../../member/docs/support.md?raw'
import faqGeneral    from '../../member/docs/faq-general.md?raw'

const sections = [
  {
    label: 'เริ่มต้นใช้งาน',
    items: [
      { id: 'intro', title: 'แนะนำระบบ' },
      { id: 'account', title: 'การจัดการบัญชี' },
      { id: 'profile', title: 'แก้ไขข้อมูลส่วนตัว' },
      { id: 'password', title: 'เปลี่ยนรหัสผ่าน' },
      { id: 'notification', title: 'การแจ้งเตือน' },
      { id: 'faq', title: 'คำถามที่พบบ่อย' },
    ],
  },
  {
    label: 'CPD & การต่ออายุ',
    items: [
      { id: 'cpd', title: 'การสะสมชั่วโมง CPD' },
      { id: 'cpdSubmit', title: 'การส่งหลักฐาน CPD' },
      { id: 'cpdHistory', title: 'ประวัติการสะสม CPD' },
      { id: 'renewal', title: 'ขั้นตอนการต่ออายุ' },
      { id: 'renewalStatus', title: 'ติดตามสถานะคำขอ' },
      { id: 'payment', title: 'การชำระค่าธรรมเนียม' },
    ],
  },
  {
    label: 'คุณวุฒิ CFP',
    items: [
      { id: 'pathway', title: 'เส้นทางสู่ CFP' },
      { id: 'education', title: 'การอบรม CFP' },
      { id: 'exam', title: 'การสอบ CFP' },
      { id: 'examSchedule', title: 'ตารางสอบ CFP' },
      { id: 'examResult', title: 'ผลสอบ CFP' },
      { id: 'certification', title: 'การขอรับคุณวุฒิ CFP' },
    ],
  },
  {
    label: 'ข้อมูลวิชาชีพ',
    items: [
      { id: 'ethics', title: 'จรรยาบรรณวิชาชีพ' },
      { id: 'standard', title: 'มาตรฐานการปฏิบัติงาน' },
      { id: 'disciplinary', title: 'กระบวนการพิจารณาทางจรรยาบรรณ' },
      { id: 'code', title: 'Code of Ethics' },
    ],
  },
  {
    label: 'เอกสารและแบบฟอร์ม',
    items: [
      { id: 'download', title: 'ดาวน์โหลดเอกสาร' },
      { id: 'forms', title: 'แบบฟอร์มต่าง ๆ' },
      { id: 'policy', title: 'นโยบายและข้อกำหนด' },
    ],
  },
  {
    label: 'ช่วยเหลือ',
    items: [
      { id: 'contact', title: 'ติดต่อ TFPA' },
      { id: 'support', title: 'แจ้งปัญหาการใช้งาน' },
      { id: 'faqGeneral', title: 'คำถามที่พบบ่อย' },
    ],
  },
]

const MOCK_CONTENT = {
  intro, account, profile, password, notification, faq,
  cpd, cpdSubmit, cpdHistory, renewal, renewalStatus, payment,
  pathway, education, exam, examSchedule, examResult, certification,
  ethics, standard, disciplinary, code,
  download, forms, policy,
  contact, support, faqGeneral,
}

const allItems = sections.flatMap(s => s.items.map(item => ({ ...item, group: s.label })))

function SidebarItem({ item, activeId, onSelect }) {
  return (
    <li>
      <button
        onClick={() => onSelect(item.id)}
        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
          activeId === item.id
            ? 'bg-brand-bright/10 text-brand-bright font-medium'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`}
      >
        {item.title}
      </button>
    </li>
  )
}

function SidebarGroup({ group, activeId, onSelect }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">{group.label}</p>
      <ul>
        {group.items.map(item => (
          <SidebarItem key={item.id} item={item} activeId={activeId} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  )
}

function SearchResults({ results, activeId, onSelect }) {
  if (results.length === 0) {
    return <p className="px-3 py-2 text-sm text-gray-400">ไม่พบผลลัพธ์</p>
  }
  return (
    <ul>
      {results.map(item => (
        <li key={item.id}>
          <button
            onClick={() => onSelect(item.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              activeId === item.id
                ? 'bg-brand-bright/10 text-brand-bright font-medium'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <span className="block">{item.title}</span>
            <span className="block text-xs text-gray-400">{item.group}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

function MarkdownContent({ content }) {
  return (
    <div className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

export default function PlannerGuidePage() {
  const [activeId, setActiveId] = useState('intro')
  const [query, setQuery] = useState('')

  const isSearching = query.trim().length > 0
  const searchResults = isSearching
    ? allItems.filter(item => {
        const q = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(q) ||
          (MOCK_CONTENT[item.id] ?? '').toLowerCase().includes(q)
        )
      })
    : []

  function handleSelect(id) {
    setActiveId(id)
    setQuery('')
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-8 items-start">

        {/* Sidebar */}
        <aside className="w-56 shrink-0 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="mb-4 px-1">
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="ค้นหา..."
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright"
            />
          </div>

          {isSearching ? (
            <SearchResults results={searchResults} activeId={activeId} onSelect={handleSelect} />
          ) : (
            <>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">คู่มือ</p>
              {sections.map(group => (
                <SidebarGroup key={group.label} group={group} activeId={activeId} onSelect={handleSelect} />
              ))}
            </>
          )}
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 bg-white border border-gray-100 rounded-2xl p-8">
          <MarkdownContent content={MOCK_CONTENT[activeId] ?? ''} />
        </main>

      </div>
    </PageLayout>
  )
}
