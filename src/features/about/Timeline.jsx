import milestones from '../../data/milestones'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'

function TimelineCard({ m }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm max-w-xs text-right overflow-hidden space-y-1">
      {m.img && <img src={m.img} alt={m.title} className="w-full h-24 object-contain object-center border-b border-gray-100" />}
      <div className="p-4 space-y-1">
        <Paragraph size="xs" className="!text-brand-blue">{m.year}</Paragraph>
        <Heading level={3}>{m.title}</Heading>
        <Paragraph size="sm">{m.body}</Paragraph>
      </div>
    </div>
  )
}

function EmptySpace() {
  return <div className="w-8 h-0.5 bg-gray-200 shrink-0" />
}

// For saying continual development
function LastTimelineCard({ m }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-10 bg-gray-200" />
      <div className="w-3 h-3 rounded-full bg-brand-bright border-2 border-white ring-2 ring-brand-bright z-10" />
      <div className="w-0.5 h-6 bg-gray-200" />
      <div className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm text-center space-y-1">
        <Paragraph size="xs" className="!text-brand-blue">{m.year}</Paragraph>
        <Heading level={3}>{m.title}</Heading>
        <Paragraph size="sm">{m.body}</Paragraph>
      </div>
    </div>
  )
}

function LineNodeLine({ hideTopLine=false }) {
  return (
    <>
      <div className={`w-0.5 flex-1 ${hideTopLine ? 'bg-transparent' : 'bg-gray-200'}`} />
      <div className="w-3 h-3 rounded-full bg-brand-bright border-2 border-white ring-2 ring-brand-bright shrink-0 z-10" />
      <div className="w-0.5 flex-1 bg-gray-200" />
    </>
  )
}

function TimelineRow({
  milestone,
  index,
  lastIdx
}) {
  const isFirst = index === 0
  const isLast  = index === lastIdx
  const isLeft  = index % 2 === 0

  if (isLast) {
    return <LastTimelineCard m={milestone} />
  }

  return (
    <div className="grid grid-cols-[1fr_auto_1fr]">
      {/* place content in left slot if `isLeft` */}
      <div className="flex items-center justify-end py-5">
        {isLeft && <><TimelineCard m={milestone}/><EmptySpace /></>}
      </div>

      {/* center: line-node-line */}
      <div className="flex flex-col items-center">
        <LineNodeLine hideTopLine={isFirst} />
      </div>

      {/* place content in right slot if `!isLeft` */}
      <div className="flex items-center justify-start py-5">
        {!isLeft && <><EmptySpace /><TimelineCard m={milestone}/></>}
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <div>
      {milestones.map((m, i) => (
        <TimelineRow
          key={i}
          milestone={m}
          index={i}
          lastIdx={milestones.length - 1}
        />
      ))}
    </div>
  )
}
