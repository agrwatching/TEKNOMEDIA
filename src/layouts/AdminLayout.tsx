// src/layouts/AdminLayout.tsx
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'; // Import Link dari react-router-dom
import { LayoutDashboard, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react'; // Import ikon
import logo from '../assets/LOGO TEKNOMEDIA.png'; // Pastikan path ke logo benar

// Data navigasi sidebar
const navItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Users', path: '/admin/users', icon: Users },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

const AdminLayout: React.FC = () => {
  // State untuk mengontrol status sidebar (true = terbuka, false = tertutup)
  const [isExpanded, setIsExpanded] = useState(true);

  // Lebar sidebar berdasarkan state
  const sidebarWidth = isExpanded ? 'w-64' : 'w-20';
  
  // Lebar konten utama menyesuaikan dengan sidebar (transisi opsional)
  const contentMargin = isExpanded ? 'ml-64' : 'ml-20';

  return (
    <div className="flex h-screen bg-white">
      <aside 
        className={`fixed inset-y-0 left-0 ${sidebarWidth} bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 flex-shrink-0 z-30 border-r dark:border-gray-700`}
      >
        <div className="h-full flex flex-col">
          
          {/* Logo & Tombol Toggle */}
          <div 
            className={`p-4 flex items-center h-20 border-b dark:border-gray-700 transition-all duration-300 ${isExpanded ? 'justify-start' : 'justify-center'}`}
          >
            {/* Logo */}
            <img
              src={logo}
              alt="Logo Teknomedia"
              className="h-10 w-10 flex-shrink-0 mr-3"
            />
            {/* Nama Perusahaan (Hanya tampil saat Expanded) */}
            {isExpanded && (
              <h2 className="text-xl font-bold text-primary dark:text-white whitespace-nowrap overflow-hidden">
                TEKNOMEDIA
              </h2>
            )}
          </div>

          {/* Navigasi Utama */}
          <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-muted dark:hover:bg-gray-700 transition-all duration-300 group"
              >
                {/* Ikon */}
                <item.icon className="w-6 h-6 flex-shrink-0" />
                
                {/* Nama Tombol (Hanya tampil saat Expanded) */}
                {isExpanded && (
                  <span className="ml-3 font-medium whitespace-nowrap overflow-hidden">
                    {item.name}
                  </span>
                )}
                {/* Tooltip saat Collapsed (Opsional) */}
                {!isExpanded && (
                  <span className="absolute left-full ml-4 px-3 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Tombol Buka/Tutup Sidebar di Bagian Bawah */}
          <div className="p-4 border-t dark:border-gray-700">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-full p-2 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-white hover:bg-primary/20 transition-colors duration-300`}
              title={isExpanded ? "Tutup Sidebar" : "Buka Sidebar"}
            >
              {isExpanded ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </aside>

      <div className={`flex-grow overflow-y-auto transition-all duration-300 ${contentMargin}`}>
        <main className="p-8">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;