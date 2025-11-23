// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout'; 
import AdminLayout from './layouts/AdminLayout'; // ⬅️ Import Admin Layout
import HomePage from './pages/Index'; 
import AdminDashboard from './pages/admin/Dashboard'; // ⬅️ Import Admin Dashboard
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          {/* Tambahkan public routes lain di sini */}
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} /> 
          {/* Tambahkan admin routes lain di sini, misal: */}
          {/* <Route path="users" element={<AdminUsersPage />} /> */}
        </Route>

        {/* 404 CATCH-ALL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;