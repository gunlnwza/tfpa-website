import Button from '../../../components/ui/Button'
import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import Heading from '../../../components/ui/Heading'
import staff from '../../../data/staff'
import Paragraph from '../../../components/ui/Paragraph'
import Section from '../../../components/layout/Section'
import StaffCard from '../../../features/contact/StaffCard'
import AddressCard from '../../../features/contact/AddressCard'
import GoogleMap from '../../../features/contact/GoogleMap'

function IntroSection() {
  return (
    <Section className="space-y-3">
      <Heading level={1}>ติดต่อสมาคมนักวางแผนการเงินไทย</Heading>
      <Paragraph>หากท่านมีข้อสงสัยเกี่ยวกับคุณวุฒิวิชาชีพ CFP®, การอบรม การสอบ หรือบริการต่าง ๆ ของสมาคมฯ สามารถติดต่อเราได้ผ่านช่องทางด้านล่าง</Paragraph>
    </Section>
  )
}

// top left: address card
// bottom left: traveling advice in small italic
// right, large: google map iframe
function AddressSection() {
  return (
    <Section className="flex gap-6 items-start">
      <div>
        <AddressCard />
        <Paragraph className='text-right mx-2 my-2 italic text-sm'>
          *เดินทางโดย MRT สะดวกที่สุด<br />ลงสถานี ศูนย์วัฒนธรรมแห่งประเทศไทย<br />ทางออกที่ 3 แล้วเดินเพียงไม่กี่นาที
        </Paragraph>
      </div>
      <GoogleMap />
    </Section>
  )
}

function ContactByTopicSection() {
  return (
    <Section className="space-y-6">
      <Heading level={2}>สอบถามข้อมูล</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {staff.map((s, i) => <StaffCard key={i} s={s} />)}
      </div>
    </Section>
  )
}


const complaintTopics = [
  {
    icon: '🏛️',
    title: 'การดำเนินงานของสมาคม',
    description: 'ข้อเสนอแนะหรือข้อร้องเรียนเกี่ยวกับการให้บริการของสมาคมฯ',
  },
  {
    icon: '👤',
    title: 'นักวางแผนการเงิน CFP® / AFPT',
    description: 'พฤติกรรมที่อาจขัดต่อจรรยาบรรณหรือมาตรฐานวิชาชีพ',
  },
  {
    icon: '⚠️',
    title: 'การใช้เครื่องหมาย CFP® / AFPT โดยไม่ถูกต้อง',
    description: 'การนำเครื่องหมายรับรองไปใช้อย่างไม่ถูกต้องหรืออาจละเมิดสิทธิ์',
  },
]

function ComplaintSection() {
  return (
    <Section className="space-y-6">
      <Heading level={2}>ร้องเรียนหรือแจ้งเบาะแส</Heading>
      <Paragraph>ท่านสามารถแจ้งเรื่องต่อไปนี้ได้ผ่านแบบฟอร์มออนไลน์</Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {complaintTopics.map((t) => (
          <div key={t.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2">
            <span className="text-2xl text-center block">{t.icon}</span>
            <Heading level={3}>{t.title}</Heading>
            <Paragraph size="sm">{t.description}</Paragraph>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button to="/about/contact/report" size="lg">กรอกฟอร์มร้องเรียน</Button>
      </div>
    </Section>
  )
}

export default function ContactPage() {
  return (
    <PageLayout>
      <MainContainer>
        <IntroSection />
        <Divider />
        <AddressSection />
        <Divider />
        <ContactByTopicSection />
        <Divider />
        <ComplaintSection />
      </MainContainer>
    </PageLayout>
  )
}
