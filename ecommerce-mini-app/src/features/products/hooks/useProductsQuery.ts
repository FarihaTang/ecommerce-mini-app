import { useQuery } from '@tanstack/react-query';
import { fetchProducts, type Product } from '../api/productApi';

export function useProductsQuery() {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
}
