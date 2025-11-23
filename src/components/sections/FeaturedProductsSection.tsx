// src/components/sections/FeaturedProductsSection.tsx
import React from 'react';
import { Tag, Star } from 'lucide-react'; 

// Data Produk Unggulan
const featuredProducts = [
  {
    image: 'https://picsum.photos/300/200?random=1', // Placeholder untuk Router/AP
    name: 'Router WiFi Dual Band Pro X',
    price: 'Rp 650.000',
    description: 'Router kelas profesional dengan cakupan luas, ideal untuk rumah dan kantor modern.',
    tag: 'Best Seller',
  },
  {
    image: 'https://picsum.photos/300/200?random=2', // Placeholder untuk Paket Instalasi
    name: 'Paket Instalasi Fiber Home',
    price: 'Rp 1.200.000',
    description: 'Paket lengkap instalasi fiber optik ke rumah (FTTH) termasuk kabel, konfigurasi, dan garansi.',
    tag: 'Pilihan Populer',
  },
  {
    image: 'https://picsum.photos/300/200?random=3', // Placeholder untuk Access Point
    name: 'Access Point Outdoor Mesh',
    price: 'Rp 980.000',
    description: 'AP tahan cuaca (outdoor) dengan teknologi Mesh, cocok untuk kafe, taman, atau area luas.',
    tag: 'Edisi Khusus',
  },
];

const FeaturedProductsSection: React.FC = () => {
  return (
    <section id="featured-products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Penawaran Spesial
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Produk Unggulan Kami
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
            Dapatkan perangkat terbaik dan paket instalasi yang paling efisien dengan harga kompetitif.
          </p>
        </div>

        {/* Grid Produk (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            // Card Produk
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              
              {/* Gambar Produk */}
              <div className="relative h-48 w-full bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {/* Tag Produk (Best Seller, dll) */}
                <span className="absolute top-2 right-2 flex items-center bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    <Star size={14} className="mr-1 fill-current" />
                    {product.tag}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 truncate">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                
                <p className="mt-4 text-2xl font-extrabold text-indigo-600">
                  {product.price}
                </p>

                {/* Tombol CTA */}
                <a 
                  href="#buy"
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                >
                  <Tag size={18} className="mr-2" />
                  Beli Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a 
                href="#all-products"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-base font-medium rounded-md text-indigo-600 hover:bg-indigo-50 transition duration-300"
            >
                Lihat Semua Katalog Produk
            </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProductsSection;