import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button'
import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import Heading from '../../../components/ui/Heading'
import Paragraph from '../../../components/ui/Paragraph'
import ImgPlaceholder from '../../../components/ui/ImgPlaceholder'
import PlannerCard from '../../../features/planning/PlannerCard'
import { planners } from '../../../data/planners'

const KNOWLEDGE_TYPE_BADGE = {
  article:   'bg-blue-100 text-blue-700',
  video:     'bg-red-100 text-red-700',
  explainer: 'bg-purple-100 text-purple-700',
  case:      'bg-green-100 text-green-700',
}

const knowledgeItems = [
  { typeKey: 'article',   typeLabel: 'บทความ',      category: 'การวางแผนการเงิน', title: '6 ขั้นตอนวางแผนการเงินส่วนบุคคลที่ได้ผลจริง',   meta: 'อ่าน 8 นาที' },
  { typeKey: 'video',     typeLabel: 'วิดีโอ',       category: 'การลงทุน',         title: 'ทำความรู้จักกองทุนรวม ใน 5 นาที',                 meta: 'ดู 5 นาที'  },
  { typeKey: 'explainer', typeLabel: 'อธิบาย',       category: 'ภาษี',             title: 'ภาษีเงินได้บุคคลธรรมดา เข้าใจได้ใน 3 นาที',      meta: 'อ่าน 3 นาที' },
  { typeKey: 'case',      typeLabel: 'กรณีศึกษา',   category: 'เกษียณ',           title: 'เริ่มวางแผนเกษียณตอนอายุ 35 — เป็นไปได้แค่ไหน?', meta: 'อ่าน 6 นาที' },
  { typeKey: 'article',   typeLabel: 'บทความ',      category: 'จิตวิทยาการเงิน',  title: 'ทำไมเราใช้เงินเกินงบเสมอ และจะหยุดได้อย่างไร',    meta: 'อ่าน 5 นาที' },
]

const cfpSteps = [
  { n: 1, title: 'กำหนดขอบเขตและความสัมพันธ์',  desc: 'ทำความเข้าใจความต้องการ ความคาดหวัง และขอบเขตของบริการวางแผนการเงิน' },
  { n: 2, title: 'รวบรวมข้อมูล',                  desc: 'เก็บข้อมูลเชิงปริมาณ (รายได้ ทรัพย์สิน หนี้สิน) และเชิงคุณภาพ (เป้าหมาย ความเสี่ยงที่รับได้)' },
  { n: 3, title: 'วิเคราะห์และประเมินสถานการณ์',  desc: 'วิเคราะห์ฐานะทางการเงินปัจจุบัน และประเมินช่องว่างระหว่างจุดที่อยู่กับเป้าหมาย' },
  { n: 4, title: 'จัดทำแผนการเงิน',               desc: 'พัฒนากลยุทธ์และข้อเสนอแนะที่เหมาะสมกับสถานการณ์ เพื่อช่วยให้บรรลุเป้าหมาย' },
  { n: 5, title: 'นำแผนไปปฏิบัติ',                desc: 'ดำเนินการตามแผนที่ตกลงไว้ ประสานงานกับผู้เชี่ยวชาญด้านอื่นหากจำเป็น' },
  { n: 6, title: 'ติดตามและทบทวนแผน',             desc: 'ติดตามความคืบหน้าอย่างสม่ำเสมอ และปรับแผนให้สอดคล้องกับการเปลี่ยนแปลงในชีวิต' },
]


