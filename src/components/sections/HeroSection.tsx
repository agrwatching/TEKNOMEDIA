// src/components/sections/HeroSection.tsx

import { useState, useEffect } from "react";
// ... (import hero images) ...
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";


const SLIDE_INTERVAL = 5000; 

const slides = [
  { id: 1, image: hero1, alt: "Education Technology" },
  { id: 2, image: hero2, alt: "Digital Learning" },
  { id: 3, image: hero3, alt: "E-Learning Platform" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔄 Fungsionalitas Auto-Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // 🔑 Fungsi Scroll Baru (Sama dengan yang ada di Header)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* ... (Slides Map Code) ... */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
      ))}

      {/* 📝 Konten Teks di Tengah */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Selamat Datang di Teknomedia
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Platform Teknologi Pendidikan Terdepan untuk Masa Depan yang Lebih Cerah
          </p>
          
          {/* 🔑 Tombol Diubah: Tambahkan onClick untuk scroll ke id="about" */}
          <button 
            onClick={() => scrollToSection("about")} // ⬅️ Scroll ke AboutSection
            className="btn-gradient-blue-green px-8 py-4 rounded-full text-lg"
          >
            Mulai Menjelajah
          </button>
        </div>
      </div>

      {/* ... (Navigation Dots Code) ... */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-500 
              ${index === currentSlide 
                ? "w-8 bg-white shadow-xl shadow-blue-500/50" 
                : "w-3 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;