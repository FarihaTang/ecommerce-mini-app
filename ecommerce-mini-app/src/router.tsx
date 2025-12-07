import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import ProductsPage from '@/features/products/pages/ProductsPage';
import ProductDetailPage from '@/features/products/pages/ProductDetailPage';
import CartPage from '@/features/cart/pages/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    children: [
      { path: '/', element: <ProductsPage></ProductsPage> },
      { path: '/product/:id', element: <ProductDetailPage></ProductDetailPage> },
      { path: '/cart', element: <CartPage></CartPage> },
    ],
  },
]);
