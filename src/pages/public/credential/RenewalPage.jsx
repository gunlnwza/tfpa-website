import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import Heading from '../../../components/ui/Heading'
import Paragraph from '../../../components/ui/Paragraph'
import CredentialPath from '../../../features/credential/CredentialPath'
import { CredentialCTA } from '../../../features/credential/CredentialCTA'

const ethicsCards = [
  { n: '01', title: 'ยึดผลประโยชน์ลูกค้าเป็นหลัก',        desc: 'คำแนะนำต้องไม่ถูกครอบงำด้วยผลประโยชน์ส่วนตัว เป็น Fiduciary Duty ที่ผูกพันตลอดการประกอบอาชีพ' },
  { n: '02', title: 'เปิดเผยความขัดแย้งทางผลประโยชน์',      desc: 'ต้องโปร่งใสต่อข้อมูลที่อาจมีผลต่อการตัดสินใจของลูกค้าก่อนทุกครั้ง' },
  { n: '03', title: 'รักษาความลับของลูกค้า',               desc: 'ข้อมูลทางการเงินต้องได้รับการคุ้มครองอย่างเข้มงวดตลอดเวลา' },
  { n: '04', title: 'รับผิดชอบต่อมาตรฐานวิชาชีพ',          desc: 'ปฏิบัติตาม TFPA Standards of Conduct และยอมรับการตรวจสอบจากสมาคมฯ' },
]

const renewalSteps = [
  { n: 1, title: 'ตรวจสอบสิทธิ์',           tag: 'Auto Check',      desc: 'ระบบตรวจสอบชั่วโมง CPD และสถานะสมาชิกของคุณโดยอัตโนมัติ' },
  { n: 2, title: 'ยื่นคำขอต่ออายุออนไลน์',  tag: 'ระบบ TFPA',       desc: 'เข้าสู่ระบบสมาชิก TFPA และยื่นคำขอต่ออายุผ่านแบบฟอร์มออนไลน์' },
  { n: 3, title: 'ชำระค่าธรรมเนียม',         tag: 'แจ้งยอดอัตโนมัติ', desc: 'ระบบแสดงยอดค่าธรรมเนียมที่ต้องชำระ ชำระได้หลายช่องทาง' },
  { n: 4, title: 'รับการยืนยันสถานะ',        tag: 'CFP Active',      desc: 'ต่ออายุสำเร็จ → สถานะ CFP® ของคุณยังคง Active ต่อไปอีก 2-3 ปี', isSuccess: true },
]

const cpdActivities = [
  { dot: 'var(--color-brand-bright)', text: 'เข้าร่วมอบรม / seminar / workshop ที่รับรองโดย TFPA' },
  { dot: 'var(--color-brand-green)', text: 'เรียนรู้เนื้อหาทางการเงินใหม่ผ่านช่องทางที่กำหนด' },
  { dot: '#c678dd', text: 'ทบทวนจรรยาบรรณวิชาชีพประจำปี' },
]

const cpdGoals = [
  { dot: '#1a7d50', text: 'อัปเดตความรู้ให้ทันสมัยตลอดเวลา' },
  { dot: '#1a7d50', text: 'รักษามาตรฐานวิชาชีพในระดับสากล' },
  { dot: '#1a7d50', text: 'เพิ่มคุณภาพการให้คำแนะนำแก่ลูกค้า' },
]

const reminders = [
  { level: 'danger', icon: '🚨', title: 'หากไม่ต่ออายุภายในกำหนด',              desc: 'สถานะ CFP® จะหมดอายุ และต้องดำเนินการขึ้นทะเบียนใหม่ทั้งหมด' },
  { level: 'warn',   icon: '⚠️',  title: 'ต้องมี CPD ครบก่อนยื่น',               desc: 'ระบบจะตรวจสอบชั่วโมง CPD — หากไม่ครบจะไม่สามารถยื่นคำขอได้' },
  { level: 'warn',   icon: '⚠️',  title: 'ค่าธรรมเนียมต้องชำระเต็มจำนวนในครั้งเดียว', desc: 'ตามที่ระบบแจ้ง ไม่สามารถแบ่งชำระหรือเลื่อนได้' },
]

