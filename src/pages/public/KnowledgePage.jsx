import { useState, useEffect } from 'react'
import PageLayout from '../../components/layout/PageLayout'
import MainContainer from '../../components/layout/MainContainer'
import Divider from '../../components/ui/Divider'
import Heading from '../../components/ui/Heading'
import KnowledgeCard from '../../components/ui/KnowledgeCard'
import SearchBar from '../../components/ui/SearchBar'
import Pagination from '../../components/ui/Pagination'
import { TYPE_BADGE, categories, quickQA, featured, contentItems } from '../../data/knowledge'

// TODO:
/*
Searching + Filtering behavior
Pagination
*/

const PAGE_SIZE = 5


function Highlight() {
  return (
    <div className="space-y-10">

      <div>
        <Heading level={2} className="mb-4">ความรู้แนะนำ</Heading>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
          {featured.map((item, i) => (
            <KnowledgeCard key={i} item={item} className="shrink-0 w-70" />
          ))}
        </div>
      </div>
    </div>
  )
}

function ContentList({ query }) {
  const [page, setPage] = useState(1)

  useEffect(() => { setPage(1) }, [query])

  const q = query.trim().toLowerCase()
  const filtered = contentItems.filter(item =>
    !q ||
    item.title.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-4">
      <Heading level={2}>เนื้อหาทั้งหมด</Heading>

      <ol className="divide-y divide-gray-100">
        {visible.length === 0 && (
          <li className="py-10 text-center text-gray-400 text-sm">ไม่พบเนื้อหาที่ตรงกัน</li>
        )}
        {visible.map((item, i) => (
          <li key={i}>
            <a
              href="#"
              className="flex gap-4 py-4 px-2 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div className="text-2xl w-8 text-center shrink-0 mt-0.5">{item.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${TYPE_BADGE[item.type]}`}>
                    {item.label}
                  </span>
                  <span className="text-xs text-brand-bright">{item.category}</span>
                </div>
                <div className="font-medium text-gray-800 text-sm group-hover:text-brand-bright transition-colors">
                  {item.title}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.desc}</div>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap shrink-0 self-start pt-1">{item.meta}</div>
            </a>
          </li>
        ))}
      </ol>

      <Pagination page={page} totalPages={totalPages} onPage={setPage} />
    </div>
  )
}

function KnowledgePage() {
  const [query, setQuery] = useState('')
  const isSearching = query.trim().length > 0

  return (
    <PageLayout>
      <MainContainer>
        <SearchBar
          title="มุมความรู้การเงิน"
          suggestions={quickQA}
          chips={categories.map(c => ({ label: c.name, icon: c.icon }))}
          onQuery={setQuery}
        />
        {!isSearching && (
          <>
            <Divider />
            <Highlight />
          </>
        )}
        <Divider />
        <ContentList query={query} />
      </MainContainer>
    </PageLayout>
  )
}

export default KnowledgePage
