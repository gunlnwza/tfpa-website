const navItems = [
  { label: 'หน้าหลัก', href: '/' },
  {
    label: 'นักวางแผนการเงิน CFP®', href: '/credential',
    children: [
      { label: 'อบรม', href: '/credential/study' },
      { label: 'สอบ', href: '/credential/exam' },
      { label: 'ขึ้นทะเบียน', href: '/credential/validate' },
      { label: 'ต่ออายุ', href: '/credential/renewal' },
      { label: 'คู่มือนักวางแผนการเงิน', href: '/credential/guide' },
    ],
  },
  {
    label: 'วางแผนการเงิน', href: '/planning',
    children: [
      { label: 'ค้นหาที่ปรึกษา', href: '/planning/find_planner' },
    ],
  },
  { label: 'มุมความรู้', href: '/knowledge' },
  { label: 'ข่าวสาร', href: '/news' },
  {
    label: 'เกี่ยวกับ TFPA', href: '/about',
    children: [
      { label: 'ติดต่อ', href: '/about/contact' },
    ],
  },
]

export default navItems
