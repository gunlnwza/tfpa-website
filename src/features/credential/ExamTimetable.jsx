import CredentialTimetable from './CredentialTimetable'

const rows = [
  { id: 'e1', period: 'มกราคม-กุมภาพันธ์', range: 'ม.ค. 18-20', name: 'รอบที่ 1 / 2026 — ภาคต้น',
    chips: ['Paper 1: หลักการวางแผนการเงิน', 'Paper 2: การวางแผนการลงทุน', 'Paper 3: การวางแผนภาษีและประกัน'],
    details: [
      { label: 'สถานที่',  value: 'ศูนย์สอบ TFPA กรุงเทพฯ' },
      { label: 'ระยะเวลา', value: '3 ชั่วโมง/Paper' },
    ],
    status: 'closed', statusLabel: 'ปิดรับสมัครแล้ว' },
  { id: 'e2', period: 'พฤษภาคม-มิถุนายน', range: 'พ.ค. 24-26', name: 'รอบที่ 2 / 2026 — ภาคกลาง',
    chips: ['Paper 1-5 ครบทุก Paper'],
    details: [
      { label: 'สถานที่',          value: 'กรุงเทพฯ / เชียงใหม่ / ขอนแก่น' },
      { label: 'ระยะเวลา',         value: '3-4 ชั่วโมง/Paper' },
      { label: 'ลงทะเบียนภายใน',  value: '30 เม.ย. 2026', highlight: true },
    ],
    status: 'open', statusLabel: 'เปิดรับสมัครแล้ว' },
  { id: 'e3', period: 'กันยายน-ตุลาคม', range: 'ก.ย. 19-21', name: 'รอบที่ 3 / 2026 — ภาคปลาย',
    chips: ['Paper 1-3 (รอบเสริม)'],
    details: [
      { label: 'สถานที่',         value: 'กรุงเทพฯ เท่านั้น' },
      { label: 'ระยะเวลา',        value: '3 ชั่วโมง/Paper' },
      { label: 'ลงทะเบียนภายใน', value: '31 ส.ค. 2026', highlight: true },
    ],
    status: 'soon', statusLabel: 'เร็วๆ นี้' },
]

export default function ExamTimetable() {
  return (
    <CredentialTimetable
      heading="ตารางสอบประจำปี 2026"
      subtitle="คลิกที่รอบสอบเพื่อดูรายละเอียด — ตารางอย่างเป็นทางการดูได้ใน TFPA Professional"
      rows={rows}
    />
  )
}
