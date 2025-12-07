import { Outlet } from 'react-router-dom';
import CartDrawer from './features/cart/components/CartDrawer';
import { useCartStore } from './features/cart/store/useCartStore';
export default function AppLayout() {
  const items = useCartStore(state => state.items);
  const openCart = useCartStore(state => state.openCart);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <>
      <button onClick={openCart} className="relative text-xl mt-3">
        🛒
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white px-1 rounded">
            {totalItems}
          </span>
        )}
      </button>
      <CartDrawer></CartDrawer>
      <div className="p-6 max-w-5xl">
        <Outlet></Outlet>
      </div>
    </>
  );
}
