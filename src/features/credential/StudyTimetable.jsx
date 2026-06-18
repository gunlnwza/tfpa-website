import CredentialTimetable from './CredentialTimetable'

const rows = [
  { id: 'c1', period: 'มกราคม-มีนาคม', range: 'ม.ค. 10 - มี.ค. 29', name: 'รอบที่ 1 / 2026 — ภาคต้น',
    chips: ['โมดูล 1: พื้นฐานการวางแผนการเงิน', 'โมดูล 2: การวางแผนการลงทุน'],
    details: [
      { label: 'สถาบัน',  value: 'จุฬาลงกรณ์มหาวิทยาลัย · TFPA Training Center' },
      { label: 'สถานที่', value: 'คณะพาณิชยศาสตร์ ถ.พญาไท / ออนไลน์' },
      { label: 'ระยะเวลา', value: '12 สัปดาห์' },
    ],
    status: 'closed', statusLabel: 'ปิดรับสมัครแล้ว' },
  { id: 'c2', period: 'พฤษภาคม-ตุลาคม', range: 'พ.ค. 4 - ต.ค. 18', name: 'รอบที่ 2 / 2026 — ภาคหลัก',
    chips: ['โมดูล 1-6 ครบทุกโมดูล'],
    details: [
      { label: 'สถาบัน',             value: 'TFPA Training Center · SCB Academy · KTC Learning Institute' },
      { label: 'สถานที่',            value: 'กรุงเทพฯ / เชียงใหม่ / ขอนแก่น / ออนไลน์' },
      { label: 'ระยะเวลา',           value: '24 สัปดาห์' },
      { label: 'ลงทะเบียนภายใน',    value: '30 เม.ย. 2026', highlight: true },
    ],
    status: 'open', statusLabel: 'เปิดรับสมัครแล้ว' },
  { id: 'c3', period: 'กันยายน-พฤศจิกายน', range: 'ก.ย. 7 - พ.ย. 22', name: 'รอบที่ 3 / 2026 — ภาคปลาย',
    chips: ['โมดูล 1-3 (รอบเสริม)'],
    details: [
      { label: 'สถาบัน',            value: 'มหาวิทยาลัยธรรมศาสตร์ · CFA Society Thailand' },
      { label: 'สถานที่',           value: 'คณะบริหารธุรกิจ มธ. ท่าพระจันทร์ / ออนไลน์' },
      { label: 'ระยะเวลา',          value: '12 สัปดาห์' },
      { label: 'ลงทะเบียนภายใน',   value: '31 ส.ค. 2026', highlight: true },
    ],
    status: 'soon', statusLabel: 'เร็วๆ นี้' },
]

export default function StudyTimetable() {
  return (
    <CredentialTimetable
      heading="ตารางอบรมประจำปี 2026"
      subtitle="คลิกที่รอบเพื่อดูรายละเอียดสถาบัน สถานที่ และโมดูลที่เปิดสอน"
      rows={rows}
    />
  )
}
