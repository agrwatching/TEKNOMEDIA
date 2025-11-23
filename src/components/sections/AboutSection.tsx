// src/components/sections/AboutSection.tsx
import React from 'react';

// Ganti dengan URL placeholder dari Picsum Photos (lebih stabil)
const teamPhotos = [
  { src: 'https://picsum.photos/id/64/400/600', alt: "Foto Tim 1" },
  { src: 'https://picsum.photos/id/65/400/600', alt: "Foto Tim 2" },
  { src: 'https://picsum.photos/id/66/400/600', alt: "Foto Tim 3" },
  { src: 'https://picsum.photos/id/67/400/600', alt: "Foto Tim 4" },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🛑 JUDUL LAMA (CENTERED) DIHAPUS DARI SINI */}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ⬅️ KOLOM KIRI: Visual/Foto Berjejer (Tetap Sama) */}
          <div className="relative grid grid-cols-2 gap-4 p-4 bg-card rounded-2xl shadow-xl border border-border group">
            {teamPhotos.map((photo, index) => (
              <div
                key={index}
                className={`relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-md transform 
                            transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-lg`}
                style={{
                  zIndex: 10 + index, 
                  transform: `rotate(${(index - 1.5) * 4}deg) translateX(${index * 5 - 10}px) translateY(${index * 5 - 10}px)`,
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          
          {/* ➡️ KOLOM KANAN: Visi & Misi (Konten) */}
          <div className="space-y-8"> 
            
            {/* 🔑 JUDUL BARU DITEMPATKAN DI KANAN */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="text-gradient">About Us</span>
              </h2>
              {/* Garis gradien di bawah judul */}
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground">
              Kami adalah tim yang berdedikasi untuk memajukan pendidikan melalui inovasi teknologi.
              Kami percaya bahwa setiap individu berhak mendapatkan akses ke pendidikan berkualitas tinggi yang relevan dengan kebutuhan masa kini dan masa depan.
            </p>

            {/* Visi Card */}
            <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <span className="mr-3 text-accent text-3xl">✨</span> Visi Kami
              </h3>
              <p className="text-foreground">
                Menjadi platform EdTech terdepan di Indonesia yang memberdayakan setiap siswa SMK dengan keterampilan digital yang relevan dan siap kerja.
              </p>
            </div>

            {/* Misi Card */}
            <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
              <h3 className="text-2xl font-bold text-accent mb-3 flex items-center">
                <span className="mr-3 text-primary text-3xl">🚀</span> Misi Kami
              </h3>
              <ul className="space-y-3 text-foreground list-disc list-inside pl-4">
                <li>Menyediakan kurikulum E-Learning yang selalu diperbarui sesuai kebutuhan industri 4.0.</li>
                <li>Menciptakan lingkungan belajar yang interaktif, inklusif, dan menyenangkan.</li>
                <li>Membangun kemitraan strategis dengan SMK dan perusahaan teknologi.</li>
                <li>Memfasilitasi kesempatan magang dan karir bagi lulusan terbaik.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;