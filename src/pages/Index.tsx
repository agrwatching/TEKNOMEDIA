// src/pages/Index.tsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection'; 
import AboutSection from '../components/sections/AboutSection';

import WhyUsSection from '../components/sections/WhyUsSection'; 
import ServicesSection from '../components/sections/ServicesSection'; 
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import ProductListSection from '../components/sections/ProductListSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import TeamSection from '../components/sections/TeamSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection /> 
      <ServicesSection /> 
      <FeaturedProductsSection /> 
      <ProductListSection /> 
      <TestimonialsSection /> 
      <TeamSection /> 
    </main>
  );
};

export default HomePage;