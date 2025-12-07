import { useCartStore } from '../store/useCartStore';
import type { CartItem, CartState } from '../types/cartTypes';
export default function CartPage() {
  const { decrease, increase, removeItem } = useCartStore();
  const items = useCartStore((state: CartState) => state.items);
  const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.price, 0);
  if (items.length === 0) {
    return <p className="p-6 text-gray-600">Your cart is empty.</p>;
  }
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>

      {items.map((item: CartItem) => (
        <div key={item.id} className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <img src={item.image} className="h-16 w-16 object-contain" />
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => decrease(item.id)} className="px-2 border">
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => increase(item.id)} className="px-2 border">
              +
            </button>

            <button onClick={() => removeItem(item.id)} className="ml-4 text-red-600">
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}
