import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../api/productPI';

export function useCategoriesQuery() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
}
