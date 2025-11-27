// src/components/layout/Footer.tsx
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import logo from '../../assets/LOGO TEKNOMEDIA.png'; 

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-20"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* KOLOM 1: Logo & Deskripsi */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Teknomedia Logo" 
                className="h-12 w-12 transition-opacity duration-300 rounded-full" 
              />
              <span className="text-2xl font-bold">TEKNOMEDIA</span>
            </div>
            <p className="text-background/70 mb-6 text-sm">
              Platform teknologi pendidikan terdepan untuk masa depan yang lebih cerah.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* KOLOM 2: Produk */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary/50 pb-1">Produk</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="https://lms.xplore.id/" className="hover:text-primary transition-colors">LMS Teknomedia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Virtual Classroom</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Library</a></li>
            </ul>
          </div>

          {/* KOLOM 3: Perusahaan */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary/50 pb-1">Perusahaan</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#company" className="hover:text-primary transition-colors">Karir</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Partnership</a></li>
            </ul>
          </div>

          {/* KOLOM 4: Kontak - FIXED OVERFLOW */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary/50 pb-1">Kontak</h3>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                {/* ✅ Tambah break-words untuk wrap text panjang */}
                <span className="break-words">M9JH+PJV, Jl. Lemah Mulya, Lemahmulya, Kec. Majalaya, Karawang, Jawa Barat 41371</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0 text-primary" />
                <span>+62 812 9494 2081</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                {/* ✅ Tambah break-all untuk email agar bisa break di tengah */}
                <a 
                  href="mailto:teknomediainfo77@gmail.com" 
                  className="break-all hover:text-primary transition-colors"
                >
                  teknomediainfo77@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="border-t border-background/10 pt-8 text-center text-background/50 text-sm">
          <p>&copy; 2024 Teknomedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;