function HappyMoneyHero() {
  // self planning CTA links to https://www.set.or.th/happymoney/app.html
  return (
    <div className="flex flex-col md:flex-row gap-10 py-6 items-center">
      <div className="flex flex-col gap-5 flex-1">
        <div>
          <Paragraph size="sm" className="font-semibold !text-brand-bright mb-2 tracking-wide">Happy Money × TFPA</Paragraph>
          <Heading level={1} className="text-4xl !text-gray-800 leading-tight">
            เริ่มวางแผน<br />การเงินของคุณ
          </Heading>
          <Paragraph size="sm" className="mt-3 leading-relaxed">
            วิเคราะห์รายรับ-รายจ่าย และเป้าหมายทางการเงินของคุณในไม่กี่นาที
          </Paragraph>
        </div>
        <Paragraph size="xs" className="!text-gray-400">ใช้ฟรี &nbsp;•&nbsp; ไม่ต้องสมัครสมาชิกทันที &nbsp;•&nbsp; ออกแบบตามมาตรฐาน CFP®</Paragraph>
        <div className="flex flex-wrap gap-3">
          <Button href="https://www.set.or.th/happymoney/app.html" target="_blank" rel="noopener noreferrer" pill>เริ่มวางแผนตอนนี้ →</Button>
          <Button to="/planning/find_planner" variant="outline" pill>ค้นหาที่ปรึกษาการเงิน</Button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-full max-w-sm shrink-0 space-y-4">
        <Paragraph size="xs" className="!text-gray-400">ตัวอย่าง — ทดลองดูผลจริงได้เลย</Paragraph>

        <div className="space-y-1">
          <Paragraph size="xs">รายได้ต่อเดือน</Paragraph>
          <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50">45,000 บาท</div>
        </div>

        <div className="space-y-2">
          <Paragraph size="xs">หมวดรายจ่าย</Paragraph>
          {[
            { name: 'ค่าที่พัก',   pct: 30, w: '70%' },
            { name: 'ค่าอาหาร',   pct: 20, w: '48%' },
            { name: 'ค่าเดินทาง', pct: 15, w: '36%' },
          ].map(row => (
            <div key={row.name} className="flex items-center gap-2 text-xs">
              <span className="w-16 text-gray-600 shrink-0">{row.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-bright rounded-full transition-all" style={{ width: row.w }} />
              </div>
              <span className="text-gray-400 w-8 text-right">{row.pct}%</span>
            </div>
          ))}
        </div>

        <div className="space-y-1">
          <Paragraph size="xs">เป้าหมายของคุณ</Paragraph>
          <div className="flex gap-2 flex-wrap">
            {['เกษียณ', 'ชำระหนี้', 'เงินสำรอง'].map((g, i) => (
              <span
                key={g}
                className={`text-xs px-3 py-1 rounded-full border ${i === 0 ? 'border-brand-bright bg-brand-bright text-white' : 'border-gray-200 text-gray-500'}`}
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-3 space-y-1.5">
          <div className="text-xs text-gray-700">💰 เงินเหลือเก็บ <strong>18%</strong> ต่อเดือน</div>
          <div className="text-xs text-gray-700">⚠️ ความเสี่ยง: <strong>ปานกลาง</strong></div>
        </div>

        <a
          href="https://www.set.or.th/happymoney/app.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs font-semibold text-brand-bright hover:underline"
        >
          ลองใช้จริง →
        </a>
      </div>
    </div>
  )
}

function KnowledgeHighlight() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Heading level={2}>ความรู้การเงินที่แนะนำ</Heading>
        <Link to="/knowledge" className="text-xs text-brand-bright hover:underline">ดูทั้งหมด →</Link>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
        {knowledgeItems.map((item, i) => (
          <a
            key={i}
            href="#"
            className="flex flex-col border border-gray-200 rounded-lg hover:border-brand-bright hover:shadow-sm transition-all shrink-0 w-64 overflow-hidden"
          >
            <ImgPlaceholder className="h-28" />
            <div className="flex flex-col gap-1.5 p-4">
              <span className={`self-start text-xs font-semibold px-2 py-0.5 rounded ${KNOWLEDGE_TYPE_BADGE[item.typeKey]}`}>
                {item.typeLabel}
              </span>
              <span className="text-xs text-brand-bright">{item.category}</span>
              <span className="text-sm font-medium text-gray-800 leading-snug">{item.title}</span>
              <span className="text-xs text-gray-400 mt-auto">{item.meta}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

function PlanningIntro() {
  const values = [
    { icon: '📊', title: 'เห็นภาพการเงินชัดเจน',    desc: 'รู้ทันทีว่าเงินไปอยู่ที่ไหน และเหลือเก็บเท่าไหร่จริงๆ' },
    { icon: '🎯', title: 'ตั้งเป้าหมายได้จริง',       desc: 'กำหนดเป้าหมายทางการเงินที่ชัดเจนและวัดผลได้' },
    { icon: '🛡️', title: 'รู้จุดเสี่ยงก่อนเกิดปัญหา', desc: 'ระบุความเสี่ยงทางการเงินและวางแผนรับมือล่วงหน้า' },
  ]

  return (
    <div className="space-y-6">
      <div className="max-w-2xl">
        <Heading level={2} className="mb-3">การวางแผนการเงินคืออะไร?</Heading>
        <Paragraph size="sm" className="text-gray-600 leading-relaxed">
          การวางแผนการเงินส่วนบุคคล คือกระบวนการจัดการเงินของคุณอย่างมีระบบ
          ตั้งแต่การเก็บข้อมูลรายรับรายจ่าย การตั้งเป้าหมายทางการเงิน
          ไปจนถึงการวางกลยุทธ์เพื่อบรรลุเป้าหมายนั้น
          โดยอ้างอิงมาตรฐานวิชาชีพ CFP® ที่ใช้ทั่วโลก
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {values.map(v => (
          <div key={v.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
            <div className="text-3xl">{v.icon}</div>
            <Paragraph size="sm" className="font-semibold text-gray-800">{v.title}</Paragraph>
            <Paragraph size="xs" className="leading-relaxed">{v.desc}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlanningSteps() {
  return (
    <div className="space-y-6">
      <div>
        <Heading level={2} className="mb-1">6 ขั้นตอนการวางแผนการเงิน</Heading>
        <Paragraph size="xs" className="!text-gray-400">ตามมาตรฐานวิชาชีพ CFP® สากล</Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cfpSteps.map(step => (
          <div key={step.n} className="flex gap-4 p-5 border border-gray-100 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-brand-bright text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
              {step.n}
            </div>
            <div className="space-y-1">
              <Paragraph size="sm" className="font-semibold text-gray-800">{step.title}</Paragraph>
              <Paragraph size="xs" className="leading-relaxed">{step.desc}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlannerRow() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <Heading level={2} className="mb-1">นักวางแผนการเงิน CFP®</Heading>
          <Paragraph size="xs" className="!text-gray-400">ผู้เชี่ยวชาญที่ผ่านการรับรองจาก TFPA พร้อมให้คำปรึกษา</Paragraph>
        </div>
        <Link to="/planning/find_planner" className="text-xs text-brand-bright hover:underline shrink-0">
          ดูทั้งหมด →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {planners.filter(p => [1, 4, 9].includes(p.id)).map(p => <PlannerCard key={p.id} p={p} />)}
      </div>

      <div className="flex justify-center pt-2">
        <Button to="/planning/find_planner" size="lg" pill>ค้นหาที่ปรึกษาการเงิน →</Button>
      </div>
    </div>
  )
}

function PlanningPage() {
  return (
    <PageLayout>
      <MainContainer>
        <HappyMoneyHero />
        <Divider />
        <KnowledgeHighlight />
        <Divider />
        <PlanningIntro />
        <Divider />
        <PlanningSteps />
        <Divider />
        <PlannerRow />
      </MainContainer>
    </PageLayout>
  )
}

export default PlanningPage
