import { useState } from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { CredentialCTA } from '../../../features/credential/CredentialCTA'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import Heading from '../../../components/ui/Heading'
import Paragraph from '../../../components/ui/Paragraph'
import CredentialPath from '../../../features/credential/CredentialPath'
import ExamTimetable from '../../../features/credential/ExamTimetable'
import NumberBadge from '../../../features/credential/NumberBadge'
import CredentialFAQ from '../../../features/credential/CredentialFAQ'

const papers = [
  { id: 'P1', n: 1, title: 'หลักการวางแผนการเงิน',   format: 'MCQ',        hours: 3,
    desc: 'ประเมินความเข้าใจพื้นฐานด้านกรอบการวางแผนการเงิน หลักการ 6 ขั้นตอน การวิเคราะห์เป้าหมายลูกค้า และ Time Value of Money',
    topics: ['Financial Planning Process 6 ขั้นตอน', 'การวิเคราะห์ cashflow และ net worth', 'Time Value of Money (PV / FV / Annuity)', 'Client profiling และ risk assessment'],
    prep:   ['ทบทวน โมดูล 1 จากหลักสูตรอบรม', 'ฝึกคำนวณ TVM ให้คล่อง', 'อ่าน TFPA Financial Planning Standards', 'ทำข้อสอบตัวอย่างอย่างน้อย 2 ชุด'] },
  { id: 'P2', n: 2, title: 'การวางแผนการลงทุน',       format: 'Mixed',      hours: 3,
    desc: 'ประเมินความสามารถด้านการออกแบบพอร์ตโฟลิโอ การวิเคราะห์ asset allocation และการประยุกต์ใช้ทฤษฎีการลงทุน',
    topics: ['Asset allocation เชิงกลยุทธ์และยุทธวิธี', 'Modern Portfolio Theory (MPT)', 'Risk-adjusted return (Sharpe / Sortino)', 'Rebalancing และ monitoring'],
    prep:   ['ทบทวน โมดูล 2 จากหลักสูตรอบรม', 'ฝึกสร้าง model portfolio', 'ทำความเข้าใจ Efficient Frontier', 'ฝึกคำนวณ Sharpe Ratio และ Beta'] },
  { id: 'P3', n: 3, title: 'การวางแผนภาษีและประกัน',  format: 'Mixed',      hours: 3,
    desc: 'ประเมินความสามารถในการวิเคราะห์โครงสร้างภาษีและการเลือกผลิตภัณฑ์ประกันที่เหมาะสม',
    topics: ['ภาษีเงินได้บุคคลธรรมดาและการคำนวณ', 'ค่าลดหย่อนภาษี: RMF / SSF / THAIESG', 'Insurance needs analysis', 'Tax-efficient investment strategies'],
    prep:   ['ทบทวน โมดูล 3-4 จากหลักสูตรอบรม', 'ฝึกคำนวณภาษีจากโจทย์ซับซ้อน', 'ศึกษากฎหมายภาษีที่ปรับปรุงล่าสุด', 'ทำ insurance needs analysis ตัวอย่าง'] },
  { id: 'P4', n: 4, title: 'กรณีศึกษาแบบบูรณาการ',    format: 'Case Study', hours: 4,
    desc: 'กรณีศึกษาครบวงจรที่ต้องบูรณาการความรู้จากทุกโดเมน สร้างแผนการเงินที่สมบูรณ์จากโปรไฟล์ลูกค้า',
    topics: ['การวิเคราะห์สถานะการเงินแบบองค์รวม', 'การจัดลำดับความสำคัญเป้าหมาย', 'Multi-domain recommendation', 'การนำเสนอแผนและการสื่อสาร'],
    prep:   ['ทบทวน โมดูล 5 และ Capstone case', 'ฝึกเขียนแผนการเงินครบทุกโดเมน', 'ฝึก time management ในการทำข้อสอบ', 'อ่าน sample financial plans ที่ผ่านการรับรอง'] },
  { id: 'P5', n: 5, title: 'จริยธรรมและมาตรฐานวิชาชีพ', format: 'Ethics',   hours: 2,
    desc: 'ประเมินความเข้าใจหลักจริยธรรมวิชาชีพ CFP การตัดสินใจในสถานการณ์ที่มีความขัดแย้งทางผลประโยชน์',
    topics: ['CFP Code of Ethics 4 หลักการ', 'Standards of Professional Conduct', 'Fiduciary Duty และ Suitability', 'Conflict of Interest — identification & disclosure'],
    prep:   ['ทบทวน โมดูล 6 จากหลักสูตรอบรม', 'อ่าน TFPA Code of Ethics ฉบับเต็ม', 'วิเคราะห์กรณีศึกษาทางจริยธรรม', 'ทบทวนข้อกำหนดด้านการเปิดเผยข้อมูล'] },
]


