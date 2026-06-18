import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import Heading from '../../../components/ui/Heading'
import Paragraph from '../../../components/ui/Paragraph'
import CredentialPath from '../../../features/credential/CredentialPath'
import { CredentialCTA } from '../../../features/credential/CredentialCTA'
import OutlineCard from '../../../components/ui/OutlineCard'

const benefitItems = [
  { icon: '🔍', title: 'ค้นหาลูกค้าได้ง่ายขึ้น',         desc: 'ชื่อของคุณจะปรากฏในทำเนียบนักวางแผนการเงิน CFP® ที่ประชาชนทั่วไปสามารถค้นหาเพื่อติดต่อขอคำปรึกษาได้' },
  { icon: '🤝', title: 'เชื่อมต่อกับเครือข่ายวิชาชีพ',    desc: 'เป็นส่วนหนึ่งของชุมชนนักวางแผนการเงิน CFP® กว่า 2,000 คนทั่วประเทศ แลกเปลี่ยนประสบการณ์และเติบโตในวิชาชีพ' },
  { icon: '🎁', title: 'สิทธิประโยชน์สมาชิก',             desc: 'รับส่วนลดค่าลงทะเบียนสัมมนา ค่าบริการ CPD และสิทธิ์พิเศษจากพาร์ตเนอร์ของ TFPA ตลอดปี' },
]

const requirements = [
  { icon: '🪪', title: 'Identity & Eligibility', sub: 'เอกสารยืนยันตัวตน',
    items: ['บัตรประชาชน', 'หลักฐานการสอบผ่านครบ 5 Papers', 'Transcript (ถ้ามีการตรวจสอบเพิ่ม)'] },
  { icon: '📄', title: 'Application Form', sub: 'แบบฟอร์มคำขอขึ้นทะเบียน',
    items: ['CER 01 (CFP)', 'CER 02 (AFPT หากเกี่ยวข้อง)'] },
  { icon: '💳', title: 'Payment', sub: 'หลักฐานการชำระเงิน',
    items: ['หลักฐานการชำระค่าธรรมเนียม (~8,025 บาท)'] },
]

const regSteps = [
  { n: 1, title: 'Login ระบบสมาชิก',                tag: 'ระบบ TFPA',       desc: 'เข้าสู่ระบบด้วยบัญชีสมาชิก TFPA ของคุณ' },
  { n: 2, title: 'ยื่นคำขอออนไลน์',                 tag: 'เลือกประเภท',     desc: 'เลือกประเภท CFP หรือ AFPT และกรอกข้อมูลในแบบฟอร์ม CER 01 / CER 02' },
  { n: 3, title: 'อัปโหลดเอกสาร + ชำระเงิน',        tag: 'ตรวจสอบความครบ',  desc: 'แนบเอกสารที่กำหนดและชำระค่าธรรมเนียม ระบบตรวจสอบความครบถ้วนอัตโนมัติ' },
  { n: 4, title: 'รอผลอนุมัติ',                     tag: 'ผลทุกเดือนมีนาคม', desc: 'สมาคมฯ พิจารณาและแจ้งผลตามรอบประกาศ เมื่ออนุมัติ คุณจะเข้าสู่สถานะ CFP® อย่างเป็นทางการ' },
]


function Benefits() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <div>
          <Heading level={2} className="mb-1">ประโยชน์ที่ได้รับจากสถานะ CFP®</Heading>
          <Paragraph size="sm" className="leading-relaxed max-w-2xl">
            การขึ้นทะเบียนคือการยืนยันสถานะวิชาชีพอย่างเป็นทางการ — เปิดประตูสู่โอกาสและสิทธิประโยชน์ที่ผู้ถือคุณวุฒิพึงได้รับ
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {benefitItems.map(b => (
            <OutlineCard key={b.title} className="space-y-2">
              <div className="text-3xl">{b.icon}</div>
              <Paragraph size="sm" className="font-semibold text-gray-800">{b.title}</Paragraph>
              <Paragraph size="xs" className="leading-relaxed">{b.desc}</Paragraph>
            </OutlineCard>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Heading level={2}>เอกสารที่ต้องเตรียม</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {requirements.map(r => (
            <OutlineCard key={r.title} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{r.icon}</span>
                <div>
                  <Paragraph size="sm" className="font-semibold text-gray-800">{r.title}</Paragraph>
                  <Paragraph size="xs" className="!text-gray-400">{r.sub}</Paragraph>
                </div>
              </div>
              <ul className="space-y-1">
                {r.items.map(item => (
                  <li key={item} className="text-xs text-gray-600 flex gap-1.5">
                    <span className="text-brand-bright shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            </OutlineCard>
          ))}
        </div>
      </div>

      {/* <div className="space-y-2">
        <Heading level={2}>ค่าธรรมเนียม</Heading>
        <div className="border border-gray-100 rounded-xl overflow-hidden max-w-sm">
          <div className="bg-brand-bright px-4 py-2">
            <span className="text-xs font-semibold text-white">CFP Registration Fee</span>
          </div>
          <div className="divide-y divide-gray-100">
            {[['ค่าคำขอ', '535 บาท'], ['ค่าขึ้นทะเบียน + สมาชิก', '7,490 บาท']].map(([label, val]) => (
              <div key={label} className="flex justify-between px-4 py-2.5 text-sm">
                <span className="text-gray-600">{label}</span>
                <span className="text-gray-700 font-medium">{val}</span>
              </div>
            ))}
            <div className="flex justify-between px-4 py-2.5 bg-gray-50">
              <span className="text-sm font-semibold text-gray-800">รวมทั้งหมด</span>
              <span className="text-sm font-bold text-brand-bright">~8,025 บาท</span>
            </div>
          </div>
        </div>
        <Paragraph size="xs" className="!text-amber-600 flex gap-1.5 items-start mt-2">
          <span className="shrink-0 mt-0.5">⚠</span>ค่าธรรมเนียมไม่สามารถขอคืนได้ในทุกกรณี
        </Paragraph>
      </div> */}

      <div className="space-y-4">
        <Heading level={2}>ขั้นตอนการขึ้นทะเบียน</Heading>
        <ol className="space-y-3">
          {regSteps.map((s, i) => (
            <li key={s.n} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-7 h-7 rounded-full bg-brand-bright text-white text-xs font-bold flex items-center justify-center shrink-0">{s.n}</div>
                {i < regSteps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1" />}
              </div>
              <div className={`pb-3 flex-1 ${i < regSteps.length - 1 ? '' : ''}`}>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-gray-800 text-sm">{s.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${s.n === 4 ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-brand-bright'}`}>{s.tag}</span>
                </div>
                <Paragraph size="xs" className="leading-relaxed">{s.desc}</Paragraph>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function ValidatePage() {
  return (
    <PageLayout>
      <MainContainer>
        
        <CredentialPath active={3} />
        <Divider />
        
        <Benefits />
        <Divider />

        <CredentialCTA
          eyebrow="เมื่อคุณพร้อมแล้ว"
          heading="เริ่มขึ้นทะเบียน CFP® วันนี้"
          subtitle="ยืนยันสถานะวิชาชีพอย่างเป็นทางการผ่านระบบสมาชิก TFPA"
          primaryAction={{ label: 'เข้าสู่ระบบสมาชิกนักวางแผน', to: '/auth/login' }}
        />

      </MainContainer>
    </PageLayout>
  )
}

export default ValidatePage
