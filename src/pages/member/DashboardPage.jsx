import PageLayout from '../../components/layout/PageLayout'
import PlannerCard from '../../features/planning/PlannerCard'
import DashboardTabs from '../../features/dashboard/DashboardTabs'

const MEMBER = {
  name: 'นายสมชาย วางแผนดี',
  location: 'กรุงเทพฯ',
  exp: 8,
  avatar: 'สช',
}

export default function DashboardPage() {
  return (
    <PageLayout loggedIn>
      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-6 items-start">
        <div className="w-64 shrink-0 top-24">
          <PlannerCard p={MEMBER} />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <DashboardTabs />
        </div>
      </div>
    </PageLayout>
  )
}
