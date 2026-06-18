import Paragraph from './Paragraph'

export default function FormField({ label, hint, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="block text-sm font-medium font-[Athiti] text-gray-700">{label}</label>
      {hint && <Paragraph size="sm">{hint}</Paragraph>}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  )
}
