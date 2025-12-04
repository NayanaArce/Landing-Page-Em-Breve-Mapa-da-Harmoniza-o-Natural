import logo from 'figma:asset/f7fd173bc954ab268532e109e419ec22f89f8d84.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Juliana Arce" className="h-12" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-rose-900/70 hover:text-rose-900 transition-colors">
              Benefícios
            </a>
            <a href="#content" className="text-rose-900/70 hover:text-rose-900 transition-colors">
              Conteúdo
            </a>
            <a 
              href="#notify" 
              className="px-6 py-2.5 bg-rose-800 text-white rounded-lg hover:bg-rose-700 transition-colors"
            >
              Quero ser avisada
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-rose-900"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-100">
            <div className="flex flex-col gap-4">
              <a 
                href="#benefits" 
                className="text-rose-900/70 hover:text-rose-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#content" 
                className="text-rose-900/70 hover:text-rose-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Conteúdo
              </a>
              <a 
                href="#notify" 
                className="px-6 py-2.5 bg-rose-800 text-white rounded-lg hover:bg-rose-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Quero ser avisada
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
