"use client";

import { useEffect, useState } from "react";

const TITLE = "Operaciones Seguras, Resultados Confiables";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index++;
      setDisplayedText(TITLE.slice(0, index));
      if (index >= TITLE.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-[75px] pb-[100px] min-h-[600px] md:pt-[180px] md:pb-[120px]"
    >
      {/* Imagen de fondo + overlay (como el original) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(52, 58, 64, 0.4)" }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center">
        {/* Logo redondo, ligeramente a la izquierda (diseño friendly/profesional) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logogea-1.jpg"
          alt="Geamar"
          width={300}
          height={300}
          className="mb-8 ml-[6%] aspect-square w-[150px] self-start rounded-full object-cover shadow-[0_10px_35px_rgba(0,0,0,0.3)] ring-4 ring-white/85 md:mb-12 md:ml-[10%] md:w-[240px]"
        />

        <h1
          className="text-[18px] md:text-[20px] lg:text-[40px] font-normal text-white min-h-[1.4em] leading-snug"
          style={{
            textShadow: "4px 1px 19px rgba(39, 195, 130, 1)",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          {displayedText}
          <span className="typewriter-caret font-light">|</span>
        </h1>
      </div>
    </section>
  );
}
