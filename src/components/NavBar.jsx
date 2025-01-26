import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import softal from "../assets/softal-removebg-preview.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
            <img src={softal}  className="w-2/5 md:w-1/5" alt="logogit"/>
          {/* <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            IoTAlbania
          </a> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#sherbimet"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Shërbimet
            </a>
            <a
              href="#rreth-nesh"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Rreth Nesh
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#kontakt"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Kontakt
            </a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200">
              Filloni Tani
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <a
              href="#sherbimet"
              className="block text-gray-300 hover:text-white transition-colors py-2"
            >
              Shërbimet
            </a>
            <a
              href="#rreth-nesh"
              className="block text-gray-300 hover:text-white transition-colors py-2"
            >
              Rreth Nesh
            </a>
            <a
              href="#testimonials"
              className="block text-gray-300 hover:text-white transition-colors py-2"
            >
              Testimonials
            </a>
            <a
              href="#kontakt"
              className="block text-gray-300 hover:text-white transition-colors py-2"
            >
              Kontakt
            </a>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200">
              Filloni Tani
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
