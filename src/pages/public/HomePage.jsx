import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'
import PageLayout from '../../components/layout/PageLayout'
import MainContainer from '../../components/layout/MainContainer'
import Divider from '../../components/ui/Divider'
import NewsCard from '../../components/ui/NewsCard'
import KnowledgeCard from '../../components/ui/KnowledgeCard'
import PlannerCard from '../../features/planning/PlannerCard'
import consultImg from '../../assets/tfpa/consult.png'
import { highlighted } from '../../data/news'
import { featured as featuredKnowledge } from '../../data/knowledge'
import { planners } from '../../data/planners'
import avatar1 from '../../assets/Gun/01.jpg'
import avatar2 from '../../assets/Gun/13.jpg'
import avatar3 from '../../assets/Gun/03.jpg'

const AVATARS = [avatar1, avatar2, avatar3]

function Hero() {
  return (
    <section className="rounded-2xl overflow-hidden shadow-lg">
      {/* Image + overlay */}
      <div
        className="relative flex items-center"
        style={{
          backgroundImage: `url(${consultImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          minHeight: '30rem',
        }}
      >
        {/* Left-side gradient shadow overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(4, 18, 30, 0.8) 50%, rgba(4, 18, 30, 0.2) 60%, transparent 100%)' }} />

        <div className="relative z-10 px-10 py-12 max-w-xl">
          <Heading level={1} className="text-4xl leading-snug mb-1" style={{ background: 'linear-gradient(to right, var(--color-brand-bright), var(--color-brand-green), var(--color-brand-yellow))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            วางแผนชีวิตให้สำเร็จ<br />ด้วยการวางแผนการเงิน
          </Heading>
          <Paragraph size="xs" className="tracking-widest !text-gray-300 uppercase mb-3">
            CFP® Professionals Deliver "The Standard of Excellence"
          </Paragraph>
          <Paragraph size="sm" className="!text-gray-200 leading-relaxed mb-6">
            มาตรฐานระดับสากล ที่ช่วยให้คุณวางแผนการเงินอย่างเป็นระบบ<br />
            เพื่ออนาคตที่มั่นคงและเป้าหมายชีวิตที่เป็นจริงได้
          </Paragraph>
          <Button to="/planning">เริ่มต้นวางแผนการเงิน</Button>

          {/* Avatar stack */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <img key={i} src={src} alt="" className="w-9 h-9 rounded-full object-cover object-top border-2 border-white" />
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: 'var(--color-brand-bright)' }}>
                +797
              </div>
            </div>
            <div className="leading-tight">
              <Paragraph size="sm" className="font-semibold !text-white">800+ นักวางแผนการเงิน CFP®</Paragraph>
              <Paragraph size="xs" className="!text-gray-400">พร้อมดูแลคุณทั่วประเทศ</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title, to, linkLabel = 'ดูทั้งหมด →' }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <Heading level={2}>{title}</Heading>
      <Link to={to} className="text-sm font-medium text-brand-bright hover:underline">{linkLabel}</Link>
    </div>
  )
}

function NewsHighlight() {
  return (
    <div>
      <SectionHeader title="ข่าวสาร & กิจกรรม" to="/news" />
      <div className="grid grid-cols-3 gap-4">
        {highlighted.map((item, i) => (
          <NewsCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

function FeaturedPlanners() {
  return (
    <div>
      <SectionHeader title="นักวางแผนการเงิน CFP®" to="/find_planner" linkLabel="ค้นหาที่ปรึกษา →" />
      <div className="grid grid-cols-3 gap-4">
        {planners.slice(0, 3).map(p => (
          <PlannerCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  )
}

function KnowledgeHighlight() {
  return (
    <div>
      <SectionHeader title="มุมความรู้การเงิน" to="/knowledge" />
      <div className="grid grid-cols-3 gap-4">
        {featuredKnowledge.slice(0, 3).map((item, i) => (
          <KnowledgeCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}


function NewsletterCTA() {
  return (
    <div className="bg-brand-bright rounded-2xl p-8 text-center space-y-4">
      <p className="text-white/70 text-sm">รับข่าวสารทางอีเมล</p>
      <h2 className="text-2xl font-bold text-white">ข่าว CFP® กิจกรรม CPD และบทความใหม่ ส่งตรงถึงคุณ</h2>
      <p className="text-white/70 text-sm">สรุปข่าวสารสำคัญและโอกาสในการพัฒนาวิชาชีพจาก TFPA โดยไม่ต้องคอยติดตามเอง</p>
      <form className="flex justify-center gap-2 pt-2 flex-wrap" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          placeholder="อีเมลของคุณ"
          className="w-64 px-4 py-2.5 text-sm rounded-full bg-white/15 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white"
        />
        <Button type="submit" variant="white" pill>สมัครรับจดหมายข่าว</Button>
      </form>
    </div>
  )
}

function HomePage() {
  return (
    <PageLayout>
      <MainContainer>
        
        <Hero />
        <Divider />
        
        <NewsHighlight />
        <Divider />
        
        <FeaturedPlanners />
        <Divider />

        <KnowledgeHighlight />
        <Divider />

        <NewsletterCTA />

      </MainContainer>
    </PageLayout>
  )
}

export default HomePage
