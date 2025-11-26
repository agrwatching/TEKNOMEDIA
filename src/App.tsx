// src/App.tsx (Kode Lengkap yang Diperbarui)

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout'; 
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/Index'; 
import AdminDashboard from './pages/admin/Dashboard';
import AdminUser from './pages/admin/UserManagment';
import AdminSettings from './pages/admin/SettingManagement';
import NotFound from './pages/NotFound';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUser />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;