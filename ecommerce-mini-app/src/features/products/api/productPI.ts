import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await axios.get<Product[]>(API_URL);
  return res.data;
}

export async function fetchCategories(): Promise<string[]> {
  const res = await axios.get<string[]>('https://fakestoreapi.com/products/categories');
  return res.data;
}
