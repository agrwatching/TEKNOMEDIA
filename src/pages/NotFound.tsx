// src/pages/NotFound.tsx
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-lg mb-8">Maaf, halaman yang Anda cari tidak ada.</p>
      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default NotFound;