// src/components/layout/Header.tsx
import { useState, useEffect, useRef } from "react"; 
import { Menu, X, ChevronDown } from "lucide-react"; 

// Komponen Reusable untuk Tombol Navigasi Desktop (dengan animasi garis bawah biru)
const NavButton: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void;
  isTransparent: boolean;
  isActive?: boolean;
}> = ({ children, onClick, isTransparent, isActive = false }) => {
  const textColor = isTransparent ? 'text-white' : 'text-foreground';
  
  return (
    <button
      onClick={onClick}
      className={`relative py-1 ${textColor} font-medium transition-colors duration-300 group ${isActive ? 'text-primary' : 'hover:text-primary'}`}
    >
      {children}
      {/* Animasi Garis Bawah Biru */}
      <span className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 bg-primary group-hover:w-full ${isActive ? 'w-full' : ''}`} />
    </button>
  );
};


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  
  const blogDropdownRef = useRef<HTMLDivElement>(null);

  // Effect untuk Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect untuk Outside Click Detection (Menutup Blog Dropdown)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isBlogOpen && blogDropdownRef.current && !blogDropdownRef.current.contains(event.target as Node)) {
        setIsBlogOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBlogOpen]);

  // Fungsi untuk scroll ke bagian tertentu
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const isTransparent = !isScrolled;
  const textColor = isTransparent ? 'text-white' : 'text-foreground';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4"> 
        <div className="flex items-center justify-between h-20">
          
          {/* Logo TEKNOMEDIA */}
          <div className="flex items-center space-x-2">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-gradient'
            }`}>
                TEKNOMEDIA
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            
            <NavButton onClick={() => scrollToSection("home")} isTransparent={isTransparent}>
              Home
            </NavButton>
            
            <NavButton isTransparent={isTransparent}>
              E-Learning
            </NavButton>

            {/* Blog Dropdown Menu (Toggle Klik, Styling Solid) */}
            <div className="relative" ref={blogDropdownRef}>
              <button 
                 onClick={() => setIsBlogOpen(!isBlogOpen)} 
                 className={`relative py-1 ${textColor} font-medium transition-colors duration-300 group ${isBlogOpen ? 'text-primary' : 'hover:text-primary'} flex items-center`}
                 >
                Blog <ChevronDown size={16} className={`ml-1 transition-transform ${isBlogOpen ? 'rotate-180' : 'rotate-0'}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 bg-primary group-hover:w-full ${isBlogOpen ? 'w-full' : ''}`} />
              </button>
              
              {/* 🔑 Konten Dropdown Blog: Solid (bg-white) & Item Baru (SMK 3) */}
              {isBlogOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 z-50 origin-top animate-fade-in-down">
                  <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-t-xl transition-colors">
                    SMK 1
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    SMK 2
                  </a>
                  {/* 🔑 Item Baru */}
                  <a href="#" className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-b-xl transition-colors">
                    SMK 3
                  </a>
                </div>
              )}
            </div>
            
            <NavButton onClick={() => scrollToSection("contact")} isTransparent={isTransparent}>
              Contact
            </NavButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel (Solid, Tidak Transparan) */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-background shadow-xl rounded-b-xl p-4 transition-all duration-300"> 
            <div className="flex flex-col space-y-4">
              
              <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-primary transition-colors font-medium"> Home </button>
              <a href="#" className="text-left text-foreground hover:text-primary transition-colors font-medium"> E-Learning </a>
              
              {/* Mobile Dropdown Blog */}
              <div className="relative">
                <button 
                  onClick={() => setIsBlogOpen(!isBlogOpen)} 
                  className="text-left text-foreground hover:text-primary transition-colors font-medium flex items-center"
                >
                  Blog <ChevronDown size={16} className={`ml-1 transition-transform ${isBlogOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {isBlogOpen && (
                  <div className="flex flex-col space-y-2 mt-2 pl-4 border-l border-primary/50">
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"> SMK 1 </a>
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"> SMK 2 </a>
                    {/* 🔑 Item Baru */}
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"> SMK 3 </a>
                  </div>
                )}
              </div>
              
              <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-colors font-medium"> Contact </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;