import { Instagram, Linkedin } from "lucide-react";

const solutionLinks = [
  "Kit 5G Internet",
  "Kit Mega 5G",
  "5G Football",
  "Kit Satelital Starlink",
  "Tabla Comparativa de Soluciones",
  "Ancho de Banda Satelital",
  "Microwave Punto a Punto",
  "Fibra Óptica GigE",
  "WiFi para Eventos",
  "WiFi para Recintos",
  "IT / Ingeniería de Redes",
  "Portal WiFi",
];

const eventTypeLinks = [
  "Eventos Automotrices",
  "Eventos Corporativos",
  "Ayuda por Desastres",
  "Internet de Emergencia",
  "Entretenimiento y Producción",
  "eSports y Gaming",
  "Exposiciones",
  "Marketing Experiencial",
  "Festivales",
  "Reuniones y Conferencias",
  "Conciertos y Giras",
  "Eventos al Aire Libre",
  "Eventos Deportivos",
  "Ferias Comerciales",
];

const resourceLinks = [
  "Eventos Recientes",
  "Estimador Aproximado",
  "Calculadora de Ancho de Banda",
  "White Papers",
  "Derechos del Consumidor",
];

const aboutLinks = [
  "Empresa",
  "Testimonios",
  "Blog",
  "Preguntas Frecuentes",
  "Contáctanos",
];

const socialLinks = [
  { icon: Linkedin, label: "Página LinkedIn", href: "#" },
  { icon: Instagram, label: "Página Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t-4 border-orange">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Marca y contacto */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white tracking-tight">
                Eventos<span className="font-normal"> WiFi</span>
              </span>
              <span className="text-xl font-bold text-orange tracking-tight -mt-0.5">
                INTERNET
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Eventos WiFi Internet es el proveedor de servicios de Internet
              independiente líder en la industria de eventos.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Teléfono: +52 81 19 96 19 98
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Email: soporte@eventoswifi.com
            </p>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-dark-light hover:bg-orange flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Soluciones
            </h4>
            <ul className="space-y-1.5">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-orange transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tipos de Evento */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Tipos de Evento
            </h4>
            <ul className="space-y-1.5">
              {eventTypeLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-orange transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos y Nosotros */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Recursos
            </h4>
            <ul className="space-y-1.5">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-orange transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-white uppercase mb-4 mt-6">
              Nosotros
            </h4>
            <ul className="space-y-1.5">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-orange transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Social
            </h4>
            <ul className="space-y-1.5">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="text-[13px] text-gray-400 hover:text-orange transition-colors duration-200"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 pt-6 border-t border-dark-light flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-2">
              Legal
            </h4>
            <a
              href="#"
              className="text-[13px] text-gray-400 hover:text-orange transition-colors duration-200"
            >
              Términos de Uso y Acuerdo de Alquiler
            </a>
          </div>
          <p className="text-[13px] text-gray-500">
            2026 © Eventos WiFi Internet
          </p>
        </div>
      </div>
    </footer>
  );
}
