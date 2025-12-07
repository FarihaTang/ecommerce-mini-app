import { useQuery } from '@tanstack/react-query';
import { fetchProduct, type Product } from '../api/productApi';

export function useProductQuery(id: number) {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });
}
