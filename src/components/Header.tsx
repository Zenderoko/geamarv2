"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#ofrecemos" },
  { label: "Sostenibilidad", href: "#tecnologia" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header bg-white border-b border-[#d5ead8]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between min-h-[80px]">
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/images/logologo.png"
              alt="Geamar SpA"
              width={135}
              height={76}
              className="w-[110px] sm:w-[135px] h-auto"
              priority
            />
          </a>

          {/* Menú desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-[#2f3b40] text-base font-medium transition-colors hover:text-[#379237] after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[calc(100%-1.2em)] hover:after:-translate-x-1/2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-block border border-[#54b435] text-[#54b435] bg-transparent rounded-[40px] px-[30px] py-[15px] text-base font-medium leading-none transition-colors hover:text-white hover:bg-[#379237] hover:border-[#379237]"
            >
              Contacto
            </a>
          </nav>

          {/* Botón hamburguesa */}
          <button
            className="lg:hidden p-2 text-[#2f3b40] hover:text-[#379237] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Main Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#d5ead8] shadow-lg">
          <nav className="px-5 py-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 text-[#2f3b40] text-base font-medium hover:text-[#379237] transition-colors border-b border-gray-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-3 mb-2 text-center border border-[#54b435] text-[#54b435] rounded-[40px] px-[30px] py-[15px] font-medium hover:text-white hover:bg-[#379237] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
