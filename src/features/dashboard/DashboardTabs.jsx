import { useState } from 'react'

// Each task drives one tab. Remove an entry to hide that tab.
const PENDING_TASKS = [
  { id: 'training',       label: 'อบรม' },
  { id: 'exam',           label: 'สอบ' },
  { id: 'equivalency',    label: 'เทียบเคียง' },
  { id: 'registration',   label: 'ขึ้นทะเบียน' },
  { id: 'renewal',        label: 'ต่ออายุ' },
]

const MOCK_TRAINING = [
  { id: 1, title: 'หลักสูตร CFP Module 1: หลักการวางแผนการเงิน', date: '15 ก.ค. 2568', hours: 6, status: 'ลงทะเบียนแล้ว' },
  { id: 2, title: 'หลักสูตร CFP Module 2: การวางแผนภาษี',        date: '22 ก.ค. 2568', hours: 6, status: 'เปิดรับสมัคร' },
  { id: 3, title: 'จริยธรรมสำหรับนักวางแผนการเงิน',              date: '5 ส.ค. 2568',  hours: 3, status: 'เปิดรับสมัคร' },
]

const MOCK_EXAMS = [
  { id: 1, title: 'CFP® Exam — ครั้งที่ 2/2568', date: '20 ก.ย. 2568', location: 'กรุงเทพฯ', status: 'รับสมัครถึง 31 ก.ค.' },
  { id: 2, title: 'CFP® Exam — ครั้งที่ 3/2568', date: '15 พ.ย. 2568', location: 'กรุงเทพฯ', status: 'เร็ว ๆ นี้' },
]

const MOCK_EQUIV = [
  { id: 1, title: 'เทียบวุฒิ CFA Level III', submitted: '1 มิ.ย. 2568', status: 'อยู่ระหว่างพิจารณา' },
]

const MOCK_REGISTRATION = [
  { id: 1, title: 'ขึ้นทะเบียน CFP® ครั้งแรก', submitted: '10 มิ.ย. 2568', status: 'รอเอกสารเพิ่มเติม' },
]

const MOCK_RENEWAL = [
  { id: 1, title: 'ต่ออายุคุณวุฒิ CFP® ปี 2568', due: '31 ธ.ค. 2568', cpdStatus: 'CPD ครบแล้ว', status: 'พร้อมยื่น' },
]

const STATUS_COLORS = {
  'ลงทะเบียนแล้ว':        'bg-brand-green/10 text-brand-green',
  'เปิดรับสมัคร':          'bg-blue-50 text-brand-bright',
  'รับสมัครถึง 31 ก.ค.':  'bg-yellow-50 text-yellow-700',
  'เร็ว ๆ นี้':            'bg-gray-100 text-gray-500',
  'อยู่ระหว่างพิจารณา':   'bg-orange-50 text-orange-600',
  'รอเอกสารเพิ่มเติม':    'bg-yellow-50 text-yellow-700',
  'พร้อมยื่น':             'bg-brand-green/10 text-brand-green',
}

function StatusBadge({ status }) {
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[status] ?? 'bg-gray-100 text-gray-500'}`}>
      {status}
    </span>
  )
}

function TrainingRow({ item }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-50 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{item.date} · {item.hours} ชม.</p>
      </div>
      <StatusBadge status={item.status} />
    </div>
  )
}

function ExamRow({ item }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-50 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{item.title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{item.date} · {item.location}</p>
      </div>
      <StatusBadge status={item.status} />
    </div>
  )
}

function EquivRow({ item }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-50 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{item.title}</p>
        <p className="text-xs text-gray-400 mt-0.5">ยื่นเมื่อ {item.submitted}</p>
      </div>
      <StatusBadge status={item.status} />
    </div>
  )
}

function RegistrationRow({ item }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-50 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{item.title}</p>
        <p className="text-xs text-gray-400 mt-0.5">ยื่นเมื่อ {item.submitted}</p>
      </div>
      <StatusBadge status={item.status} />
    </div>
  )
}

function RenewalRow({ item }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-50 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{item.title}</p>
        <p className="text-xs text-gray-400 mt-0.5">ครบกำหนด {item.due} · {item.cpdStatus}</p>
      </div>
      <StatusBadge status={item.status} />
    </div>
  )
}

function TabContent({ activeId }) {
  if (activeId === 'training')     return MOCK_TRAINING.map(i => <TrainingRow key={i.id} item={i} />)
  if (activeId === 'exam')         return MOCK_EXAMS.map(i => <ExamRow key={i.id} item={i} />)
  if (activeId === 'equivalency')  return MOCK_EQUIV.map(i => <EquivRow key={i.id} item={i} />)
  if (activeId === 'registration') return MOCK_REGISTRATION.map(i => <RegistrationRow key={i.id} item={i} />)
  if (activeId === 'renewal')      return MOCK_RENEWAL.map(i => <RenewalRow key={i.id} item={i} />)
  return null
}

export default function DashboardTabs() {
  const [activeId, setActiveId] = useState(PENDING_TASKS[0]?.id)

  if (PENDING_TASKS.length === 0) return null

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-gray-100">
        {PENDING_TASKS.map(task => (
          <button
            key={task.id}
            onClick={() => setActiveId(task.id)}
            className={`px-5 py-3.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeId === task.id
                ? 'border-brand-bright text-brand-bright'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {task.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="px-6 py-2">
        <TabContent activeId={activeId} />
      </div>
    </div>
  )
}
