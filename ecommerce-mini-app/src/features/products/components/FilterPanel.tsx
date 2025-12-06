import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

type FilterPanelProps = {
  onSearch: (keyword: string) => void;
  onCategoryChange: (category: string) => void;
  categories: string[];
  onSortChange: (sort: 'asc' | 'desc' | 'none') => void;
};

export function FilterPanel({
  onSearch,
  onCategoryChange,
  categories,
  onSortChange,
}: FilterPanelProps) {
  const [keyword, setKeyword] = useState('');

  const debouncedValue = useDebounce(keyword);
  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full md:w-60"
      ></input>
      {/* Category Filter*/}
      <select
        defaultValue="all"
        onChange={e => onCategoryChange(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="all">All Category</option>
        {categories.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {/* Price Sorting */}
      <select
        defaultValue={'none'}
        className="border rounded-lg px-4 py-2"
        onChange={e => onSortChange(e.target.value as 'asc' | 'desc' | 'none')}
      >
        <option value={'none'}>Sort By Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>
    </div>
  );
}
