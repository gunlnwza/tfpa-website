import { useState, useEffect } from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import MainContainer from '../../../components/layout/MainContainer'
import Divider from '../../../components/ui/Divider'
import SearchBar from '../../../components/ui/SearchBar'
import Pagination from '../../../components/ui/Pagination'
import PlannerCard from '../../../features/planning/PlannerCard'
import Paragraph from '../../../components/ui/Paragraph'
import { planners, specialties, searchSuggestions } from '../../../data/planners'

const PAGE_SIZE = 9


function PlannerCards({ query }) {
  const [page, setPage] = useState(1)

  useEffect(() => { setPage(1) }, [query])

  const q = query.trim().toLowerCase()
  const filtered = planners.filter(p =>
    !q ||
    p.name.includes(q) ||
    p.location.includes(q) ||
    p.specialty.includes(q)
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-6">
      <Paragraph size="sm">
        {filtered.length > 0 ? `พบ ${filtered.length} ท่าน` : 'ไม่พบผลลัพธ์'}
      </Paragraph>

      {visible.length === 0 ? (
        <Paragraph size="sm" className="py-16 text-center !text-gray-400">ไม่พบนักวางแผนการเงินที่ตรงกัน</Paragraph>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map(p => <PlannerCard key={p.id} p={p} />)}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onPage={setPage} />
    </div>
  )
}

function FindPlannerPage() {
  const [query, setQuery] = useState('')

  return (
    <PageLayout>
      <MainContainer>
        <SearchBar
          title="ค้นหาที่ปรึกษาการเงิน"
          subtitle="ค้นหานักวางแผนการเงิน CFP® ที่ผ่านการรับรองจาก TFPA"
          suggestions={searchSuggestions}
          chips={specialties.map(s => ({ label: s }))}
          onQuery={setQuery}
        />
        <Divider />
        <PlannerCards query={query} />
      </MainContainer>
    </PageLayout>
  )
}

export default FindPlannerPage
