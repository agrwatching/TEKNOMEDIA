// src/pages/Index.tsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection'; 
import AboutSection from '../components/sections/AboutSection';
import WhyUsSection from '../components/sections/WhyUsSection'; 
import ServicesSection from '../components/sections/ServicesSection'; 
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import TeamSection from '../components/sections/TeamSection';
import GaleriListSection from '../components/sections/GaleryTeam';
import PortalBeritaSection from '../components/sections/PortalBeritaSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection /> 
      <ServicesSection /> 
      <FeaturedProductsSection />  
      <TestimonialsSection /> 
      <TeamSection />
      <GaleriListSection />
      <PortalBeritaSection />
    </main>
  );
};

export default HomePage;