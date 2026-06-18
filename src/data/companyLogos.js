const logoModules = import.meta.glob('../assets/company_members/*.png', { eager: true })

const companyLogos = Object.entries(logoModules).map(([path, mod]) => ({
  src: mod.default,
  alt: path.split('/').pop().replace('.png', '').replace(/_/g, ' '),
}))

export default companyLogos
