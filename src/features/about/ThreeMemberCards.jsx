import aboutStats from '../../data/aboutStats'
import Paragraph from '../../components/ui/Paragraph'

export default function ThreeMemberCards() {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${aboutStats.length} gap-6 py-4`}>
      {aboutStats.map((s) => (
        <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center space-y-2">
          <Paragraph size="sm">{s.label}</Paragraph>
          <Paragraph className="text-3xl !font-bold !text-brand-bright">{s.number}</Paragraph>
        </div>
      ))}
    </div>
  )
}
