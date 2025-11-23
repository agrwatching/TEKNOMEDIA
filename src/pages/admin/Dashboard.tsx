// src/pages/admin/Dashboard.tsx
import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Dashboard Administrasi</h1>
      <div className="p-6 bg-white rounded-lg shadow-soft">
        <p className="text-lg text-muted-foreground">
          Ini adalah area yang aman dan terproteksi untuk mengelola seluruh platform Teknomedia.
        </p>
        <p className="mt-4">Segera tambahkan fitur manajemen pengguna, konten, dan statistik di sini!</p>
      </div>
      {/* Tambahkan Widget dan Statistik di sini */}
    </div>
  );
};

export default AdminDashboard;