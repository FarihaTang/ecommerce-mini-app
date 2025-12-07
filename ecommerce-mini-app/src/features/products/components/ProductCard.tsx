import { useNavigate } from 'react-router-dom';
import { type Product } from '../api/productApi';

type ProductCardProps = {
  product: Product;
};
export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(`/product/${product.id}`)}
      className="text-left border rounded-xl bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col gap-3"
    >
      <div className="w-full h-40 felx items-center justify-center">
        <img src={product.image} alt={product.title} className="max-h-full object-contain"></img>
      </div>
      <div className="felx flex-col gap-2">
        <h2 className="text-sm font-medium text-gray-900 line-clamp-2">{product.title}</h2>
        <p className="text-base font-semibold text-blue-600">${product.price.toFixed(2)}</p>
        <p className="text-xs text-gray-500 capitalize">{product.category}</p>
      </div>
    </button>
  );
}
