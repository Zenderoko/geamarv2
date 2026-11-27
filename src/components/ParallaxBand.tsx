/**
 * Banda decorativa con efecto parallax entre #tecnologia (Sostenibilidad)
 * y #Clientes. Imagen `motornueva2-scaled.jpg` (motor de embarcación) del
 * sitio original. `md:bg-fixed` da el efecto parallax en desktop; en móvil
 * usa scroll (iOS no soporta background-attachment: fixed).
 */
export default function ParallaxBand() {
  return (
    <div
      className="relative h-[260px] w-full overflow-hidden bg-cover bg-center md:h-[400px] md:bg-fixed"
      style={{ backgroundImage: "url(/images/parallax-band.jpg)" }}
      aria-hidden="true"
    >
      {/* Sombreado sutil para profundidad */}
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}
