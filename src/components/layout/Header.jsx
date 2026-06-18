import { Link } from 'react-router-dom'
import tfpaLogo from '../../assets/tfpa/main.png'
import navItems from '../../data/navItems'

function NavItem({ item }) {
  const hasChildren = item.children?.length > 0
  return (
    <li className="relative group">
      <Link
        to={item.href}
        className="block px-3 py-2 text-sm font-medium font-[Prompt] text-gray-700 hover:text-brand-bright whitespace-nowrap transition-colors"
      >
        {item.label}
        {hasChildren && (
          <span className="ml-1 text-xs opacity-60">▾</span>
        )}
      </Link>
      {hasChildren && (
        <ul className="absolute left-0 top-full mt-1 min-w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                className="block px-4 py-2 text-sm font-[Prompt] text-gray-600 hover:bg-blue-50 hover:text-brand-bright first:rounded-t-lg last:rounded-b-lg transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo — left */}
        <Link to="/" className="shrink-0">
          <img src={tfpaLogo} alt="TFPA" className="h-10 w-auto" />
        </Link>

        {/* Main nav — center */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </ul>
        </nav>

        {/* Login — right */}
        <Link
          to="/auth/login"
          className="shrink-0 px-4 py-2 text-sm font-semibold font-[Prompt] text-white bg-brand-bright hover:bg-[#1560a0] rounded-lg transition-colors"
        >
          ระบบสมาชิกนักวางแผน
        </Link>

      </div>
    </header>
  )
}

export default Header
