// src/layouts/PublicLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;