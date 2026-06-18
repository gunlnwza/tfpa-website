const base = 'w-full h-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-[Athiti] text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-bright/20 focus:border-brand-bright transition-colors'

export default function FormInput({ as: Tag = 'input', className = '', ...props }) {
  return <Tag className={`${base} ${className}`} {...props} />
}
