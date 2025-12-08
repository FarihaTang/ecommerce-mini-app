import { useParams } from 'react-router-dom';
import { useProductQuery } from '../hooks/useProductQuery';
import { useCartStore } from '@/features/cart/store/useCartStore';
import { ProductDetailSkeleton } from '../components/ProductDetailSkeleton';

export default function ProductDetailPage() {
  const addItem = useCartStore(state => state.addItem);
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading, isError } = useProductQuery(productId);
  if (isLoading) return <ProductDetailSkeleton></ProductDetailSkeleton>;
  if (isError || !data) return <p className="p-4 text-red-600">Failed to load.</p>;
  return (
    <div>
      <button className="p-6 space-y-6 max-w-3xl mx-auto" onClick={() => history.back()}>
        ← Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img src={data.image} alt={data.title} className="max-h-96 object-contain" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="text-gray-600">{data.description}</p>

          <p className="text-3xl font-bold text-blue-600">${data.price}</p>

          <p className="text-sm text-gray-500 capitalize">Category: {data.category}</p>

          {/* Add to Cart - we will add Zustand later */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() =>
              addItem({
                id: data.id,
                title: data.title,
                price: data.price,
                image: data.image,
                quantity: 1,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
