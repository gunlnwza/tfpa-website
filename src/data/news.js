import setInTheCityImg from '../assets/tfpa/set_in_the_city.jpeg'
import wealthManagementForumImg from '../assets/tfpa/wealth_management_forum.jpg'

export const TYPE_BADGE = {
  event:        'bg-blue-100 text-blue-700',
  announcement: 'bg-amber-100 text-amber-700',
  campaign:     'bg-green-100 text-green-700',
}

export const TYPE_LABEL = {
  event:        'กิจกรรม',
  announcement: 'ประกาศ',
  campaign:     'แคมเปญ',
}

export const typeChips = [
  { key: 'event',        label: 'กิจกรรม', icon: '🎪' },
  { key: 'announcement', label: 'ประกาศ',  icon: '📢' },
  { key: 'campaign',     label: 'แคมเปญ',  icon: '🚀' },
]

export const searchSuggestions = [
  'SET in the City 2026',
  'สัมมนา CFP® เกษียณ',
  'แคมเปญประชาชนวางแผนการเงิน',
  'ฟอรั่มนักวางแผนการเงิน',
  'Money Expo',
  'ประกาศสมาชิก TFPA',
]

export const highlighted = [
  { 
    type: 'event',
    date: '20-21 มิ.ย. 2569',
    title: 'SET in the City 2026',
    desc: 'งานมหกรรมการเงินและการลงทุนประจำปี ณ ศูนย์การประชุมแห่งชาติสิริกิติ์ พบกับบูธ TFPA และสัมมนาให้ความรู้ด้านการวางแผนการเงินฟรีตลอดงาน',
    img: setInTheCityImg
  },
  { 
    type: 'event', 
    date: '25 มิ.ย. 2569', 
    title: 'TFPA Wealth Forum 2569: เทรนด์โลกพอร์ตโต', 
    desc: 'งานฟอรัมใหญ่ประจำปีของสมาคมฯ รวมพลนักวางแผนการเงิน CFP® และผู้เชี่ยวชาญร่วมเจาะลึกทิศทางการจัดพอร์ต เจาะกลยุทธ์การบริหารความมั่งคั่งยุคใหม่ ณ โรงแรมพลาซ่า แอทธินี',
    img: wealthManagementForumImg
  }
]

export const upcomingEvents = [
  { type: 'campaign',     date: '1 ก.ค.-31 ส.ค. 2569', title: 'แคมเปญ "ประชาชนวางแผนการเงินได้"',              desc: 'เปิดให้ประชาชนทุกกลุ่มเข้าถึงเครื่องมือและคำแนะนำด้านการวางแผนการเงินฟรีตลอด 2 เดือน' },
  { type: 'event',        date: '15 ก.ค. 2569',         title: 'ฟอรั่มนักวางแผนการเงิน ครั้งที่ 12',            desc: 'เวทีแลกเปลี่ยนแนวปฏิบัติระหว่างสมาชิก CFP® และ AFPT จากทั่วประเทศ' },
  { type: 'event',        date: '19 ก.ค. 2569',         title: 'เวิร์กช็อป "จัดแผนการเงินส่วนบุคคลใน 3 ชั่วโมง"', desc: 'เวิร์กช็อปเชิงปฏิบัติสำหรับประชาชนทั่วไป รับจำนวนจำกัด 40 ท่าน' },
  { type: 'announcement', date: '1 ส.ค. 2569',          title: 'ปรับสถานที่จัดสัมมนา กันยายน 2569',             desc: 'สัมมนาประจำเดือน ก.ย. ย้ายสถานที่ใหม่ — รายละเอียดเพิ่มเติมจะแจ้งในวันที่ 1 ส.ค.' },
  { type: 'event',        date: '13-14 ก.ย. 2569',      title: 'สัมมนาวิชาการ TFPA ประจำปี 2569',               desc: 'งานสัมมนาประจำปีของสมาคม รวมหัวข้อด้านการเงินส่วนบุคคล การลงทุน และจรรยาบรรณวิชาชีพ' },
]

export const pastEvents = [
  { type: 'event',        date: '1-4 พ.ค. 2569',    title: 'Money Expo 2026',                                  desc: 'งานมหกรรมการเงินชั้นนำของประเทศ TFPA ร่วมออกบูธให้ความรู้ด้านการวางแผนการเงิน' },
  { type: 'event',        date: '10 เม.ย. 2569',     title: 'สัมมนา "AFPT กับเส้นทางวิชาชีพการเงิน" รุ่นที่ 3', desc: 'สัมมนาแนะแนวคุณวุฒิวิชาชีพ AFPT สำหรับผู้ที่สนใจเข้าสู่วิชาชีพการวางแผนการเงิน' },
  { type: 'campaign',     date: 'มี.ค.-พ.ค. 2569',  title: 'แคมเปญ "วางแผนก่อนเกษียณ 10 ปี"',               desc: 'แคมเปญให้ความรู้และเครื่องมือวางแผนเกษียณสำหรับกลุ่มอายุ 45-55 ปี' },
  { type: 'announcement', date: '5 มี.ค. 2569',      title: 'แจ้งเปลี่ยนสถานที่สัมมนา มี.ค. 2569',           desc: 'ย้ายสถานที่จัดสัมมนาประจำเดือนมีนาคมจากห้อง A ไปยังห้อง C ชั้น 4' },
]
