const sizes = {
  base: 'text-base text-gray-600',
  sm:   'text-sm text-gray-500',
  xs:   'text-xs text-gray-500',
}

export default function Paragraph({ children, size = 'base', className = '' }) {
  return <p className={`font-[Athiti] font-medium ${sizes[size]} ${className}`}>{children}</p>
}
