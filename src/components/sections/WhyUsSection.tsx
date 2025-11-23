// src/components/sections/WhyUsSection.tsx
import React from 'react';
import { Rocket, Code, Handshake } from 'lucide-react'; 

// Data Keunggulan Perusahaan Anda
const advantages = [
  {
    icon: Rocket, 
    title: 'Solusi Kustom & Inovatif',
    description: 'Kami tidak menawarkan solusi siap pakai. Setiap proyek dikerjakan dari nol, disesuaikan dengan kebutuhan unik dan tujuan bisnis Anda.',
  },
  {
    icon: Code,
    title: 'Teknologi Terkini (React, TS, SWC)',
    description: 'Dibangun di atas tumpukan teknologi modern dan tercepat, menjamin kinerja tinggi dan skalabilitas jangka panjang.',
  },
  {
    icon: Handshake,
    title: 'Dukungan Penuh & Transparansi',
    description: 'Komunikasi terbuka dari awal hingga akhir. Tim kami siap memberikan dukungan teknis dan konsultasi setelah peluncuran.',
  },
];

const WhyUsSection: React.FC = () => {
  // Ganti URL ini dengan gambar latar belakang Anda
  const backgroundImage = 'https://picsum.photos/id/1015/1600/900'; 

  return (
    // 1. Container Luar: Menggunakan bg-fixed untuk Parallax
    <section 
      id="why-us" 
      className="relative py-20 md:py-32 bg-cover bg-center bg-fixed" 
      style={{ 
        backgroundImage: `url('${backgroundImage}')`,
      }} 
    >
      
      {/* 2. OVERLAY HITAM OPACITY 50% */}
      {/* Ini berfungsi sebagai lapisan peredam agar teks putih di atasnya mudah dibaca */}
      <div className="bg-black bg-opacity-50 absolute inset-0 z-0"></div>
      
      {/* Konten Utama (z-index 10 agar berada di atas overlay) */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section (Teks Putih) */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-lg font-semibold text-indigo-400 uppercase tracking-wider">
            Keunggulan Kami
          </h2>
          <p className="mt-2 text-4xl font-extrabold sm:text-5xl">
            Mengapa Anda Harus Memilih <span className="text-indigo-400">Kami</span>?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto">
            Fokus kami adalah pada kualitas, inovasi, dan kemitraan jangka panjang yang didukung teknologi tercepat.
          </p>
        </div>

        {/* Grid Keunggulan (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {advantages.map((advantage, index) => (
            // Card: Latar belakang putih solid
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl transition duration-300 transform hover:shadow-2xl hover:scale-[1.03] text-center"
            >
              {/* Ikon */}
              <div className="mx-auto w-14 h-14 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-4 shadow-md">
                <advantage.icon size={30} />
              </div>
              
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {advantage.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;