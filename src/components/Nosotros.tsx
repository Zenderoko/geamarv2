export default function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-[50px] md:py-[100px]">
      {/* Fondo fotográfico con efecto parallax (fixed en desktop) */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url(/images/nosotros-bg.jpg)" }}
        aria-hidden="true"
      />
      {/* Overlay claro para mantener legibilidad del texto */}
      <div className="absolute inset-0 bg-white/80" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-5">
        {/* Título */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-[30px] md:text-[70px] font-semibold text-[#17511c] mb-[15px] leading-tight">
            Nosotros
          </h2>
          <div className="w-[50px] h-[5px] bg-[#379237] mb-[15px]" />
        </div>

        {/* Fila: video (izquierda, row-reverse del original) + texto (derecha) */}
        <div className="flex flex-col-reverse md:flex-row-reverse items-stretch gap-5">
          <div className="flex-1 flex items-center">
            <p className="text-[#0f172a] text-base leading-relaxed">
              GEAMAR SpA es una empresa fundada en 2021, orientada a satisfacer
              las exigencias nacionales en los ámbitos terrestre, marítimo,
              acuícola y portuario.
              <br />
              &nbsp;
              <br />
              Contamos con un equipo de profesionales especializados en
              prevención de riesgos, seguridad marítimo-portuaria, operaciones
              logísticas y administración marítima-portuaria
            </p>
          </div>

          <div className="flex-1 relative min-h-[260px] md:min-h-[320px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/barcaza2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
