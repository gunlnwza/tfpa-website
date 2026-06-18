import { useState, useEffect } from 'react'
import PageLayout from '../../components/layout/PageLayout'
import MainContainer from '../../components/layout/MainContainer'
import Divider from '../../components/ui/Divider'
import Heading from '../../components/ui/Heading'
import ImgPlaceholder from '../../components/ui/ImgPlaceholder'
import SearchBar from '../../components/ui/SearchBar'
import Pagination from '../../components/ui/Pagination'
import NewsHighlightCarousel from '../../features/news/NewsHighlightCarousel'
import { TYPE_BADGE, TYPE_LABEL, typeChips, searchSuggestions, upcomingEvents, pastEvents } from '../../data/news'

const PAGE_SIZE = 5

function EventCards() {
  return (
    <div>
      <Heading level={2} className="mb-4">กำลังจะมาถึง</Heading>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {upcomingEvents.map((item, i) => (
          <a
            key={i}
            href="#"
            className="flex flex-col border border-gray-200 rounded-lg hover:border-brand-bright hover:shadow-sm transition-all shrink-0 w-64 overflow-hidden"
          >
            <ImgPlaceholder className="h-28" />
            <div className="flex flex-col gap-1.5 p-4">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${TYPE_BADGE[item.type]}`}>
                  {TYPE_LABEL[item.type]}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <span className="text-sm font-medium text-gray-800 leading-snug">{item.title}</span>
              <span className="text-xs text-gray-500 line-clamp-2">{item.desc}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

function ContentList({ query }) {
  const [page, setPage] = useState(1)

  useEffect(() => { setPage(1) }, [query])

  const q = query.trim().toLowerCase()
  const filtered = pastEvents.filter(item =>
    !q ||
    item.title.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    TYPE_LABEL[item.type].includes(q)
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-4">
      <Heading level={2}>กิจกรรมที่ผ่านมา</Heading>

      <ol className="divide-y divide-gray-100">
        {visible.length === 0 && (
          <li className="py-10 text-center text-gray-400 text-sm">ไม่พบเนื้อหาที่ตรงกัน</li>
        )}
        {visible.map((item, i) => (
          <li key={i}>
            <a href="#" className="flex gap-4 py-4 px-2 hover:bg-gray-50 rounded-lg transition-colors group">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${TYPE_BADGE[item.type]}`}>
                    {TYPE_LABEL[item.type]}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <div className="font-medium text-gray-800 text-sm group-hover:text-brand-bright transition-colors">
                  {item.title}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.desc}</div>
              </div>
            </a>
          </li>
        ))}
      </ol>

      <Pagination page={page} totalPages={totalPages} onPage={setPage} />
    </div>
  )
}

function NewsPage() {
  const [query, setQuery] = useState('')
  const isSearching = query.trim().length > 0

  return (
    <PageLayout>
      <MainContainer>
        <SearchBar
          title="ข่าวสาร"
          suggestions={searchSuggestions}
          chips={typeChips.map(c => ({ label: c.label, icon: c.icon }))}
          onQuery={setQuery}
        />
        {!isSearching && (
          <>
            <Divider />
            <NewsHighlightCarousel />
            <Divider />
            <EventCards />
          </>
        )}
        <Divider />
        <ContentList query={query} />
      </MainContainer>
    </PageLayout>
  )
}

export default NewsPage
