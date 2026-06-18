function getPages(page, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)

  const pages = []
  const addPage = n => pages.push(n)
  const addEllipsis = () => pages.push('…')

  addPage(1)

  if (page <= 4) {
    for (let i = 2; i <= Math.min(5, totalPages - 1); i++) addPage(i)
    addEllipsis()
  } else if (page >= totalPages - 3) {
    addEllipsis()
    for (let i = Math.max(2, totalPages - 4); i <= totalPages - 1; i++) addPage(i)
  } else {
    addEllipsis()
    for (let i = page - 1; i <= page + 1; i++) addPage(i)
    addEllipsis()
  }

  addPage(totalPages)
  return pages
}

function Pagination({ page, totalPages, onPage }) {
  if (totalPages <= 1) return null

  const pages = getPages(page, totalPages)

  return (
    <div className="flex items-center justify-center gap-1.5 pt-4">
      <button
        type="button"
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-brand-bright hover:text-brand-bright disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="หน้าก่อนหน้า"
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPage(p)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium border transition-colors ${
              p === page
                ? 'bg-brand-bright text-white border-brand-bright'
                : 'border-gray-200 text-gray-600 hover:border-brand-bright hover:text-brand-bright'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-brand-bright hover:text-brand-bright disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="หน้าถัดไป"
      >
        ›
      </button>
    </div>
  )
}

export default Pagination
