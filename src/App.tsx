// src/App.tsx (Kode Lengkap yang Diperbarui)

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout'; 
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/Index'; 
import AdminDashboard from './pages/admin/Dashboard';
import NotFound from './pages/NotFound';
import ContactPage from './pages/ContactPage'; // Pastikan ini diimpor

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* === PUBLIC ROUTES (Menggunakan PublicLayout) === */}
        <Route path="/" element={<PublicLayout />}>
          {/* Rute Utama / (Home Page) */}
          <Route index element={<HomePage />} />
          
          {/* Rute /contact (Halaman Kontak) */}
          <Route path="contact" element={<ContactPage />} /> 
          
          {/* Anda bisa menambahkan rute publik lainnya di sini, contoh: */}
          {/* <Route path="about" element={<AboutPage />} /> */}
        </Route>

        {/* === ADMIN ROUTES (Menggunakan AdminLayout) === */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} /> 
          {/* Tambahkan rute admin lainnya di sini */}
        </Route>

        {/* === 404 CATCH-ALL === */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;