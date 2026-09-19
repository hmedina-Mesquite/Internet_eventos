import { Building2, Megaphone, Wifi } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Organizadores de Eventos",
    description:
      "Redes y conectividad llave en mano para reuniones, conferencias y eventos corporativos",
  },
  {
    icon: Wifi,
    title: "Expositores",
    description:
      "Soluciones WiFi para stands dedicadas y fáciles de configurar, en promedio un 50% más económicas que los recintos",
  },
  {
    icon: Megaphone,
    title: "AGENCIAS",
    description:
      "Soluciones WiFi para marketing experiencial, road shows, festivales al aire libre y activaciones de marca",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-orange font-medium text-base">Servicios</p>
        <h2 className="mt-4 text-3xl md:text-[42px] font-bold text-gray-text uppercase leading-tight">
          Cómo Podemos Ayudar
        </h2>
        <p className="mt-6 text-base text-gray-text max-w-[800px] mx-auto leading-relaxed">
          Eventos WiFi Internet proporciona ancho de banda confiable,
          conectividad a Internet y redes WiFi para ferias comerciales,
          conferencias, reuniones corporativas y eventos al aire libre para todo
          tipo de organizador, productor o gestor de eventos.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-gray-border flex items-center justify-center">
                <service.icon className="text-orange" size={32} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-dark">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-text leading-relaxed max-w-[280px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-12 inline-block bg-orange hover:bg-orange-dark text-white text-sm font-semibold uppercase px-7 py-3.5 transition-colors duration-200"
        >
          Conoce Nuestro Servicio Experto
        </a>
      </div>
    </section>
  );
}
