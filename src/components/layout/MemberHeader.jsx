import { Link } from 'react-router-dom'
import tfpaLogo from '../../assets/tfpa/main.png'

const memberNavItems = [
  { label: 'แดชบอร์ด', href: '/member' },
  { label: 'ข่าวสาร',   href: '/member/news' },
  { label: 'คู่มือ',     href: '/member/documentation' },
]

function NavItem({ item }) {
  return (
    <li>
      <Link
        to={item.href}
        className="block px-3 py-2 text-sm font-medium font-[Prompt] text-gray-700 hover:text-brand-bright whitespace-nowrap transition-colors"
      >
        {item.label}
      </Link>
    </li>
  )
}

function AvatarDropdown() {
  return (
    <ul className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 py-1">
      <li>
        <Link to="/member/profile" className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-brand-bright transition-colors">
          👤 ข้อมูลส่วนตัว
        </Link>
      </li>
      <li className="border-t border-gray-100 mt-1 pt-1">
        <Link to="/" className="flex items-center gap-2.5 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
          🚪 ออกจากระบบ
        </Link>
      </li>
    </ul>
  )
}

function AvatarButton() {
  return (
    <Link to="/member">
      <div className="relative group shrink-0 cursor-pointer">
        <div className="w-9 h-9 rounded-full bg-brand-bright text-white text-sm font-bold flex items-center justify-center hover:bg-[#1560a0] transition-colors select-none">
          สช
        </div>
        <AvatarDropdown />
      </div>
    </Link>
  )
}

function MemberHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        <Link to="/member" className="shrink-0">
          <img src={tfpaLogo} alt="TFPA" className="h-10 w-auto" />
        </Link>

        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center">
            {memberNavItems.map(item => (
              <NavItem key={item.href} item={item} />
            ))}
          </ul>
        </nav>

        <AvatarButton />

      </div>
    </header>
  )
}

export default MemberHeader
