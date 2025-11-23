// src/layouts/AdminLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-white shadow-lg p-4 flex-shrink-0">
        <h2 className="text-xl font-bold text-primary mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin" className="block p-2 rounded hover:bg-muted transition-colors">Dashboard</a>
          <a href="/admin/users" className="block p-2 rounded hover:bg-muted transition-colors">Users</a>
          <a href="/admin/settings" className="block p-2 rounded hover:bg-muted transition-colors">Settings</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto">
        <header className="bg-white shadow-md p-4 sticky top-0 z-10">
          <p className="text-gray-600">Selamat datang, Admin!</p>
        </header>
        <main className="p-8">
          {/* Outlet akan merender Dashboard.tsx atau halaman Admin lainnya */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;