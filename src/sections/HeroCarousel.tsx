import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Slides del carrusel principal
const slides = [
  {
    title: "Eventos Automotrices",
    subtitle:
      "Conectividad robusta para carreras, exhibiciones y lanzamientos automotrices",
    image: "/assets/hero-slide-2.webp",
    cta: "Explorar Soluciones",
  },
  {
    title: "Festivales",
    subtitle: "Festival Monster Energy Aftershock",
    image: "/assets/hero-slide-3.webp",
    cta: "Explorar Soluciones",
  },
  {
    title: "Ferias Comerciales",
    subtitle: "Conectividad confiable para miles de expositores y visitantes",
    image: "/assets/hero-slide-4.webp",
    cta: "Explorar Soluciones",
  },
  {
    title: "Conciertos y Giras",
    subtitle: "Eventos de Producción en Vivo",
    image: "/assets/hero-slide-5.webp",
    cta: "Explorar Soluciones",
  },
  {
    title: "Marketing Experiencial",
    subtitle: "Activaciones de Marca y Road Shows",
    image: "/assets/hero-slide-6.webp",
    cta: "Explorar Soluciones",
  },
  {
    title: "Eventos al Aire Libre",
    subtitle:
      "Desde haciendas y ranchos hasta cenotes, sierras y zonas arqueológicas",
    image: "/assets/hero-slide-7.webp",
    cta: "Explorar Soluciones",
  },
  {
    title: "Reuniones y Conferencias",
    subtitle:
      "WiFi de alto rendimiento para conferencias corporativas de cualquier tamaño",
    image: "/assets/hero-slide-8.webp",
    cta: "Explorar Soluciones",
  },
  {
    title: "Eventos Deportivos",
    subtitle: "Estadios, arenas y recintos deportivos con cobertura total",
    image: "/assets/hero-slide-9.webp",
    cta: "Explorar Soluciones",
  },
];

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
              <div className="absolute inset-0 flex flex-col justify-center px-[10%] max-w-[700px]">
                <h2 className="text-4xl md:text-[56px] font-bold text-white uppercase leading-tight">
                  {slide.title}
                </h2>
                <p className="mt-3 text-lg md:text-xl text-white font-normal">
                  {slide.subtitle}
                </p>
                <a
                  href="#soluciones"
                  className="mt-6 inline-block bg-orange hover:bg-orange-dark text-white text-sm font-semibold uppercase px-7 py-3.5 transition-colors duration-200 w-fit"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flecha anterior */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors duration-200"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors duration-200"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === activeIndex
                ? "bg-orange scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
