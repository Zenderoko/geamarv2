"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

/**
 * Botón scroll-to-top del original (#ast-scroll-top):
 * fixed right:30px bottom:30px, bg #54B435, radio 2px, flecha blanca.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-[30px] bottom-[30px] z-[80] flex h-[34px] w-[34px] items-center justify-center rounded-[2px] bg-[#54B435] text-white transition-colors hover:bg-[#379237]"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
