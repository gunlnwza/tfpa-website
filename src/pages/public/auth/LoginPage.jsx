import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import AuthCard from '../../../features/auth/AuthCard'
import FormField from '../../../components/ui/FormField'
import FormInput from '../../../components/ui/FormInput'
import Paragraph from '../../../components/ui/Paragraph'

export default function LoginPage() {
  const [remember, setRemember] = useState(false)

  return (
    <PageLayout>
      <AuthCard title="เข้าสู่ระบบสมาชิกนักวางแผน" size="sm">
        <div className="space-y-4">
          <FormField label="อีเมล">
            <FormInput type="text" placeholder="กรอกอีเมลของคุณ" />
          </FormField>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">รหัสผ่าน</label>
              <a href="#" className="text-xs text-brand-bright hover:underline">ลืมรหัสผ่าน?</a>
            </div>
            <FormInput type="password" placeholder="กรอกรหัสผ่าน" />
          </div>

          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 accent-brand-bright"
            />
            <span className="text-sm text-gray-600">จดจำฉันไว้</span>
          </label>

          <Link
            to="/member"
            className="block w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-bright hover:opacity-90 transition-opacity text-center"
          >
            เข้าสู่ระบบ
          </Link>
        </div>

        <Paragraph size="sm" className="text-center mt-6">
          ยังไม่มีบัญชี?{' '}
          <Link to="/auth/register" className="text-brand-bright font-medium hover:underline">
            สมัครสมาชิก
          </Link>
        </Paragraph>
      </AuthCard>
    </PageLayout>
  )
}
