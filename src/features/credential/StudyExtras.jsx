import Button from '../../components/ui/Button'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'

export function StudyTransferCredit() {
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex gap-4 mt-4">
      <div className="text-2xl shrink-0">🔄</div>
      <div className="space-y-1">
        <Paragraph size="sm" className="font-semibold text-gray-800">มีประสบการณ์ในสายงาน? เทียบโอนได้</Paragraph>
        <Paragraph size="xs" className="text-gray-600 leading-relaxed">
          ผู้ที่มีประสบการณ์ทำงานในสายงานการเงินและผ่านหลักสูตรที่ได้รับการรับรอง
          สามารถขอเทียบโอนบางโมดูลได้ โดยต้องยื่นคำขอและเอกสารประกอบตามขั้นตอนของสมาคมฯ
        </Paragraph>
        <a href="#" className="text-xs font-semibold text-brand-bright hover:underline">ดูเงื่อนไขการเทียบโอน →</a>
      </div>
    </div>
  )
}

export function StudyJoinCTA() {
  return (
    <div className="bg-brand-bright rounded-2xl p-8 text-center space-y-4">
      <Heading level={2} className="text-2xl !font-bold !text-white">พร้อมเริ่มต้นอบรมหรือยัง?</Heading>
      <Paragraph size="sm" className="!text-white/70">สมัครสมาชิก TFPA และลงทะเบียนเรียนกับสถาบันที่รับรอง</Paragraph>
      <div className="flex justify-center gap-3 flex-wrap pt-2">
        <Button to="/auth/register" variant="white" pill>สมัครสมาชิก TFPA</Button>
        <Button href="#" variant="outline-white" pill>ดาวน์โหลด Syllabus</Button>
      </div>
    </div>
  )
}
