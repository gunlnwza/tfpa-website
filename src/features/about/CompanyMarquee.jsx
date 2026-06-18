import companyLogos from '../../data/companyLogos'

function FogLeft() {
  return <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
}

function FogRight() {
  return <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
}

// sliding conveyor
export default function CompanyMarquee() {
  const doubled = [...companyLogos, ...companyLogos]

  return (
    <div className="relative overflow-hidden">
      <FogLeft />
      <FogRight />
      <div className="flex gap-8 w-max animate-marquee">
        {doubled.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto object-contain transition-all"
          />
        ))}
      </div>
    </div>
  )
}
