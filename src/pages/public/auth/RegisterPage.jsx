import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button'
import PageLayout from '../../../components/layout/PageLayout'
import Paragraph from '../../../components/ui/Paragraph'
import AuthCard from '../../../features/auth/AuthCard'
import StepIndicator from '../../../features/auth/StepIndicator'
import RegisterStep1 from '../../../features/auth/RegisterStep1'
import RegisterStep2 from '../../../features/auth/RegisterStep2'
import RegisterSuccess from '../../../features/auth/RegisterSuccess'

const EMPTY_FORM = {
  titleTH: '', firstNameTH: '', lastNameTH: '',
  titleEN: '', firstNameEN: '', lastNameEN: '',
  gender: '', dob: '', nationalId: '',
  mobile: '', email: '', password: '', confirmPassword: '',
  qualifications: [],
  sector: '', companyName: '',
  workAddress: '', workSubdistrict: '', workDistrict: '', workProvince: '', workPostal: '', workPhone: '',
  sameAsWork: false,
  postalAddress: '', postalSubdistrict: '', postalDistrict: '', postalProvince: '', postalPostal: '',
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState(EMPTY_FORM)

  function setField(key, value) {
    setData(prev => ({ ...prev, [key]: value }))
  }

  function handleNext() {
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleBack() {
    setStep(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (submitted) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [submitted])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) return (
    <PageLayout>
      <AuthCard>
        <RegisterSuccess />
      </AuthCard>
    </PageLayout>
  )

  return (
    <PageLayout>
      <AuthCard
        title="สมัครสมาชิกนักวางแผน"
        headerRight={
          <Paragraph className="text-sm">
            มีบัญชีอยู่แล้ว?{' '}
            <Link to="/auth/login" className="text-brand-bright font-medium hover:underline">เข้าสู่ระบบ</Link>
          </Paragraph>
        }
      >
        <StepIndicator step={step} />
        <form onSubmit={handleSubmit}>
          {step === 1 && <RegisterStep1 data={data} onChange={setField} />}
          {step === 2 && <RegisterStep2 data={data} onChange={setField} />}
          <div className={`flex mt-8 gap-3 ${step === 2 ? 'justify-between' : 'justify-end'}`}>
            {step === 2 && (
              <Button type="button" onClick={handleBack} variant="ghost">← ย้อนกลับ</Button>
            )}
            {step === 1 && (
              <Button type="button" onClick={handleNext}>ถัดไป →</Button>
            )}
            {step === 2 && (
              <Button type="submit">ส่งใบสมัคร</Button>
            )}
          </div>
        </form>
        <Paragraph size="sm" className="text-center mt-6">
          มีบัญชีอยู่แล้ว?{' '}
          <Link to="/auth/login" className="text-brand-bright font-medium hover:underline">เข้าสู่ระบบ</Link>
        </Paragraph>
      </AuthCard>
    </PageLayout>
  )
}
