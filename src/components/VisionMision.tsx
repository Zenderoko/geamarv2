/**
 * Banda de video a pantalla completa + banners VISIÓN / MISIÓN
 * (contenedores #Vision-Mision y #mensaje del sitio original).
 */
export default function VisionMision() {
  return (
    <>
      {/* Video full-width (min-height 600px desktop / 350px mobile) */}
      <div
        id="Vision-Mision"
        className="relative w-full min-h-[350px] md:min-h-[600px] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/videonosotros2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Banner VISIÓN — bg #17511c, texto blanco, margin-bottom 100px (live) */}
      <div className="mb-[100px] flex min-h-[322px] flex-col items-center justify-center gap-5 bg-[#17511c] px-4 py-6 text-center">
        <h2 className="text-[32px] font-semibold leading-[1.4] text-white">
          VISIÓN
        </h2>
        <h3 className="max-w-[900px] text-[19px] font-semibold leading-relaxed text-white">
          Ser un referente en la gestión integrada para mejorar la
          operatividad, productividad y desarrollo de empresas a nivel
          nacional.&nbsp;
        </h3>
      </div>

      {/* Banner MISIÓN — fondo transparente (blanco), texto #17511c (live) */}
      <div className="flex min-h-[322px] flex-col items-center justify-center gap-5 px-4 py-6 text-center">
        <h2 className="text-[32px] font-semibold leading-[1.4] text-[#17511c]">
          MISIÓN
        </h2>
        <h3 className="max-w-[900px] text-[19px] font-semibold leading-relaxed text-[#17511c]">
          Entregar servicios empresas nacionales en el ámbito terrestre,
          marítimo, acuícola y portuario, bajo un modelo de gestión integrado
          para mejorar la operatividad, productividad y desarrollo de
          competencias que permitan diseñar una estrategia unificada para
          cumplir los objetivos de las empresas.
        </h3>
      </div>
    </>
  );
}
