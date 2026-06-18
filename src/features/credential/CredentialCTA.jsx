import Button from '../../components/ui/Button'
import Heading from '../../components/ui/Heading'
import Paragraph from '../../components/ui/Paragraph'

const CTA_VARIANT = { primary: 'white', ghost: 'outline-white' }

function CTAButton({ action, variant }) {
  const v = CTA_VARIANT[variant]
  if (action.to) return <Button to={action.to} variant={v} pill>{action.label}</Button>
  return <Button href={action.href ?? '#'} variant={v} pill>{action.label}</Button>
}

export function CredentialCTA({ eyebrow, heading, subtitle, primaryAction, secondaryAction }) {
  return (
    <div className="bg-brand-bright rounded-2xl p-8 text-center space-y-4">
      {eyebrow && <Paragraph size="sm" className="!text-white/70">{eyebrow}</Paragraph>}
      <Heading level={2} className="text-2xl !font-bold !text-white">{heading}</Heading>
      {subtitle && <Paragraph size="sm" className="!text-white/70">{subtitle}</Paragraph>}
      <div className="flex justify-center gap-3 flex-wrap pt-2">
        <CTAButton action={primaryAction} variant="primary" />
        {secondaryAction && <CTAButton action={secondaryAction} variant="ghost" />}
      </div>
    </div>
  )
}
