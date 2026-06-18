import { Link } from 'react-router-dom'

const STEPS = [
  { n: 1, label: 'อบรม',        to: '/credential/study'    },
  { n: 2, label: 'สอบ',         to: '/credential/exam'     },
  { n: 3, label: 'ขึ้นทะเบียน', to: '/credential/validate' },
  { n: 4, label: 'ต่ออายุ',     to: '/credential/renewal'  },
]

function CredentialPath({ active = 0 }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1 text-xs">
        <Link to="/credential" className="text-brand-bright hover:underline">คุณวุฒิ CFP®</Link>
        {active > 0 && (
          <>
            <span className="text-gray-300">›</span>
            <span className="text-gray-500">{STEPS.find(s => s.n === active)?.label}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-1 overflow-x-auto pb-1">
        {STEPS.map((s, i) => (
          <div key={s.n} className="flex items-center gap-1 shrink-0">
            {i > 0 && <div className="w-6 h-px bg-gray-200 shrink-0" />}
            <Link
              to={s.to}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                s.n === active
                  ? 'bg-brand-bright border-brand-bright text-white font-semibold'
                  : s.n < active
                  ? 'border-brand-green text-brand-green bg-green-50'
                  : 'border-gray-200 text-gray-500 hover:border-brand-bright hover:text-brand-bright'
              }`}
            >
              <span className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${
                s.n === active ? 'bg-white/30 text-white'
                  : s.n < active ? 'bg-brand-green text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {s.n < active ? '✓' : s.n}
              </span>
              {s.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CredentialPath
