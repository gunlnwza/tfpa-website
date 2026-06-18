import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import Heading from '../../../components/ui/Heading'
import Paragraph from '../../../components/ui/Paragraph'
import Section from '../../../components/layout/Section'
import CompanyMarquee from '../../../features/about/CompanyMarquee'
import ThreeMemberCards from '../../../features/about/ThreeMemberCards'
import Timeline from '../../../features/about/Timeline'

// NOTE: It is important to put FPSB somewhere.

function HeroSection() {
  return (
    <Section>
      <Heading level={1} className="text-center my-4">สมาคมนักวางแผนการเงินไทย</Heading>
      <Heading level={2} className="text-center my-4">Thai Financial Planners Association</Heading>
      <Paragraph>สมาคมนักวางแผนการเงินไทย (TFPA) มุ่งส่งเสริมความรู้ด้านการเงินแก่ประชาชน และพัฒนามาตรฐานวิชาชีพนักวางแผนการเงินในประเทศไทย เราสนับสนุนการเรียนรู้ทางการเงินตลอดชีวิต พร้อมทั้งอบรมและรับรองผู้ประกอบวิชาชีพ CFP® เพื่อให้สามารถให้คำแนะนำทางการเงินอย่างมีจริยธรรม เป็นมืออาชีพ และเป็นประโยชน์ต่อสังคม</Paragraph>
    </Section>
  )
}

// Build trust: 
// - show numbers of CFP, AFPT, and
// - company member + company marquee -- company member registration advertising.
function MemberSection() {
  return (
    <Section className="space-y-4">
      <Heading level={2}>สมาชิกของเรา</Heading>
      <Paragraph>TFPA มีสมาชิกทั้งบุคคลและนิติบุคคลที่ร่วมกันขับเคลื่อนมาตรฐานวิชาชีพการวางแผนการเงินในประเทศไทย เราสนับสนุนการพัฒนานักวางแผนการเงินผ่านหลักสูตร AFPT™ และ CFP® พร้อมเปิดโอกาสให้องค์กรเข้าร่วมเป็นสมาชิกเพื่อส่งเสริมการพัฒนาศักยภาพบุคลากรและความรู้ทางการเงินภายในองค์กร</Paragraph>
      <ThreeMemberCards />
      <div className="relative flex items-center justify-center">
        <Heading level={3}>สมาชิกนิติบุคคล</Heading>
        <a href="#" className="absolute right-0 text-sm font-medium text-brand-bright hover:underline shrink-0">สมัครเป็นสมาชิกนิติบุคคล →</a>
      </div>
      <CompanyMarquee />
    </Section>
  )
}

// History: show past, present, and future
function TimelineSection() {
  return (
    <Section className="space-y-4">
      <Heading level={2}>เส้นทางการเติบโตของ TFPA</Heading>
      <Timeline />
    </Section>
  )
}

export default function AboutPage() {
  return (
    <PageLayout>
      <MainContainer>
        <HeroSection />
        <Divider />
        <MemberSection />
        <Divider />
        <TimelineSection />
      </MainContainer>
    </PageLayout>
  )
}
