import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../api/productApi';

export function useCategoriesQuery() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
}