const REMINDER_STYLE = {
  danger: 'bg-red-50 border-red-100',
  warn:   'bg-amber-50 border-amber-100',
}


function Breadcrumb() {
  return <CredentialPath active={4} />
}

function Ethics() {
  return (
    <div className="space-y-6">
      <div>
        <Heading level={2} className="mb-1">จริยธรรม: รากฐานที่ยั่งยืนของวิชาชีพ</Heading>
        <Paragraph size="sm" className="leading-relaxed max-w-2xl">
          การต่ออายุไม่ใช่เพียงการต่ออายุใบรับรอง แต่คือการย้ำเตือนและยืนยันพันธะทางจริยธรรม
          ที่คุณมีต่อลูกค้าและวิชาชีพ — สิ่งนี้คือมูลค่าที่แท้จริงของคุณวุฒิ CFP®
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ethicsCards.map(c => (
          <div key={c.n} className="border border-gray-100 rounded-xl p-5 hover:border-brand-bright hover:shadow-sm transition-all">
            <Paragraph className="text-2xl !font-bold !text-brand-bright/20 mb-2">{c.n}</Paragraph>
            <Paragraph size="sm" className="font-semibold text-gray-800 mb-1">{c.title}</Paragraph>
            <Paragraph size="xs" className="leading-relaxed">{c.desc}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  )
}

function CPD() {
  return (
    <div className="space-y-8">
      <div className="space-y-5">
        <div>
          <Heading level={2} className="mb-1">CPD — การพัฒนาความรู้ต่อเนื่อง</Heading>
          <Paragraph size="xs" className="!text-gray-400">Continuing Professional Development · ต้องสะสมให้ครบก่อนยื่นต่ออายุ</Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3">
            <Paragraph size="xs" className="font-semibold">ต้องทำอะไรบ้าง</Paragraph>
            <ul className="space-y-2">
              {cpdActivities.map(a => (
                <li key={a.text} className="flex gap-2 text-xs text-gray-700">
                  <span className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ background: a.dot }} />
                  {a.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3">
            <Paragraph size="xs" className="font-semibold">เป้าหมายของ CPD</Paragraph>
            <ul className="space-y-2">
              {cpdGoals.map(g => (
                <li key={g.text} className="flex gap-2 text-xs text-gray-700">
                  <span className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ background: g.dot }} />
                  {g.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Heading level={2}>ขั้นตอนการต่ออายุ</Heading>
        <ol className="space-y-3">
          {renewalSteps.map((s, i) => (
            <li key={s.n} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-7 h-7 rounded-full bg-brand-bright text-white text-xs font-bold flex items-center justify-center shrink-0">{s.n}</div>
                {i < renewalSteps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1" />}
              </div>
              <div className="pb-3 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-gray-800 text-sm">{s.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${s.isSuccess ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-brand-bright'}`}>{s.tag}</span>
                </div>
                <Paragraph size="xs" className="leading-relaxed">{s.desc}</Paragraph>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* <div className="space-y-3">
        <Heading level={2}>เงื่อนไขสำคัญที่ต้องทราบ</Heading>
        <div className="space-y-2">
          {reminders.map((r, i) => (
            <div key={i} className={`flex gap-3 p-4 rounded-xl border ${REMINDER_STYLE[r.level]}`}>
              <span className="text-lg shrink-0 mt-0.5">{r.icon}</span>
              <div>
                <Paragraph size="sm" className="font-semibold text-gray-800">{r.title}</Paragraph>
                <Paragraph size="xs" className="leading-relaxed mt-0.5">{r.desc}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

function RenewalPage() {
  return (
    <PageLayout>
      <MainContainer>

        <Breadcrumb />
        <Divider />
        
        <Ethics />
        <Divider />
        
        <CPD />
        <Divider />
        
        <CredentialCTA
          eyebrow="พร้อมต่ออายุหรือยัง?"
          heading="รักษาสถานะ CFP® ของคุณ"
          subtitle="ตรวจสอบสถานะและดำเนินการต่ออายุได้ทันทีในระบบสมาชิก"
          primaryAction={{ label: 'เข้าสู่ระบบสมาชิกนักวางแผน', to: '/auth/login' }}
        />

      </MainContainer>
    </PageLayout>
  )
}

export default RenewalPage
