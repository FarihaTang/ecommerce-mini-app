type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
};
export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => {
          onPageChange(page - 1);
        }}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Prev
      </button>
      {/* Page numbers */}
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 border rounded ${page === p ? 'bg-blue-600 text-white' : ''}`}
        >
          {p}
        </button>
      ))}
      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => {
          onPageChange(page + 1);
        }}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
