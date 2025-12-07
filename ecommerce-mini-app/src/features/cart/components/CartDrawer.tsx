import { useCartStore } from '../store/useCartStore';

export default function CartDrawer() {
  const { items, isOpen, closeCart, increase, decrease, removeItem } = useCartStore();
  const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] max-w-[380px] md:max-w-[420px] bg-white shadow-xl p-6 flex flex-col 
         transition-transform duration-300 ease-drawer ${
           isOpen ? 'translate-x-0' : 'translate-x-full'
         }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={closeCart} className="text-gray-600 text-lg">
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {items.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}

          {items.map(item => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <img src={item.image} className="h-16 w-16 object-contain" />

              <div className="flex-1">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-500">${item.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center mt-2 gap-2">
                  <button onClick={() => decrease(item.id)} className="px-2 border">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item.id)} className="px-2 border">
                    +
                  </button>
                </div>
              </div>

              <button onClick={() => removeItem(item.id)} className="text-red-600 text-sm">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6">
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => alert('Checkout not implemented')}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
