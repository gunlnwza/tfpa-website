export default function Heading({ level = 1, children, className = '', style }) {
  const Tag = `h${level}`

  const styles = {
    1: 'text-3xl font-bold text-brand-bright',
    2: 'text-xl font-semibold text-brand-bright',
    3: 'font-semibold text-gray-800',
  }

  return (
    <Tag className={`font-[Prompt] ${styles[level] ?? styles[1]} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
