import SectionHeading from './SectionHeading'
import FormField from '../../components/ui/FormField'
import FormInput from '../../components/ui/FormInput'

export default function RegisterStep2({ data, onChange }) {
  function handleSameAsWork(checked) {
    onChange('sameAsWork', checked)
    if (checked) {
      onChange('postalAddress',     data.workAddress)
      onChange('postalSubdistrict', data.workSubdistrict)
      onChange('postalDistrict',    data.workDistrict)
      onChange('postalProvince',    data.workProvince)
      onChange('postalPostal',      data.workPostal)
    }
  }

  return (
    <div className="space-y-3">
      <SectionHeading>ที่อยู่ที่ทำงาน</SectionHeading>

      <FormField label="ชื่อบริษัท / องค์กร">
        <FormInput type="text" value={data.companyName} onChange={e => onChange('companyName', e.target.value)} placeholder="ชื่อบริษัทหรือหน่วยงาน" />
      </FormField>

      <FormField label="ที่อยู่">
        <FormInput type="text" value={data.workAddress} onChange={e => onChange('workAddress', e.target.value)} placeholder="บ้านเลขที่ ถนน" />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="แขวง / ตำบล">
          <FormInput type="text" value={data.workSubdistrict} onChange={e => onChange('workSubdistrict', e.target.value)} />
        </FormField>
        <FormField label="เขต / อำเภอ">
          <FormInput type="text" value={data.workDistrict} onChange={e => onChange('workDistrict', e.target.value)} />
        </FormField>
        <FormField label="จังหวัด">
          <FormInput type="text" value={data.workProvince} onChange={e => onChange('workProvince', e.target.value)} />
        </FormField>
        <FormField label="รหัสไปรษณีย์">
          <FormInput type="text" value={data.workPostal} onChange={e => onChange('workPostal', e.target.value)} maxLength={5} placeholder="XXXXX" />
        </FormField>
      </div>

      <FormField label="เบอร์โทรศัพท์ที่ทำงาน">
        <FormInput type="tel" value={data.workPhone} onChange={e => onChange('workPhone', e.target.value)} placeholder="0X-XXXX-XXXX" />
      </FormField>

      <SectionHeading>ที่อยู่สำหรับจัดส่งเอกสาร</SectionHeading>

      <label className="flex items-center gap-2.5 cursor-pointer select-none mb-4">
        <input type="checkbox" checked={data.sameAsWork} onChange={e => handleSameAsWork(e.target.checked)} className="w-4 h-4 rounded border-gray-300 accent-brand-bright" />
        <span className="text-sm text-gray-700">เหมือนกับที่อยู่ที่ทำงาน</span>
      </label>

      {!data.sameAsWork && (
        <div className="space-y-3">
          <FormField label="ที่อยู่">
            <FormInput type="text" value={data.postalAddress} onChange={e => onChange('postalAddress', e.target.value)} placeholder="บ้านเลขที่ ถนน" />
          </FormField>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField label="แขวง / ตำบล">
              <FormInput type="text" value={data.postalSubdistrict} onChange={e => onChange('postalSubdistrict', e.target.value)} />
            </FormField>
            <FormField label="เขต / อำเภอ">
              <FormInput type="text" value={data.postalDistrict} onChange={e => onChange('postalDistrict', e.target.value)} />
            </FormField>
            <FormField label="จังหวัด">
              <FormInput type="text" value={data.postalProvince} onChange={e => onChange('postalProvince', e.target.value)} />
            </FormField>
            <FormField label="รหัสไปรษณีย์">
              <FormInput type="text" value={data.postalPostal} onChange={e => onChange('postalPostal', e.target.value)} maxLength={5} placeholder="XXXXX" />
            </FormField>
          </div>
        </div>
      )}
    </div>
  )
}
