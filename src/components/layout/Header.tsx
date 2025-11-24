// Updated Header.tsx with E-Learning dropdown
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/LOGO TEKNOMEDIA.png";
import { Link, useLocation } from "react-router-dom";

const NavLinkItem: React.FC<{
  to: string;
  children: React.ReactNode;
  isTransparent: boolean;
  onClick?: () => void;
}> = ({ to, children, isTransparent, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const textColor = isTransparent ? "text-white" : "text-foreground";

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative py-1 ${textColor} font-medium transition-colors duration-300 group ${
        isActive ? "text-primary" : "hover:text-primary"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 bg-primary group-hover:w-full ${
          isActive ? "w-full" : ""
        }`}
      />
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isElearningOpen, setIsElearningOpen] = useState(false);

  const blogDropdownRef = useRef<HTMLDivElement>(null);
  const elearningDropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isBlogOpen &&
        blogDropdownRef.current &&
        !blogDropdownRef.current.contains(event.target as Node)
      ) {
        setIsBlogOpen(false);
      }
      if (
        isElearningOpen &&
        elearningDropdownRef.current &&
        !elearningDropdownRef.current.contains(event.target as Node)
      ) {
        setIsElearningOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isBlogOpen, isElearningOpen]);

  const isTransparent = !isScrolled && location.pathname === "/";
  const textColor = isTransparent ? "text-white" : "text-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/"
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Teknomedia Logo" className="h-12 w-12 rounded-full" />
            <h1 className={`text-2xl font-bold ${isTransparent ? "text-white" : "text-gradient"}`}>
              TEKNOMEDIA
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinkItem to="/" isTransparent={isTransparent}>Home</NavLinkItem>

            {/* E-LEARNING DROPDOWN */}
            <div className="relative" ref={elearningDropdownRef}>
              <button
                onClick={() => setIsElearningOpen(!isElearningOpen)}
                className={`relative py-1 ${textColor} font-medium flex items-center transition-colors duration-300 group ${
                  isElearningOpen ? "text-primary" : "hover:text-primary"
                }`}
              >
                E-Learning
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    isElearningOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {isElearningOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-fade-in-down">
                  <Link to="/elearning/teknomedia" className="block px-4 py-3 hover:bg-muted text-sm hover:rounded-xl">
                    Teknomedia E-Learning
                  </Link>
                  <Link to="/elearning/lms-store" className="block px-4 py-3 hover:bg-muted text-sm hover:rounded-xl">
                    LMS Store
                  </Link>
                </div>
              )}
            </div>

            {/* BLOG DROPDOWN */}
            <div className="relative" ref={blogDropdownRef}>
              <button
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className={`relative py-1 ${textColor} font-medium flex items-center transition-colors duration-300 group ${
                  isBlogOpen ? "text-primary" : "hover:text-primary"
                }`}
              >
                Blog
                <ChevronDown size={16} className={`ml-1 transition-transform ${isBlogOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {isBlogOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-fade-in-down">
                  <a href="https://www.smksteknologi.sch.id/" className="block px-4 py-3 text-sm hover:bg-muted hover:rounded-xl">SMK TEKNOLOGI</a>
                  <a href="https://smkalhurriyyah.sch.id/" className="block px-4 py-3 text-sm hover:bg-muted hover:rounded-xl">SMK AL HURIYYAH</a>
                </div>
              )}
            </div>

            <NavLinkItem to="/contact" isTransparent={isTransparent}>Contact</NavLinkItem>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${textColor}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-background shadow-xl rounded-b-xl p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

              {/* Mobile E-learning */}
              <button
                onClick={() => setIsElearningOpen(!isElearningOpen)}
                className="flex items-center"
              >
                E-Learning
                <ChevronDown size={16} className={`ml-1 ${isElearningOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              {isElearningOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-primary/50">
                  <Link to="/elearning/teknomedia" onClick={() => setIsMobileMenuOpen(false)} className="text-sm">Teknomedia E-Learning</Link>
                  <Link to="/elearning/lms-store" onClick={() => setIsMobileMenuOpen(false)} className="text-sm">LMS Store</Link>
                </div>
              )}

              <button
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className="flex items-center"
              >
                Blog
                <ChevronDown size={16} className={`ml-1 ${isBlogOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              {isBlogOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-primary/50">
                  <a href="https://www.smksteknologi.sch.id/" className="text-sm">SMK TEKNOLOGI</a>
                  <a href="https://smkalhurriyyah.sch.id/" className="text-sm">SMK AL HURIYYAH</a>
                </div>
              )}

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
