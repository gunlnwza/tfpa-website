import { Link } from 'react-router-dom'
import tfpaLogo from '../../assets/tfpa/main.png'
import Paragraph from '../ui/Paragraph'

const SITEMAP = [
  {
    heading: 'นักวางแผนการเงิน CFP®',
    links: [
      { label: 'ภาพรวม',    to: '/credential' },
      { label: 'อบรม',      to: '/credential/study' },
      { label: 'สอบ',       to: '/credential/exam' },
      { label: 'ขึ้นทะเบียน', to: '/credential/validate' },
      { label: 'ต่ออายุ',   to: '/credential/renewal' },
    ],
  },
  {
    heading: 'วางแผนการเงิน',
    links: [
      { label: 'เครื่องมือวางแผน', to: '/planning' },
      { label: 'ค้นหาที่ปรึกษา',   to: '/planning/find_planner' },
    ],
  },
  {
    heading: 'ความรู้ & ข่าวสาร',
    links: [
      { label: 'มุมความรู้',        to: '/knowledge' },
      { label: 'ข่าวสาร & กิจกรรม', to: '/news' },
      { label: 'คู่มือสมาชิก',      to: '/member/documentation' },
    ],
  },
  {
    heading: 'เกี่ยวกับ TFPA',
    links: [
      { label: 'หน้าหลัก',     to: '/' },
      { label: 'เกี่ยวกับเรา',  to: '/about' },
      { label: 'ติดต่อเรา',    to: '/about/contact' },
      { label: 'ร้องเรียน',    to: '/about/contact/report' },
    ],
  },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ThaiFinancialPlanners',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.93-1.956 1.885v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cfpthailand/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC6rMod3YUUYv-yGnkIg5GEw',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: 'LINE',
    href: 'https://line.me/ti/p/~@cfpthailand',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
      </svg>
    ),
  },
]

function SocialLink({ social }) {
  return (
    <a
      href={social.href}
      aria-label={social.label}
      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-brand-bright hover:text-white text-gray-500 flex items-center justify-center transition-colors"
    >
      {social.icon}
    </a>
  )
}

function SitemapColumn({ col }) {
  return (
    <div>
      <Paragraph size="xs" className="font-semibold uppercase tracking-widest !text-gray-400 mb-3">
        {col.heading}
      </Paragraph>
      <ul className="space-y-2">
        {col.links.map(link => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-gray-500 hover:text-brand-bright transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex gap-12">
          <div className="flex flex-col gap-4 shrink-0">
            <img src={tfpaLogo} alt="TFPA" className="h-10 w-auto self-start" />
            <div className="flex gap-2">
              {SOCIALS.map(s => <SocialLink key={s.label} social={s} />)}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-4 gap-6">
            {SITEMAP.map(col => <SitemapColumn key={col.heading} col={col} />)}
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 py-3 text-center">
        <Paragraph size="xs" className="!text-gray-400 !mb-0">
          สงวนลิขสิทธิ์ 2560 สมาคมนักวางแผนการเงินไทย<br />
          CFP®, CERTIFIED FINANCIAL PLANNER™ are trademarks owned outside the U.S. by Financial Planning Standards Board Ltd.<br />
          Thai Financial Planners Association is the marks licensing authority for the CFP marks in Thailand
        </Paragraph>
      </div>

    </footer>
  )
}

export default Footer
