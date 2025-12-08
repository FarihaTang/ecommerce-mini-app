type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
};
export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (page <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    if (page >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', page - 1, page, page + 1, '...', totalPages];
  };

  const pages = getVisiblePages();
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => {
          onPageChange(page - 1);
        }}
        className={`px-3 py-1 border rounded text-sm ${
          page === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'
        }`}
      >
        Prev
      </button>
      {/* Page numbers */}
      {pages.map(p =>
        p === '...' ? (
          <span key={p} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(Number(p))}
            className={`px-3 py-1 border rounded ${
              page === p
                ? 'bg-blue-600 text-white border-blue-600 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            {p}
          </button>
        )
      )}
      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => {
          onPageChange(page + 1);
        }}
        className={`px-3 py-1 border rounded text-sm ${
          page === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'
        }`}
      >
        Next
      </button>
    </div>
  );
}