const faqItems = [
  { q: 'ต้องสอบทีเดียวทั้ง 5 Papers หรือไม่?',       a: 'ไม่ สามารถสอบทีละ Paper ได้ตามรอบที่เปิด โดยต้องผ่านครบ 5 Papers ก่อนขึ้นทะเบียน' },
  { q: 'Paper ที่ตกสามารถสอบซ่อมได้หรือไม่?',         a: 'ได้ สามารถสอบซ่อม Paper ที่ยังไม่ผ่านในรอบสอบถัดไปโดยไม่ต้องเริ่มใหม่ทั้งหมด' },
  { q: 'มีค่าธรรมเนียมสมัครสอบเท่าไหร่?',            a: 'ตามประกาศอัตราค่าธรรมเนียมของสมาคมฯ ประจำปี ซึ่งอาจแตกต่างกันตาม Paper และรอบสอบ' },
  { q: 'ต้องผ่านทุก Paper ก่อนขึ้นทะเบียนหรือไม่?', a: 'ใช่ ต้องผ่านครบ 5 Papers รวมถึง Paper 5 (จริยธรรม) ซึ่งถือเป็นเงื่อนไขบังคับ' },
]

function ExamRow({ p, open, onToggle }) {
  const isOpen = open === p.id
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${isOpen ? 'border-brand-bright shadow-sm' : 'border-gray-100'}`}>
      <button type="button" onClick={() => onToggle(p.id)} className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors">
        <NumberBadge label="Paper" n={p.n} />
        <div className="flex-1 min-w-0">
          <Paragraph size="sm" className="font-semibold text-gray-800">{p.title}</Paragraph>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-gray-400">{p.format}</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">{p.hours} ชั่วโมง</span>
          </div>
        </div>
        <svg className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 border-t border-gray-100 space-y-4">
          <Paragraph size="sm" className="text-gray-600 leading-relaxed">{p.desc}</Paragraph>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Paragraph size="xs" className="font-semibold mb-2">หัวข้อที่ออกสอบ</Paragraph>
              <div className="flex flex-col gap-1">
                {p.topics.map(t => <span key={t} className="text-xs text-gray-600 flex gap-1.5"><span className="text-brand-bright shrink-0">•</span>{t}</span>)}
              </div>
            </div>
            <div>
              <Paragraph size="xs" className="font-semibold mb-2">แนวทางการเตรียมตัว</Paragraph>
              <div className="flex flex-col gap-1">
                {p.prep.map(t => <span key={t} className="text-xs text-gray-600 flex gap-1.5"><span className="text-brand-green shrink-0">✓</span>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Exams() {
  const [open, setOpen] = useState(null)
  const toggle = id => setOpen(o => o === id ? null : id)
  return (
    <div className="space-y-4">
      <div>
        <Heading level={2} className="mb-1">5 ชุดข้อสอบ CFP®</Heading>
        <Paragraph size="xs" className="!text-gray-400">วัดความรู้และทักษะตามโดเมนวิชาชีพ — ต้องผ่านครบทุก Paper</Paragraph>
      </div>
      <div className="space-y-2">
        {papers.map(p => <ExamRow key={p.id} p={p} open={open} onToggle={toggle} />)}
      </div>
    </div>
  )
}



function ExamPage() {
  return (
    <PageLayout>
      <MainContainer>

        <CredentialPath active={2} />
        <Divider />

        <Exams />
        <Divider />
        
        <ExamTimetable />
        <Divider />
        
        <CredentialFAQ items={faqItems} />
        <Divider />
        
        <CredentialCTA
          heading="พร้อมสมัครสอบหรือยัง?"
          subtitle="ตรวจสอบคุณสมบัติและลงทะเบียนสอบในรอบที่เหมาะกับคุณ"
          primaryAction={{ label: 'เข้าสู่ระบบสมาชิกนักวางแผน', to: '/auth/login' }}
        />

      </MainContainer>
    </PageLayout>
  )
}

export default ExamPage
