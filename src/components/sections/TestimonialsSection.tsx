// src/components/sections/TestimonialsSection.tsx
import React from 'react';
import { Quote } from 'lucide-react'; 

// Data Testimoni Klien
const testimonials = [
  {
    quote: 'Instalasi Fiber Optik untuk kantor baru kami berjalan sangat cepat dan hasilnya melebihi ekspektasi. Koneksi stabil 24 jam penuh!',
    name: 'Andi Prawiro',
    role: 'IT Manager, PT Global Sinergi',
    avatar: 'https://picsum.photos/id/1027/80/80', // Placeholder foto klien
    logo: 'Logo Sinergi', // Placeholder logo perusahaan
  },
  {
    quote: 'Kami menggunakan paket WiFi Mesh untuk gudang kami yang luas. Tidak ada lagi zona mati, semua proses logistik berjalan lancar.',
    name: 'Citra Dewi',
    role: 'Operation Lead, Toko Maju Jaya',
    avatar: 'https://picsum.photos/id/1025/80/80',
    logo: 'Logo Maju Jaya',
  },
  {
    quote: 'Konsultasi jaringannya sangat membantu. Mereka merancang topologi yang benar-benar efisien dan ramah budget. Sangat direkomendasikan.',
    name: 'Rahmat Hidayat',
    role: 'Owner, Kedai Kopi Hangat',
    avatar: 'https://picsum.photos/id/1011/80/80',
    logo: 'Logo Kedai Hangat',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Apa Kata Klien Kami?
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Dipercaya oleh Perusahaan dan Bisnis Terbaik
          </p>
        </div>

        {/* Grid Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-600 transition duration-300 hover:shadow-2xl"
            >
              <Quote size={32} className="text-indigo-500 mb-4" />
              
              <p className="text-lg italic text-gray-700">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-base font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-indigo-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;