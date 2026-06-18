import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import Heading from '../../../components/ui/Heading'
import Paragraph from '../../../components/ui/Paragraph'
import CredentialPath from '../../../features/credential/CredentialPath'
import { CredentialCTA } from '../../../features/credential/CredentialCTA'
import OutlineCard from '../../../components/ui/OutlineCard'
import cfpImg from '../../../assets/tfpa/cfp.png'
import afptImg from '../../../assets/tfpa/afpt.jpg'
import { Link } from 'react-router-dom'

const pathwaySteps = [
  { n: 1, label: 'อบรม',        tag: '6 โมดูล',    desc: 'เรียนรู้หลักการวางแผนการเงินและมาตรฐานวิชาชีพ ผ่าน 6 โมดูล 135 ชั่วโมง',       to: '/credential/study'    },
  { n: 2, label: 'สอบ',         tag: '5 ชุดข้อสอบ', desc: 'วัดความเข้าใจเชิงลึกและการประยุกต์ใช้ผ่านข้อสอบ 5 Papers',              to: '/credential/exam'     },
  { n: 3, label: 'ขึ้นทะเบียน', tag: 'คุณวุฒิ',   desc: 'ได้รับการรับรองเป็นผู้วางแผนการเงิน CFP® ภายใต้มาตรฐานวิชาชีพ',           to: '/credential/validate' },
  { n: 4, label: 'ต่ออายุ',     tag: 'CPD ต่อเนื่อง',   desc: 'พัฒนาความรู้อย่างต่อเนื่องและรักษามาตรฐานจริยธรรมทุก 2-3 ปี',           to: '/credential/renewal'  },
]

const ethicsCards = [
  { n: '01', title: 'ยึดผลประโยชน์ลูกค้าเป็นหลัก',        desc: 'คำแนะนำต้องไม่ถูกครอบงำด้วยผลประโยชน์ส่วนตัว' },
  { n: '02', title: 'เปิดเผยความขัดแย้งทางผลประโยชน์',      desc: 'ต้องโปร่งใสต่อข้อมูลที่อาจมีผลต่อการตัดสินใจลูกค้า' },
  { n: '03', title: 'รักษาความลับของลูกค้า',               desc: 'ข้อมูลทางการเงินต้องได้รับการคุ้มครองอย่างเข้มงวด' },
  { n: '04', title: 'ระบบกำกับและบทลงโทษ',                desc: 'มีมาตรฐานตรวจสอบและบทลงโทษทางวิชาชีพ' },
]

const orgs = ['ธนาคารกสิกรไทย', 'ธนาคารไทยพาณิชย์', 'กรุงเทพประกันชีวิต', 'MFC Asset Management', 'บล.เกียรตินาคินภัทร', 'บลจ.กรุงไทย']

const testimonials = [
  { quote: '"เรามองว่าผู้ที่มีคุณวุฒิ CFP มีมาตรฐานการให้คำแนะนำที่ชัดเจน และยึดลูกค้าเป็นศูนย์กลาง"',   name: 'ฝ่ายพัฒนาบุคลากร',        org: 'สถาบันการเงินชั้นนำ' },
  { quote: '"ช่วยยกระดับความน่าเชื่อถือของทีมที่ปรึกษาทางการเงินของเราอย่างมาก"',                         name: 'ผู้อำนวยการสายธุรกิจ Wealth', org: 'บริษัทจัดการกองทุน' },
  { quote: '"ทำให้กระบวนการวางแผนการเงินมีโครงสร้างและโปร่งใสมากขึ้น"',                                   name: 'Head of Financial Advisory',  org: 'บริษัทหลักทรัพย์ชั้นนำ' },
]

function CredentialHero() {
  return (
    <div className="flex items-center gap-8">
      {/* left */}
      <div className="flex-1 space-y-5">
        <Paragraph size="sm" className="font-semibold !text-brand-bright tracking-wide">Certified Financial Planner</Paragraph>
        <div>
          <Heading level={1} className="text-4xl !text-gray-800 leading-tight">
            คุณวุฒิวิชาชีพ<br />นักวางแผนการเงิน
          </Heading>
          <Paragraph size="sm" className="mt-3 leading-relaxed max-w-xl">
            มาตรฐานสากลสำหรับผู้เชี่ยวชาญด้านการวางแผนการเงินที่ยึดลูกค้าเป็นศูนย์กลาง
          </Paragraph>
        </div>
        <div className="flex flex-wrap gap-2">
          {['มาตรฐานสากล', 'เน้นจริยธรรมวิชาชีพ', 'ประสบการณ์ทำงานจริง'].map(c => (
            <span key={c} className="text-xs px-3 py-1 rounded-full border border-brand-bright text-brand-bright">{c}</span>
          ))}
        </div>
      </div>

      {/* badges */}
      <div className="flex items-center gap-4 shrink-0 -translate-x-5">
        <img src={cfpImg} alt="CFP® certification badge" className="w-50" />
        <img src={afptImg} alt="AFPT certification badge" className="h-15 object-contain" />
      </div>
    </div>
  )
}

