import SectionHeading from './SectionHeading'
import FormField from '../../components/ui/FormField'
import FormInput from '../../components/ui/FormInput'

const TITLES_TH = ['นาย', 'นาง', 'น.ส.', 'ดร.', 'รศ.ดร.', 'ศ.ดร.', 'อื่นๆ']
const TITLES_EN = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'Other']
const BUSINESS_SECTORS = [
  'ธนาคารพาณิชย์',
  'หลักทรัพย์และตลาดทุน',
  'ประกันชีวิต',
  'ประกันวินาศภัย',
  'กองทุนรวม',
  'บริหารความมั่งคั่ง',
  'ที่ปรึกษาการเงินอิสระ',
  'อสังหาริมทรัพย์',
  'ภาครัฐ / รัฐวิสาหกิจ',
  'อื่นๆ',
]
const QUALIFICATIONS = ['CFA', 'CISA', 'CPA', 'FRM', 'อื่นๆ']

function QualificationCheckbox({ q, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
      <input type="checkbox" checked={checked} onChange={onToggle} className="w-4 h-4 rounded accent-brand-bright" />
      {q}
    </label>
  )
}

export default function RegisterStep1({ data, onChange }) {
  function toggleQualification(q) {
    const next = data.qualifications.includes(q)
      ? data.qualifications.filter(x => x !== q)
      : [...data.qualifications, q]
    onChange('qualifications', next)
  }

  return (
    <div className="space-y-4">
      <SectionHeading>ข้อมูลส่วนตัว</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_3fr] gap-3">
        <FormField label="คำนำหน้า">
          <FormInput as="select" value={data.titleTH} onChange={e => onChange('titleTH', e.target.value)}>
            <option value="">-- เลือก --</option>
            {TITLES_TH.map(t => <option key={t}>{t}</option>)}
          </FormInput>
        </FormField>
        <FormField label="ชื่อ">
          <FormInput type="text" value={data.firstNameTH} onChange={e => onChange('firstNameTH', e.target.value)} placeholder="ชื่อจริง" />
        </FormField>
        <FormField label="นามสกุล">
          <FormInput type="text" value={data.lastNameTH} onChange={e => onChange('lastNameTH', e.target.value)} placeholder="นามสกุล" />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_3fr] gap-3">
        <FormField label="Title">
          <FormInput as="select" value={data.titleEN} onChange={e => onChange('titleEN', e.target.value)}>
            <option value="">-- Select --</option>
            {TITLES_EN.map(t => <option key={t}>{t}</option>)}
          </FormInput>
        </FormField>
        <FormField label="First Name">
          <FormInput type="text" value={data.firstNameEN} onChange={e => onChange('firstNameEN', e.target.value)} placeholder="First name" />
        </FormField>
        <FormField label="Last Name">
          <FormInput type="text" value={data.lastNameEN} onChange={e => onChange('lastNameEN', e.target.value)} placeholder="Last name" />
        </FormField>
      </div>

      <FormField label="เลขบัตรประชาชน">
        <FormInput type="text" value={data.nationalId} onChange={e => onChange('nationalId', e.target.value)} placeholder="X-XXXX-XXXXX-XX-X" maxLength={13} />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="วันเกิด">
          <FormInput type="date" value={data.dob} onChange={e => onChange('dob', e.target.value)} />
        </FormField>
        <FormField label="เพศ">
          <FormInput as="select" value={data.gender} onChange={e => onChange('gender', e.target.value)}>
            <option value="">-- เลือก --</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="unspecified">ไม่ระบุ</option>
          </FormInput>
        </FormField>
      </div>

      <SectionHeading>ข้อมูลติดต่อ</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="อีเมล (ใช้เป็น Username)">
          <FormInput type="email" value={data.email} onChange={e => onChange('email', e.target.value)} placeholder="example@email.com" />
        </FormField>
        <FormField label="เบอร์โทรศัพท์มือถือ">
          <FormInput type="tel" value={data.mobile} onChange={e => onChange('mobile', e.target.value)} placeholder="0XX-XXX-XXXX" />
        </FormField>
      </div>

      <SectionHeading>ข้อมูลบัญชี</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="รหัสผ่าน">
          <FormInput type="password" value={data.password} onChange={e => onChange('password', e.target.value)} placeholder="อย่างน้อย 8 ตัวอักษร" />
        </FormField>
        <FormField label="ยืนยันรหัสผ่าน">
          <FormInput type="password" value={data.confirmPassword} onChange={e => onChange('confirmPassword', e.target.value)} placeholder="กรอกรหัสผ่านอีกครั้ง" />
        </FormField>
      </div>

      <SectionHeading>ข้อมูลวิชาชีพ</SectionHeading>

      <FormField label="คุณวุฒิวิชาชีพ">
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
          {QUALIFICATIONS.map(q => (
            <QualificationCheckbox
              key={q}
              q={q}
              checked={data.qualifications.includes(q)}
              onToggle={() => toggleQualification(q)}
            />
          ))}
        </div>
      </FormField>

      <FormField label="ภาคธุรกิจปัจจุบัน">
        <FormInput as="select" value={data.sector} onChange={e => onChange('sector', e.target.value)}>
          <option value="">-- เลือก --</option>
          {BUSINESS_SECTORS.map(s => <option key={s}>{s}</option>)}
        </FormInput>
      </FormField>
    </div>
  )
}
