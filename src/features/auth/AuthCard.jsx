import CenterLogo from './CenterLogo'
import Heading from '../../components/ui/Heading'

const SIZE = { sm: 'max-w-md', md: 'max-w-2xl' }

export default function AuthCard({ title, headerRight, size = 'md', children }) {
  return (
    <div className="flex items-start justify-center py-16 px-4">
      <div className={`w-full ${SIZE[size]} mx-auto`}>
        <CenterLogo />
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {title && (
            <div className="flex items-center justify-between mb-6">
              <Heading level={1}>{title}</Heading>
              {headerRight}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
