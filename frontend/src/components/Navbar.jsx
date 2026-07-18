import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from './Button.jsx';
import logo from '../assets/logo.png';

const navigationLinks = [
  { label: 'Platform', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Resources', href: '#services' },
  { label: 'Company', href: '#about' },
  { label: 'Pricing', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-2 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="EasyLane home">
          <img src={logo} alt="EasyLane Logo" className="h-12 w-auto object-contain" />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-[#2563EB]"
            >
              {link.label}
              <ChevronDown size={14} />
            </a>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Button href="#contact" className="px-5 py-2.5 !rounded-[12px] bg-[#FACC15] text-[#111827] hover:bg-[#f0bf00]">Book a Demo</Button>
        </div>

        <button
          type="button"
          className="ml-auto rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button href="#contact" className="w-full justify-center bg-[#FACC15] text-[#111827] hover:bg-[#f0bf00]">Book a Demo</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
