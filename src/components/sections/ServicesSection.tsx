// src/components/sections/ServicesSection.tsx
import React from 'react';
import { Wifi, Zap, Users, Headset } from 'lucide-react'; // Menggunakan ikon Lucide

// Data Layanan Jasa Anda
const services = [
  {
    icon: Wifi, 
    title: 'Instalasi Jaringan WiFi Skala Besar',
    description: 'Jasa pemasangan dan konfigurasi jaringan nirkabel (WiFi) untuk kantor, area publik, kampus, hingga gudang.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Zap,
    title: 'Pemasangan Infrastruktur Fiber Optik',
    description: 'Penyediaan dan penanaman kabel fiber optik untuk koneksi internet berkecepatan tinggi, stabil, dan minim latensi.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Solusi Jaringan Khusus Perusahaan',
    description: 'Layanan konsultasi dan implementasi topologi jaringan LAN/WAN yang aman, efisien, dan siap menghadapi pertumbuhan bisnis Anda.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Headset,
    title: 'Dukungan Teknis & Maintenance 24/7',
    description: 'Kontrak maintenance berkala dan dukungan teknis cepat untuk memastikan jaringan Anda beroperasi tanpa hambatan, kapan pun.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Layanan Utama
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Jasa Pemasangan dan Solusi Konektivitas Kami
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
            Dari instalasi nirkabel hingga infrastruktur fiber optik, kami menyediakan layanan lengkap untuk koneksi yang stabil dan cepat.
          </p>
        </div>

        {/* Grid Layanan (4 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            // Card untuk setiap Layanan
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-2xl hover:border-indigo-300"
            >
              {/* Ikon dengan warna dinamis */}
              <div className={`p-4 inline-flex items-center justify-center ${service.bg} ${service.color} rounded-full mb-6`}>
                <service.icon size={30} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
            >
                Konsultasi & Jadwalkan Survei
            </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;