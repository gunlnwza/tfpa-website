import { Link } from 'react-router-dom'

const VARIANT = {
  primary:       'bg-brand-bright text-white hover:opacity-90 transition-opacity',
  outline:       'border border-brand-bright text-brand-bright hover:bg-blue-50 transition-colors',
  ghost:         'bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors',
  white:         'bg-white text-brand-bright hover:bg-blue-50 transition-colors',
  'outline-white': 'border border-white/40 text-white hover:bg-white/10 transition-colors',
}

const SIZE = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-sm',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  className = '',
  to,
  href,
  children,
  ...props
}) {
  const cls = `inline-block font-semibold ${SIZE[size]} ${pill ? 'rounded-full' : 'rounded-lg'} ${VARIANT[variant]} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href !== undefined) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
