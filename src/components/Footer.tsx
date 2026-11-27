import { NAV_LINKS } from "@/lib/content";

/**
 * Footer del original (colophon): bg #212121, borde superior 1px #d5ead8.
 * Versión friendly: logo y menú centrados horizontalmente, enlaces en fila
 * con hover verde (en lugar del menú vertical pegado a la derecha).
 */
export default function Footer() {
  return (
    <footer className="border-t border-[#d5ead8] bg-[#212121] px-5 py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 text-center">
        {/* Logo (uagb-image del original) */}
        <a
          href="#hero"
          aria-label="Geamar — volver al inicio"
          className="transition-opacity hover:opacity-90"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logogea2.png"
            alt="Geamar"
            width={500}
            height={500}
            className="h-auto w-[170px] md:w-[210px]"
          />
        </a>

        {/* Decoración sutil */}
        <span
          className="h-px w-24 bg-white/15"
          aria-hidden="true"
        />

        {/* Menú horizontal centrado */}
        <nav
          aria-label="Menú del pie de página"
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-base font-medium text-white/85 transition-colors hover:text-[#54b435] after:absolute after:-bottom-1.5 after:left-1/2 after:h-px after:w-0 after:bg-[#54b435] after:transition-all after:duration-300 hover:after:w-full hover:after:-translate-x-1/2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Pie amigable */}
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Geamar SpA
        </p>
      </div>
    </footer>
  );
}
