"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SERVICES, type Service } from "@/lib/content";

/**
 * Sección #ofrecemos del original:
 * 1. Bloque de título "Nuestros Servicios" (caja verde sobre fondo blanco).
 * 2. Slider UAGB (Swiper) con 6 slides, flechas, paginación y modales "Ver más".
 */
export default function Servicios() {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState<Service | null>(null);

  const prev = () => setIndex((i) => (i - 1 + SERVICES.length) % SERVICES.length);
  const next = () => setIndex((i) => (i + 1) % SERVICES.length);

  return (
    <>
      {/* ── Banner "Nuestros Servicios" — fondo verde full-width estilo VISIÓN ── */}
      <div
        id="ofrecemos"
        className="flex min-h-[322px] flex-col items-center justify-center bg-[#17511c] px-4 py-6 text-center"
      >
        <div className="flex flex-col items-center text-white">
          {/* Icono briefcase (uagb-ifb-icon-wrap) */}
          <svg
            viewBox="0 0 576 512"
            className="mb-3 h-12 w-12 fill-white"
            aria-hidden="true"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 16a16 16 0 0 1 16 16l0 48 256 0 0-48a16 16 0 1 1 32 0l0 48 32 0a16 16 0 0 1 0 32l-32 0 0 224a16 16 0 0 1-16 16l-352 0a16 16 0 0 1-16-16l0-224-32 0a16 16 0 0 1 0-32l32 0 0-48a16 16 0 0 1 16-16z" />
          </svg>
          <h2 className="text-center text-[30px] font-semibold leading-tight md:text-[70px]">
            Nuestros Servicios
          </h2>
          <div className="mt-[30px] mb-[25px] h-[5px] w-[50px] bg-[#379237]" />
        </div>
      </div>

      {/* ── Slider de servicios (bloque 56b56a81 / Swiper c39b67d3) ── */}
      <div className="relative px-2.5 py-2.5">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="relative flex min-h-[420px] w-full flex-none flex-col items-center justify-end bg-cover bg-center px-5 pb-8 pt-5 md:min-h-[560px]"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="flex flex-col items-center gap-5 text-white">
                  <h3 className="max-w-[800px] text-center text-[25px] font-semibold leading-tight md:text-[50px]">
                    {service.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setModal(service)}
                    className="rounded-[3px] bg-[#32373c] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-black"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Flechas (46px, fuera del borde: prev left:-20px) */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            className="absolute top-1/2 -left-3 z-10 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#333] shadow-md transition hover:bg-gray-100 md:-left-5"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={next}
            className="absolute top-1/2 -right-3 z-10 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#333] shadow-md transition hover:bg-gray-100 md:-right-5"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Paginación */}
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-[#333]" : "bg-[#333]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal "Ver más" (uagb-modal: 600px, overlay rgba(0,0,0,.75)) ── */}
      {modal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={modal.modalTitle}
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[600px] overflow-y-auto rounded-[3px] bg-white p-[35px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setModal(null)}
              className="absolute -top-6 -right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#333] shadow-md transition hover:text-black md:-top-7 md:-right-7"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] font-semibold leading-snug text-[#333]">
                {modal.modalTitle}
              </h3>
              <div
                className="text-base leading-relaxed text-[#333]"
                dangerouslySetInnerHTML={{ __html: modal.modalHtml }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
