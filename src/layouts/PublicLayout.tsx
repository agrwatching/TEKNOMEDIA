// src/layouts/PublicLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Digunakan untuk menampilkan konten child route
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PublicLayout: React.FC = () => {
  return (
    // Menggunakan flex-col untuk memastikan footer selalu berada di bawah
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      
      {/* 1. Header (Navbar) - Fixed di atas */}
      <Header />
      
      {/* 2. Main Content Area */}
      {/* flex-grow memastikan konten mengisi semua ruang yang tersisa */}
      <main className="flex-grow">
        {/* Outlet adalah tempat di mana komponen halaman (seperti HomePage.tsx) 
          akan di-render oleh React Router DOM.
        */}
        <Outlet /> 
      </main>
      
      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;