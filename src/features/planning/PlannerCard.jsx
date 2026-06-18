import Button from '../../components/ui/Button'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'

const SPECIALTY_BADGE = {
  'วางแผนเกษียณ':   'bg-brand-bright text-white',
  'วางแผนภาษี':     'bg-brand-green text-white',
  'ลงทุนและพอร์ต':  'bg-brand-yellow text-gray-900',
  'ประกันชีวิต':    'bg-[#e06c75] text-white',
  'วางแผนครอบครัว': 'bg-[#c678dd] text-white',
  'ชำระหนี้':       'bg-[#e5c07b] text-gray-900',
}

function PlannerCard({ p }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:border-brand-bright hover:shadow-sm transition-all">
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-3">
          {p.avatar && (
            <div className="w-12 h-12 rounded-full bg-brand-bright/10 text-brand-bright flex items-center justify-center font-bold text-sm shrink-0">
              {p.avatar}
            </div>
          )}
          <div className="min-w-0">
            {p.name && <Heading level={3}>{p.name}</Heading>}
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              {p.cert && (
                <span className="text-xs font-bold text-brand-bright bg-brand-bright/10 px-2 py-0.5 rounded">
                  {p.cert}
                </span>
              )}
              {p.location && (
                <Paragraph size="xs" className="flex items-center gap-1">
                  <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {p.location}
                </Paragraph>
              )}
            </div>
          </div>
        </div>

        {p.specialty && (
          <span className={`self-start text-xs font-semibold mt-1 mb-1 px-2 py-0.5 rounded ${SPECIALTY_BADGE[p.specialty] ?? 'bg-gray-100 text-gray-700'}`}>
            {p.specialty}
          </span>
        )}

        {p.highlights && (
          <ul className="text-xs text-gray-500 space-y-1 flex-1">
            {p.highlights.map((h, i) => (
              <li key={i} className="flex gap-1.5">
                <span className="text-brand-bright shrink-0">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-5 pb-5 flex items-center justify-between">
        {p.exp && <span className="text-xs text-gray-400">ประสบการณ์ {p.exp} ปี</span>}
        <Button href="#" size="sm" pill>ดูข้อมูล</Button>
      </div>
    </article>
  )
}

export default PlannerCard
