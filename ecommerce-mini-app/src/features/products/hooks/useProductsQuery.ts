import { useQuery } from '@tanstack/react-query';
import { fetchProducts, type Product } from '../api/productPI';

export function useProductsQuery() {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
}
