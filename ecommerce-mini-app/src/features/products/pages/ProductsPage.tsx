import { useProductsQuery } from '../hooks/useProductsQuery';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';
import { useCategoriesQuery } from '../hooks/useCategoriesQuery';
import { FilterPanel } from '../components/FilterPanel';
import { Pagination } from '@/components/Pagination';
import { usePagination } from '@/hooks/usePagination';
import { SkeletonCard } from '@/components/SkeletonCard';
export default function ProductsPage() {
  const { data, isLoading, isError } = useProductsQuery();

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState<'asc' | 'desc' | 'none'>('none');

  let filtered = [...(data ?? [])];
  if (keyword.trim()) {
    filtered = data?.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase())) ?? [];
  }
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category) ?? [];
  }
  if (sort === 'asc') {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'desc') {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  const { data: categories = [] } = useCategoriesQuery();

  // Pagination
  const { page, pageSize, setPage } = usePagination();
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginatedData = filtered.slice((page - 1) * pageSize, page * pageSize);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i}></SkeletonCard>
          ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-red-600">Failed to load products.</p>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Products</h1>
      {/* Filters */}
      <FilterPanel
        categories={categories}
        onCategoryChange={setCategory}
        onSearch={setKeyword}
        onSortChange={setSort}
      ></FilterPanel>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedData?.map(product => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={p => {
          setPage(p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      ></Pagination>
    </div>
  );
}
