import { TIMELINE } from "@/lib/content";

/**
 * Sección #tecnologia del original:
 * 1. Banner "Conectamos eficiencia..." (bloque 1b350735, bg #17511c).
 * 2. Título "Tecnología y Sostenibilidad" (info-box 1095ce28).
 * 3. Caja con degradado y timeline "Cool Content Timeline" (ambos lados).
 */
export default function Sostenibilidad() {
  return (
    <>
      {/* ── Banner Conectamos (hermano previo a #tecnologia) ── */}
      <div className="mb-[30px] flex min-h-[100px] flex-col items-center justify-center bg-[#17511c] px-4 py-6 text-center md:min-h-[322px] md:px-4">
        <h2 className="text-[16px] font-semibold text-white md:text-[24px]">
          Conectamos eficiencia y seguridad para impulsar tus operaciones.
        </h2>
      </div>

      {/* ── Sección Tecnología y Sostenibilidad ── */}
      <div id="tecnologia" className="px-2.5 pb-[30px] pt-2.5">
        {/* Título (info-box sin icono en el HTML original) */}
        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4">
          <h2 className="text-center text-[30px] font-semibold leading-tight text-[#333] md:text-[70px]">
            Tecnología y Sostenibilidad
          </h2>
          <div className="mt-[25px] mb-[25px] h-[5px] w-[50px] bg-[#379237]" />
        </div>

        {/* Caja degradado (d7df6888: linear-gradient(0deg,#379237 0%,#FFFFFF 100%)) */}
        <div
          className="mx-auto mt-8 max-w-[1200px] rounded-[4px] px-4 py-10"
          style={{
            background: "linear-gradient(0deg, #379237 0%, #FFFFFF 100%)",
          }}
        >
          <h2 className="mx-auto mb-12 max-w-[900px] text-center text-[22px] font-semibold leading-snug text-[#333] md:text-[28px]">
            Desarrollamos una plataforma propia integrada de seguimiento de
            equipos terrestres
          </h2>

          {/* Timeline both-sided (Cool Content Timeline) */}
          <div className="relative mx-auto max-w-[1100px]">
            {/* Línea central: 3px, #d91b3e al 40%, degradado en extremos */}
            <div
              className="absolute top-3 bottom-3 left-1/2 w-[3px] -translate-x-1/2 opacity-40"
              style={{
                background:
                  "linear-gradient(to bottom, hsla(0,0%,90%,0) 0%, #d91b3e 10%, #d91b3e 90%, hsla(0,0%,90%,0) 100%)",
              }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-12 md:gap-16">
              {TIMELINE.map((item, i) => (
                <TimelineRow key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TimelineRow({ item }: { item: (typeof TIMELINE)[number] }) {
  const isRight = item.side === "right";
  // position-right: texto a la izquierda (pegado al centro), tarjeta a la derecha.
  // position-left:  tarjeta a la izquierda, texto a la derecha.
  const textBlock = (
    <div
      className={`flex-1 px-4 pt-1 text-base leading-relaxed text-[#333] md:px-8 ${
        isRight ? "text-right" : "text-left"
      }`}
      dangerouslySetInnerHTML={{ __html: item.text }}
    />
  );

  const cardBlock = (
    <div
      className={`relative flex-1 rounded-[10px] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] ${
        isRight ? "ml-4 md:ml-8" : "mr-4 md:mr-8"
      }`}
      style={{
        // Borde interior hacia la línea central + flecha (story-details)
        [`border${isRight ? "Left" : "Right"}` as string]: "4px solid #d91b3e",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute top-4 h-0 w-0 border-y-[15px] border-y-transparent"
        style={
          isRight
            ? { left: -32, borderRight: "15px solid #d91b3e" }
            : { right: -32, borderLeft: "15px solid #d91b3e" }
        }
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt=""
        width={item.imageWidth}
        height={item.imageHeight}
        className="mx-auto h-auto max-w-full"
      />
    </div>
  );

  const icon = (
    <div className="relative z-10 mt-1 flex h-6 w-6 flex-none items-center justify-center self-start rounded-full bg-[#d91b3e]">
      <span className="h-4 w-4 rounded-full bg-white" />
    </div>
  );

  return (
    <div className="flex items-start">
      {isRight ? (
        <>
          {textBlock}
          {icon}
          {cardBlock}
        </>
      ) : (
        <>
          {cardBlock}
          {icon}
          {textBlock}
        </>
      )}
    </div>
  );
}