function CredentialPathway() {
  return (
    <div id="pathway" className="space-y-5">
      <div>
        <Heading level={2} className="mb-1">เส้นทางสู่คุณวุฒิ CFP หรือ AFPT</Heading>
        <Paragraph size="xs" className="!text-gray-400">4 ขั้นตอนที่มีโครงสร้างชัดเจน ตั้งแต่การเรียนรู้จนถึงการรักษามาตรฐาน</Paragraph>
      </div>
      <ol className="space-y-3">
        {pathwaySteps.map((s, i) => (
          <li key={s.n} className="flex gap-4">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-brand-bright text-white text-sm font-bold flex items-center justify-center shrink-0">
                {s.n}
              </div>
              {i < pathwaySteps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1.5" />}
            </div>
            <div className="pb-4 flex-1">
              <Link to={s.to} className="block border border-gray-100 hover:border-brand-bright hover:shadow-sm rounded-xl p-4 transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800 group-hover:text-brand-bright transition-colors">{s.label}</span>
                  <span className="text-xs bg-blue-50 text-brand-bright px-2 py-0.5 rounded-full">{s.tag}</span>
                </div>
                <Paragraph size="xs" className="leading-relaxed">{s.desc}</Paragraph>
                <span className="text-xs font-semibold text-brand-bright mt-2 inline-block group-hover:underline">ดูรายละเอียด →</span>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function CredentialOverview() {
  return (
    <div className="space-y-12">
      <CredentialHero />
      <CredentialPathway />
    </div>
  )
}

function Testimonials() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-brand-bright shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <Heading level={2}>มาตรฐานจริยธรรม: หัวใจของวิชาชีพ</Heading>
        </div>
        <Paragraph size="sm" className="max-w-xl">
          ที่ปรึกษาการเงิน ต้องอยู่ภายใต้ระบบจริยธรรมที่เข้มงวด เพื่อคุ้มครองผลประโยชน์ของลูกค้าเป็นสำคัญ
        </Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ethicsCards.map(c => (
            <OutlineCard key={c.n}>
              <Paragraph className="text-2xl !font-bold !text-[#1c757d] mb-2">{c.n}</Paragraph>
              <Paragraph size="sm" className="font-semibold text-gray-800 mb-1">{c.title}</Paragraph>
              <Paragraph size="xs" className="leading-relaxed">{c.desc}</Paragraph>
            </OutlineCard>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Heading level={2}>องค์กรที่ไว้วางใจผู้ถือคุณวุฒิ CFP</Heading>
        <div className="flex flex-wrap gap-2">
          {orgs.map(o => (
            <span key={o} className="text-xs px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-gray-600">{o}</span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-gray-50 rounded-xl p-5 space-y-3">
              <Paragraph size="sm" className="text-gray-700 leading-relaxed italic">{t.quote}</Paragraph>
              <footer className="text-xs text-gray-500">
                <Paragraph size="sm" className="font-semibold text-gray-600">{t.name}</Paragraph>
                <Paragraph size="sm">{t.org}</Paragraph>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  )
}

function CredentialPage() {
  return (
    <PageLayout>
      <MainContainer>

        <CredentialPath active={0} />
        <Divider />
        
        <CredentialOverview />
        <Divider />
        
        <Testimonials />
        <Divider />

        <CredentialCTA
          heading="เริ่มต้นเส้นทางสู่การเป็นนักวางแผนการเงิน CFP®"
          subtitle="ก้าวสู่มาตรฐานวิชาชีพด้านการวางแผนการเงิน"
          primaryAction={{ label: 'เข้าสู่ระบบสมาชิกนักวางแผน', to: '/auth/login' }}
        />
        
      </MainContainer>
    </PageLayout>
  )
}

export default CredentialPage
