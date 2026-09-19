export default function BandwidthBanner() {
  return (
    <section className="relative w-full min-h-[400px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/bandwidth-bg.webp)" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-16">
        <div className="ml-auto max-w-[500px] text-right">
          <p className="text-white text-base leading-relaxed">
            Entender las velocidades de subida, velocidades de bajada, VR,
            streaming, apps de eventos, múltiples dispositivos de asistentes y
            más puede ser confuso para los organizadores. ¿Tienes un evento
            próximo que necesite WiFi o conectividad a Internet? Usa nuestra
            práctica guía para estimar tus necesidades según las especificidades
            del evento.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-orange hover:bg-orange-dark text-white text-sm font-semibold uppercase px-7 py-3.5 transition-colors duration-200"
          >
            Estima tus Necesidades de Ancho de Banda
          </a>
        </div>
      </div>
    </section>
  );
}
