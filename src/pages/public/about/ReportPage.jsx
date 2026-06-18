import Button from '../../../components/ui/Button'
import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Heading from '../../../components/ui/Heading'
import Paragraph from '../../../components/ui/Paragraph'
import Section from '../../../components/layout/Section'
import FormField from '../../../components/ui/FormField'
import FormInput from '../../../components/ui/FormInput'

export default function ReportPage() {
  return (
    <PageLayout>
      <MainContainer>
        <Section className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <Heading level={1}>แบบฟอร์มร้องเรียน</Heading>
            <Paragraph>กรุณากรอกข้อมูลให้ครบถ้วน ทีมงานจะดำเนินการตรวจสอบและติดต่อกลับโดยเร็วที่สุด</Paragraph>
          </div>

          <form className="space-y-5">
            <FormField label="1. ชื่อ-นามสกุล (ภาษาไทย)">
              <FormInput type="text" placeholder="เช่น นายสมชาย ใจดี" />
            </FormField>

            <FormField label="2. โทรศัพท์">
              <FormInput type="tel" placeholder="เช่น 081-234-5678" />
            </FormField>

            <FormField label="3. อีเมล">
              <FormInput type="email" placeholder="เช่น somchai@email.com" />
            </FormField>

            <FormField label="4. เรื่องที่ร้องเรียน">
              <FormInput as="select">
                <option value="">-- กรุณาเลือก --</option>
                <option>การดำเนินงานของสมาคม</option>
                <option>นักวางแผนการเงิน CFP® / AFPT</option>
                <option>การใช้เครื่องหมาย CFP® / AFPT โดยไม่ถูกต้อง</option>
              </FormInput>
            </FormField>

            <FormField label="5. หน่วยงานที่เกี่ยวข้อง">
              <FormInput type="text" placeholder="เช่น บริษัท / สถาบัน / บุคคลที่เกี่ยวข้อง" />
            </FormField>

            <FormField label="6. รายละเอียดเรื่องที่ร้องเรียน">
              <FormInput as="textarea" rows={5} placeholder="อธิบายรายละเอียดของเรื่องที่ต้องการร้องเรียน" />
            </FormField>

            <FormField label="7. เอกสารประกอบ" hint="ไฟล์ที่รองรับ: PDF, JPG, PNG (ไม่เกิน 10 MB)">
              <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-brand-bright file:text-white hover:file:bg-[#1561a0] cursor-pointer" />
            </FormField>

            <div className="pt-2">
              <Button to="/" size="lg">ส่งเรื่องร้องเรียน</Button>
            </div>
          </form>
        </Section>
      </MainContainer>
    </PageLayout>
  )
}
