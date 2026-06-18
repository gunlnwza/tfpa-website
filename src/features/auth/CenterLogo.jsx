import tfpaLogo from '../../assets/tfpa/main.png'

export default function CenterLogo() {
  return (
    <div className="flex justify-center mb-8">
      <img src={tfpaLogo} alt="TFPA" className="h-16 w-auto" />
    </div>
  )
}
