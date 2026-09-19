const images = [
  "/assets/experiential-1.webp",
  "/assets/experiential-2.webp",
  "/assets/experiential-3.webp",
  "/assets/experiential-4.webp",
];

export default function ExperientialStories() {
  return (
    <section className="py-20 bg-orange">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Mosaico de imágenes */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Evento experiencial ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl md:text-[32px] font-bold text-white">
              Historias Experienciales
            </h2>
            <p className="mt-4 text-white text-base leading-relaxed">
              Las marcas globales de primer nivel exigen WiFi de alto
              rendimiento, muy a menudo en ubicaciones desafiantes y únicas.
              Desde San Diego Comic-Con, hasta el medio del desierto, hasta
              playas públicas, Eventos WiFi Internet ha sido el proveedor de
              referencia para más de 1,000 marcas top de moda, automotriz,
              farmacéutica, retail y medios.
            </p>
            <p className="mt-4 text-white text-base leading-relaxed">
              Agencias galardonadas y empresas de marketing dependen de nuestras
              soluciones para las activaciones de sus clientes en toda
              Norteamérica. Echa un vistazo a algunos de los proyectos y
              programas ultra-creativos, súper modernos y profundamente
              atractivos que hemos apoyado desde 2008.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-white text-orange text-sm font-semibold uppercase px-7 py-3.5 hover:bg-gray-bg transition-colors duration-200"
            >
              Ver Historias Experienciales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
