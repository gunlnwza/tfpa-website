const STEPS = ['ข้อมูลทั่วไป', 'ที่อยู่']

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function StepItem({ label, num, active, done, isLast }) {
  const dotClass = done ? 'bg-brand-green text-white'
    : active ? 'bg-brand-bright text-white'
    : 'bg-gray-100 text-gray-400'
  const labelClass = active ? 'text-brand-bright' : done ? 'text-brand-green' : 'text-gray-400'

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center gap-1">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${dotClass}`}>
          {done ? <CheckIcon /> : num}
        </div>
        <span className={`text-xs font-medium ${labelClass}`}>{label}</span>
      </div>
      {!isLast && <div className={`w-16 h-0.5 mx-2 mb-4 ${done ? 'bg-brand-green' : 'bg-gray-200'}`} />}
    </div>
  )
}

export default function StepIndicator({ step }) {
  return (
    <div className="flex items-center justify-center gap-0 mt-6">
      {STEPS.map((label, i) => (
        <StepItem
          key={i}
          label={label}
          num={i + 1}
          active={step === i + 1}
          done={step > i + 1}
          isLast={i === STEPS.length - 1}
        />
      ))}
    </div>
  )
}
