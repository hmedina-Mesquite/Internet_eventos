import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Tipos de Evento", href: "#tipos-evento" },
  { label: "Eventos Clientes", href: "#eventos-clientes" },
  { label: "Recursos", href: "#recursos" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white border-b border-gray-border transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col leading-tight">
          <span className="text-[22px] font-bold text-dark tracking-tight">
            Eventos<span className="font-normal"> WiFi</span>
          </span>
          <span className="text-[22px] font-bold text-orange tracking-tight -mt-1">
            INTERNET
          </span>
        </a>

        {/* Navegación desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-text uppercase tracking-wide hover:text-orange transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón mobile */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-text"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-border px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-gray-text uppercase tracking-wide hover:text-orange"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
