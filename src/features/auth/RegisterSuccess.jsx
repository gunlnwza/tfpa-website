import Button from '../../components/ui/Button'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'

export default function RegisterSuccess() {
  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <Heading level={2} className="mb-2">สมัครสมาชิกสำเร็จ</Heading>
      <Paragraph className="text-gray-500 mb-3">
        ขอบคุณที่สมัครสมาชิกกับสมาคมนักวางแผนการเงินไทย
      </Paragraph>
      <Paragraph size="sm" className="text-gray-400 mb-6 leading-7">
        กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชีของท่านก่อนเข้าสู่ระบบ<br />หากไม่พบอีเมล กรุณาตรวจสอบโฟลเดอร์ Spam หรือ Junk Mail
      </Paragraph>
      <Button to="/auth/login">ไปยังหน้าเข้าสู่ระบบ</Button>
    </div>
  )
}
