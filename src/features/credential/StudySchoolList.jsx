import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'
import ThaiPFALogo from '../../assets/school/thai_pfa.png'
import CMSKLogo from '../../assets/school/cmsk.webp'
import AVPLogo from '../../assets/school/avp.webp'
import ATILogo from '../../assets/school/ati.png'
import AIMCLogo from '../../assets/school/aimc.png'

const schools = [
  {
    src: ThaiPFALogo,
    name: 'ศูนย์อบรมไทยพีเอฟเอ',
    desc: 'ThaiPFA - ศูนย์อบรมหลักสูตรนักวางแผนการเงินมาตรฐานสากล CFP',
    url: 'https://www.thaipfa.com',
  },
  {
    src: ATILogo,
    name: 'สถาบันฝึกอบรมสมาคมบริษัทหลักทรัพย์',
    desc: 'ATI - สถาบันฝึกอบรมและจัดสอบใบอนุญาตผู้แนะนำการลงทุน (IC License)',
    url: 'https://ati-asco.org',
  },
  {
    src: AIMCLogo,
    name: 'ศูนย์ความรู้ผู้ประกอบวิชาชีพทางการเงิน สมาคมบริษัทจัดการลงทุน',
    desc: 'AIMC - ศูนย์ความรู้และพัฒนาบุคลากรด้านการบริหารจัดการกองทุน',
    url: 'https://www.aimc.or.th',
  },
  {
    src: CMSKLogo,
    name: 'บริษัท ซีเอ็มเอสเค จำกัด',
    desc: 'CMSK - สถาบันอบรมความรู้ทางการเงินและหลักสูตรเตรียมความพร้อม CFP',
    url: 'https://www.mycmsk.com',
  },
  {
    src: AVPLogo,
    name: 'สถาบันฝึกอบรม เอวีพี อะคาเดมี่',
    desc: 'AVP Academy - แหล่งรวมคอร์สเรียนและการติวสอบโดยนักวางแผนการเงินมืออาชีพ',
    url: 'https://www.avpacademy.com',
  },
]

function SchoolCard({ s }) {
  return (
    <a
      href={s.url || '#'}
      target={s.url ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex flex-col border border-gray-100 rounded-xl p-5 hover:border-brand-bright hover:shadow-sm transition-all space-y-3"
    >
      <div className="flex justify-center">
        <img src={s.src} alt={s.name} className="h-16 object-contain" />
      </div>
      <div className="flex-1">
        <Paragraph size="sm" className="font-semibold text-gray-800">{s.name}</Paragraph>
        <Paragraph size="xs" className="text-gray-400 mt-0.5">{s.desc}</Paragraph>
      </div>
      <div className="flex justify-end">
        <span className="text-xs font-semibold text-brand-bright">ดูเว็บไซต์ →</span>
      </div>
    </a>
  )
}

export default function StudySchoolList() {
  return (
    <div className="space-y-4">
      <Heading level={2}>สถาบันที่ให้การอบรม</Heading>
      <div className="space-y-1">
        <Paragraph size="sm">TFPA รับรองสถาบันอบรม CFP® หลายแห่งทั่วประเทศ โดยแต่ละสถาบันกำหนดค่าธรรมเนียมและตารางอบรมของตนเอง</Paragraph>
        <Paragraph size="sm">กรุณาติดต่อสถาบันอบรมโดยตรงเพื่อสอบถามรายละเอียดหลักสูตร ค่าใช้จ่าย และกำหนดการอบรมล่าสุด</Paragraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schools.map(s => <SchoolCard key={s.name} s={s} />)}
      </div>
    </div>
  )
}
