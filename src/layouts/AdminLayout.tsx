// src/layouts/AdminLayout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import logo from '../assets/LOGO TEKNOMEDIA.png';

// Data navigasi
const navItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Users', path: '/admin/users', icon: Users },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Check if current path matches nav item
  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* MOBILE NAVBAR */}
      {isMobile && (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 shadow-sm">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Teknomedia"
              className="h-10 w-10 flex-shrink-0"
            />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TEKNOMEDIA
            </h1>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>
      )}

      {/* MOBILE MENU OVERLAY */}
      {isMobile && isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 z-40 shadow-xl animate-slide-down">
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* DESKTOP SIDEBAR - OPTIMIZED */}
      {!isMobile && (
        <aside
          className={`fixed inset-y-0 left-0 bg-white shadow-xl z-30 border-r border-gray-200 overflow-hidden transition-all duration-200 ease-in-out ${
            isExpanded ? 'w-64' : 'w-20'
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Logo & Brand */}
            <div className={`p-4 flex items-center h-20 border-b border-gray-200 ${
                isExpanded ? 'justify-start' : 'justify-center'
              }`}
            >
              <img
                src={logo}
                alt="Logo Teknomedia"
                className="h-10 w-10 flex-shrink-0"
              />

              {/* Brand Name with smooth fade */}
              <div className={`ml-3 overflow-hidden transition-all duration-200 ${
                isExpanded ? 'w-40 opacity-100' : 'w-0 opacity-0'
              }`}>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                  TEKNOMEDIA
                </h2>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-grow p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center p-3 rounded-xl transition-colors group relative ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />

                  {/* Name with smooth fade */}
                  <div className={`ml-3 overflow-hidden transition-all duration-200 ${
                    isExpanded ? 'w-40 opacity-100' : 'w-0 opacity-0'
                  }`}>
                    <span className="font-medium whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>

                  {/* Tooltip (when collapsed) */}
                  {!isExpanded && (
                    <span className="absolute left-full ml-4 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                      {item.name}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Toggle Button */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full p-3 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 hover:from-blue-100 hover:to-purple-100 transition-colors"
                title={isExpanded ? 'Tutup Sidebar' : 'Buka Sidebar'}
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
      )}

      {/* MAIN CONTENT - OPTIMIZED */}
      <div
        className={`flex-grow overflow-y-auto transition-all duration-200 ease-in-out ${
          isMobile ? 'mt-16' : isExpanded ? 'ml-64' : 'ml-20'
        }`}
      >
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;