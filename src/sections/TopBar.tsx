import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full h-10 bg-dark flex items-center justify-end px-6">
      <div className="flex items-center gap-4 text-xs uppercase">
        <a
          href="#contacto"
          className="text-orange font-semibold hover:text-orange-dark transition-colors duration-200"
        >
          Contáctanos
        </a>
        <span className="text-white flex items-center gap-1">
          <Phone size={12} />
          +52 81 19 96 19 98
        </span>
      </div>
    </div>
  );
}
