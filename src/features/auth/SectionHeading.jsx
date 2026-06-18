import Heading from '../../components/ui/Heading'

export default function SectionHeading({ children }) {
  return (
    <Heading level={3} className="text-sm !text-brand-bright uppercase tracking-wide mt-6 mb-3 pb-1 border-b border-gray-100">
      {children}
    </Heading>
  )
}
