import Heading from "../../components/ui/Heading"
import Paragraph from "../../components/ui/Paragraph"

export default function StaffCard({ s }) {
  return (
    <div key={s.email} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3">
      <Heading level={3}>{s.topic}</Heading>

      <Paragraph size="sm">{s.desc}</Paragraph>
      
      <div className="flex items-center gap-3 pt-2">
        <img src={s.img} alt={s.alt} className="w-12 h-12 rounded-full object-cover shrink-0" />
        <div className="space-y-1">
          <Paragraph size="sm" className="text-gray-700">{s.name}</Paragraph>
          <div className="text-xs text-gray-500 space-y-0.5">
            <div><a href={`mailto:${s.email}`} className="hover:text-brand-bright">✉️ {s.email}</a></div>
            <div><a href="tel:020099393" className="hover:text-brand-bright">📞 {s.tel}</a></div>
          </div>
        </div>
      </div>

    </div>
  )
}
