// src/pages/HomePage.tsx
import React from 'react';
// Anggap Anda sudah punya komponen ini:
import HeroSection from '../components/sections/HeroSection'; 
import AboutSection from '../components/sections/AboutSection';

// Import semua komponen section
import WhyUsSection from '../components/sections/WhyUsSection'; 
import ServicesSection from '../components/sections/ServicesSection'; 
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import ProductListSection from '../components/sections/ProductListSection';
import TestimonialsSection from '../components/sections/TestimonialsSection'; // <-- BARU
import TeamSection from '../components/sections/TeamSection'; // <-- Dipindahkan ke bawah Testimoni


const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      
      {/* 1. Mengapa Kami */}
      <WhyUsSection /> 
      
      {/* 2. Layanan Kami */}
      <ServicesSection /> 
      
      {/* 3. Produk Unggulan */}
      <FeaturedProductsSection /> 
      
      {/* 4. LIST PRODUK LENGKAP */}
      <ProductListSection /> 
      
      {/* 5. TESTIMONI (Social Proof) */}
      <TestimonialsSection /> 
      
      {/* 6. TIM KAMI (Personal Connection) */}
      <TeamSection /> 
      
      {/* Selanjutnya: CTA Final / Contact Section */}
    </main>
  );
};

export default HomePage;