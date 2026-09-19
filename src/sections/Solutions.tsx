import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

const solutions = [
  {
    title: "IT y Redes para Eventos",
    bullets: ["Planificación", "Instalación", "Soporte en sitio"],
    image: "/assets/solution-img-1.webp",
  },
  {
    title: "Portal WiFi y Página de Bienvenida",
    bullets: ["Contenido creativo", "Captura de datos", "Reportes"],
    image: "/assets/solution-img-2.webp",
  },
  {
    title: "Puentes Inalámbricos Exteriores",
    bullets: [
      "Conecta múltiples ubicaciones al aire libre",
      "Elimina cables largos",
      "Geografías y terrenos complejos",
    ],
    image: "/assets/solution-img-3.webp",
  },
  {
    title: "Kit 5G y Hotspot WiFi",
    bullets: [
      "1-15 dispositivos",
      "Balanceo de carga",
      "Verizon, AT&T y T-Mobile",
    ],
    image: "/assets/solution-img-4.webp",
  },
  {
    title: "Kit Mega 5G y Hotspot WiFi",
    bullets: [
      "300 dispositivos",
      "Enlace agregado",
      "Verizon, AT&T y T-Mobile",
    ],
    image: "/assets/solution-img-5.webp",
  },
  {
    title: "WiFi Mesh de Alta Densidad",
    bullets: [
      "500 a 10,000 dispositivos WiFi",
      "Despliegue rápido en 24-48 horas",
      "Amplio inventario de equipos",
    ],
    image: "/assets/solution-img-6.webp",
  },
  {
    title: "Ancho de Banda Punto a Punto",
    bullets: [
      "25 Mbps a 10 Gbps",
      "60+ ciudades en EE.UU. y Canadá",
      "Instalaciones interior/exterior/campus",
    ],
    image: "/assets/solution-img-7.webp",
  },
  {
    title: "Ancho de Banda Fibra Óptica",
    bullets: ["100 Mbps a 10 Gbps", "Hoteles", "Centros de convenciones"],
    image: "/assets/solution-img-8.webp",
  },
  {
    title: "Ancho de Banda Satelital",
    bullets: ["Hasta 100 Mbps", "Ubicaciones remotas", "Transmisión de video"],
    image: "/assets/solution-img-9.webp",
  },
  {
    title: "Cámaras de Videovigilancia",
    bullets: [
      "Monitoreo en vivo 24/7",
      "Cámaras IP y PTZ",
      "Grabación y respaldo en la nube",
    ],
    image: "/assets/solution-img-10.webp",
  },
  {
    title: "Centro de Mando",
    bullets: [
      "Videowall y monitoreo centralizado",
      "Operación en sitio durante el evento",
      "Respuesta inmediata a incidentes",
    ],
    image: "/assets/solution-img-11.webp",
  },
];

export default function Solutions() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section id="soluciones" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange font-medium text-base">
            Internet, Ancho de Banda y Redes WiFi
          </p>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold text-gray-text uppercase leading-tight">
            Soluciones de Conectividad Integral para Eventos y Recintos
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={index}>
                <div className="border border-gray-border bg-white flex flex-col h-full">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-dark leading-tight">
                      {solution.title}
                    </h3>
                    <ul className="mt-3 flex-1">
                      {solution.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-sm text-gray-text flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 bg-gray-text rounded-full shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-orange hover:bg-orange-dark text-white text-sm font-semibold uppercase py-3 text-center transition-colors duration-200"
                  >
                    Saber Más
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-text hover:text-orange transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-text hover:text-orange transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="text-center text-sm text-gray-light italic mt-6">
          Usa las flechas para desplazarte por nuestras soluciones.
        </p>
      </div>
    </section>
  );
}
