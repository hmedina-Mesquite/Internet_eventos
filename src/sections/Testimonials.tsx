import {
  TestimonialMarquee,
  type Testimonial,
} from "@/components/ui/testimonial-marquee";

const testimonials: Testimonial[] = [
  {
    name: "Sue Lindley",
    role: "Shortcuts Software",
    avatar: "/assets/avatar-1.webp",
    text: "Créeme cuando te digo que tu información permanece en la cima de mi radar para futuras Ferias Comerciales. De nuevo, muchas gracias por el equipo y el servicio sobresalientes.",
  },
  {
    name: "Lisa Harmon",
    role: "Armorblue",
    avatar: "/assets/avatar-2.webp",
    text: "Ya les contamos a la DMC y al Hotel sobre ustedes. Su equipo fue imperturbable y todos cumplieron como prometieron. ¡El cliente también quedó impresionado! Nos aseguraremos de que sepan cómo contactarlos. ¡Los llevamos con nosotros a todas partes!",
  },
  {
    name: "Robert Thomas",
    role: "Compusult",
    avatar: "/assets/avatar-3.webp",
    text: "Tu sistema funcionó tan bien en San Antonio que pensé en darle otra oportunidad en Washington. ¡Gracias por un servicio tan necesario!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-orange font-medium text-base">Testimonios</p>
        <h2 className="mt-4 text-3xl md:text-[42px] font-bold text-gray-text uppercase leading-tight">
          Lo que Dicen las Personas
        </h2>
        <p className="mt-6 text-base text-gray-text max-w-[700px] mx-auto leading-relaxed">
          No solo creas en nuestra palabra sobre lo bien que funcionan nuestras
          soluciones en cualquier escenario de evento, escucha a los clientes
          satisfechos que hemos atendido exitosamente desde 2008.
        </p>
      </div>

      {/* Carrusel a ancho completo, con degradados que difuminan los cortes */}
      <div className="relative mt-8">
        <TestimonialMarquee items={testimonials} speed={45} />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <a
          href="#"
          className="mt-4 inline-block bg-orange hover:bg-orange-dark text-white text-sm font-semibold uppercase px-7 py-3.5 transition-colors duration-200"
        >
          Ver Testimonios
        </a>
      </div>
    </section>
  );
}
