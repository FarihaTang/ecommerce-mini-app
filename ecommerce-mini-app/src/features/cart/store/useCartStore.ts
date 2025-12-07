import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, CartState } from '../types/cartTypes';

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],

      // drawer UI state
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (item: CartItem) => {
        const existing = get().items.find(i => i.id === item.id);
        if (existing) {
          return set({
            items: get().items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        }
        set({
          items: [...get().items, { ...item, quantity: 1 }],
        });
        // open cart
        get().openCart();
      },
      removeItem: (id: number) => {
        set({
          items: get().items.filter(i => i.id !== id),
        });
      },
      increase: (id: number) => {
        set({
          items: get().items.map(i => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
        });
      },
      decrease: (id: number) => {
        set({
          items: get()
            .items.map(i => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter(i => i.quantity > 0),
        });
      },
      clear: () => {
        set({ items: [] });
      },
      get totalItems() {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },
      get totalPrice() {
        return get().items.reduce((sum, i) => sum + i.quantity * i.price, 0);
      },
    }),
    { name: 'cart-storage' }
  )
);
