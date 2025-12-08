# 🛍️ E-commerce Mini App

A modern React + TypeScript front-end shopping experience, built as part of my portfolio.  
This project focuses on clean architecture, responsive UI, state management, and real-world
e-commerce interactions.

Live Demo: (your Vercel URL)

---

## 🚀 Tech Stack

- **React 19** (Server-friendly, modern APIs)
- **TypeScript** (Strict mode, fully typed components)
- **React Router v7** (Client-side navigation & nested layouts)
- **Zustand** (Cart state management)
- **React Query** (Data fetching, caching, mutations)
- **Tailwind CSS v4** (Responsive UI, animations)
- **FakeStore API** for product data

---

## ✨ Features

### 🛒 Shopping Experience

- Product listing with filtering & search
- Detailed product page
- Add to Cart / Remove / Quantity updates
- Persistent cart using Zustand store
- Cart Drawer with smooth animations (slide-in, overlay blur, ESC close)

### 📱 Fully Responsive Layout

- Mobile-first grid (2 → 3 → 4 → 5 columns)
- Drawer behavior adapts to screen size
- Flexible product image scaling

### ⚡ Modern UX Enhancements

- Skeleton loading states (cards & details)
- Pagination with ellipsis (`1 ... 4 5 6 ... 10`)
- Error state with Retry logic
- Smooth animations with Tailwind transitions

---

## 🧱 Project Structure

src/
├── components/ # Reusable UI components
├── features/
│ ├── products/ # Product list, detail, API
│ ├── cart/ # Zustand store + drawer
├── hooks/ # Shared hooks
├── router.tsx # App routes
├── AppLayout.tsx # Layout with cart + outlet

---

## 🏗️ Architecture Decisions

### **React Query over manual fetch**

- Automatic caching
- Built-in stale-while-revalidate
- Mutation support for Add/Edit/Delete

### **Zustand for cart state**

- Minimal and predictable
- Avoids prop drilling
- Excellent performance

### **Tailwind v4**

- JIT utility engine
- Animation utilities
- Responsive design without custom CSS

---

## 📸 Screenshots

_(Add later after deployment)_

---

## 🧪 Future Improvements

- Checkout page
- Product gallery + zoom
- Wishlist support
- Dark mode

---

## 👩‍💻 Author

**Fariha** — Front-end Developer  
Portfolio: (your portfolio link)  
LinkedIn: (your LinkedIn profile)
