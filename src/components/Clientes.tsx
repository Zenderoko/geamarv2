"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/content";

const STEP_COUNT = CLIENT_LOGOS.length + 1; // 6 reales + 1 posición de loop

/**
 * Sección #Clientes del original (bloque 9f28c8c4, bg #17511c):
 * info-box con icono "users" + GS Logo Area (autoplay 2s, loop, pause en hover,
 * 5 logos desktop / 3 tablet / 2 mobile, navs abajo).
 */
export default function Clientes() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Autoplay cada 2000ms (autoplayDelay del original), se pausa en hover.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % STEP_COUNT),
      2000,
    );
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + STEP_COUNT) % STEP_COUNT);
  const next = () => setIndex((i) => (i + 1) % STEP_COUNT);

  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="Clientes"
      className="mx-auto my-6 max-w-[1200px] rounded-[10px] bg-[#17511c] px-4 py-10 shadow-[0_20px_30px_rgba(0,0,0,0.44)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Info-box 740f23bd */}
      <div className="flex flex-col items-center text-white">
        <svg
          viewBox="0 0 640 512"
          className="mb-3 h-12 w-12 fill-white"
          aria-hidden="true"
        >
          <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.6-15.1-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
        </svg>
        <h2 className="text-center text-[30px] font-semibold leading-tight md:text-[70px]">
          Nuestros Clientes
        </h2>
        <div className="mt-[30px] mb-[25px] h-[5px] w-[50px] bg-[#379237]" />
      </div>

      {/* Carrusel de logos */}
      <div className="relative mt-6 overflow-hidden">
        <div
          className="flex gap-2.5 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 20}%)` }}
        >
          {doubled.map((logo, i) => {
            const img = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={logo.alt}
                className="mx-auto h-auto max-h-16 w-auto max-w-full object-contain"
              />
            );
            return (
              <div
                key={`${logo.alt}-${i}`}
                className="flex w-[calc(50%-5px)] flex-none items-center justify-center sm:w-[calc(33.333%-7px)] xl:w-[calc(20%-8px)]"
              >
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer">
                    {img}
                  </a>
                ) : (
                  img
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navs abajo (navs_pos: bottom) */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
