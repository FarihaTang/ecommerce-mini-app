import { useSearchParams } from 'react-router-dom';

export function usePagination(defaultPageSize = 8) {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get('page') || 1);
  const pageSize = Number(params.get('pageSize') || defaultPageSize);
  const setPage = (newPage: number) => {
    params.set('page', String(newPage));
    params.set('pageSize', String(pageSize));
    setParams(params);
  };
  return { page, pageSize, setPage };
}
