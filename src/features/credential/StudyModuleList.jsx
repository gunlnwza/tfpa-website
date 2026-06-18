import { useState } from 'react'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'
import NumberBadge from './NumberBadge'

const modules = [
  {
    id: 'M1',
    n: 1,

    tag: 'Core',
    level: 'เริ่มต้น',
    hours: 30,
    title: 'พื้นฐานการวางแผนการเงิน ภาษี และจรรยาบรรณ',
    desc: 'กระบวนการวางแผนการเงิน หลักจรรยาบรรณวิชาชีพ และภาษีเงินได้บุคคลธรรมดา',
    topics: ['กระบวนการวางแผนการเงิน', 'จรรยาบรรณและมาตรฐานวิชาชีพ', 'Time Value of Money', 'ภาษีเงินได้บุคคลธรรมดา'],
    assess: 'ข้อสอบปรนัย + อัตนัย',
  },
  {
    id: 'M2',
    n: 2,

    tag: 'Core',
    level: 'ปานกลาง',
    hours: 22,
    title: 'การวางแผนการลงทุน',
    desc: 'ทฤษฎีพอร์ตโฟลิโอ การจัดสรรสินทรัพย์ และการวิเคราะห์หลักทรัพย์',
    topics: ['Asset Allocation', 'ความเสี่ยงและผลตอบแทน', 'Portfolio Theory', 'Securities Analysis'],
    assess: 'ข้อสอบปรนัย + อัตนัย',
  },
  {
    id: 'M3',
    n: 3,

    tag: 'Core',
    level: 'ปานกลาง',
    hours: 22,
    title: 'การวางแผนการประกันภัย',
    desc: 'การบริหารความเสี่ยงส่วนบุคคล ประกันชีวิต ประกันสุขภาพ และประกันทรัพย์สิน',
    topics: ['ประกันชีวิต', 'ประกันสุขภาพ', 'ประกันทรัพย์สิน', 'Risk Management'],
    assess: 'ข้อสอบปรนัย + อัตนัย',
  },
  {
    id: 'M4',
    n: 4,

    tag: 'Core',
    level: 'ปานกลาง',
    hours: 22,
    title: 'การวางแผนเพื่อวัยเกษียณ',
    desc: 'กองทุนบำเหน็จบำนาญ ประกันสังคม RMF/SSF และการวางแผนรายได้หลังเกษียณ',
    topics: ['เงินออมเพื่อเกษียณ', 'กองทุนบำเหน็จบำนาญ', 'RMF / SSF', 'ประกันสังคม'],
    assess: 'ข้อสอบปรนัย + อัตนัย',
  },
  {
    id: 'M5',
    n: 5,

    tag: 'Core',
    level: 'ขั้นสูง',
    hours: 22,
    title: 'การวางแผนภาษีและมรดก',
    desc: 'การวางแผนภาษีขั้นสูง การโอนทรัพย์สิน พินัยกรรม และกองทรัสต์',
    topics: ['ภาษีมรดก', 'กองทรัสต์', 'พินัยกรรม', 'การโอนทรัพย์สิน'],
    assess: 'ข้อสอบปรนัย + อัตนัย',
  },
  {
    id: 'M6',
    n: 6,

    tag: 'Capstone',
    level: 'ขั้นสูง',
    hours: 17,
    title: 'การจัดทำแผนการเงิน',
    desc: 'บูรณาการความรู้ทั้งหมดเพื่อจัดทำแผนการเงินฉบับสมบูรณ์และนำเสนอต่อลูกค้า',
    topics: ['Case Analysis', 'Financial Plan Writing', 'Client Presentation', 'Plan Integration'],
    assess: 'แผนการเงินจริง + การนำเสนอ',
  },
]

function ModuleRow({ m, open, onToggle }) {
  const isOpen = open === m.id
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${isOpen ? 'border-brand-bright shadow-sm' : 'border-gray-100'}`}>
      <button
        type="button"
        onClick={() => onToggle(m.id)}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <NumberBadge label="Module" n={m.n} />
        <div className="flex-1 min-w-0">
          <Paragraph size="sm" className="font-semibold text-gray-800">{m.title}</Paragraph>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-gray-400">{m.tag}</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">{m.hours} ชั่วโมง</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">{m.level}</span>
          </div>
        </div>
        <svg className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 border-t border-gray-100 space-y-3">
          <Paragraph size="sm" className="text-gray-600 leading-relaxed">{m.desc}</Paragraph>
          <div className="flex flex-wrap gap-1.5">
            {m.topics.map(t => <span key={t} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100">{t}</span>)}
          </div>
          <Paragraph size="xs" className="!text-gray-400">การประเมิน: {m.assess}</Paragraph>
        </div>
      )}
    </div>
  )
}

export default function StudyModuleList() {
  const [open, setOpen] = useState(null)
  const toggle = id => setOpen(o => o === id ? null : id)
  return (
    <div className="space-y-4">
      <div>
        <Heading level={2} className="mb-1">6 โมดูลหลักสูตร</Heading>
        <Paragraph size="xs" className="!text-gray-400">ระยะเวลาโดยประมาณ 6 เดือน · 135 ชั่วโมง</Paragraph>
      </div>
      <div className="space-y-2">
        {modules.map(m => <ModuleRow key={m.id} m={m} open={open} onToggle={toggle} />)}
      </div>
    </div>
  )
}
