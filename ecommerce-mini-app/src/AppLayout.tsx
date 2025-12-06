import { Outlet } from 'react-router-dom';
export default function AppLayout() {
  return (
    <div className="p-6 max-w-5xl">
      <Outlet></Outlet>
    </div>
  );
}
