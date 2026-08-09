import Image from "next/image";
import {
  couple,
  heroMessage,
  heroVerse,
  weddingDate,
  weddingTheme,
} from "@/lib/wedding-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end justify-center overflow-hidden bg-ink"
    >
      <Image
        src="/images/couple-hero-new.png"
        alt="Brian and Chimango dressed elegantly in black, arriving together at a doorway"
        fill
        priority
        sizes="100vw"
        className="object-contain object-center opacity-100 sm:object-contain sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/35 via-transparent to-ink/10" />

      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-md translate-y-0 flex-col items-center gap-1.5 px-4 pb-8 pt-2 text-center sm:max-w-3xl sm:translate-y-0 sm:gap-5 sm:px-10 sm:pb-12 sm:pt-16 md:pb-14">
        <p className="animate-fade-in text-xs uppercase tracking-[0.45em] text-mint">
          Together Before God
        </p>

       <h1 className="animate-fade-up font-serif text-1.65rem leading-[0.95] text-ivory text-balance min-[380px]:text-1.85rem sm:text-7xl md:text-7xl lg:text-8xl">
          {couple.partnerOne}
          <span className="mx-3 italic text-gilt sm:mx-5">&amp;</span>
          {couple.partnerTwo}
        </h1>

        <div
          className="animate-fade-up flex max-w-3xl flex-col gap-5"
          style={{ animationDelay: "160ms" }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-fog sm:text-sm sm:tracking-[0.28em]">
            {weddingDate.dayOfWeek}, {weddingDate.display}
          </p>
          <p className="font-serif text-base italic leading-tight text-gilt sm:text-2xl">
            {weddingTheme}
          </p>
         <blockquote className="max-w-xl border-l border-gilt/70 pl-3 text-[11px] leading-relaxed text-fog/90 sm:pl-5 sm:text-base">
            <span className="italic">&ldquo;{heroVerse.text}&rdquo;</span>
            <cite className="mt-2 block not-italic text-xs uppercase tracking-[0.22em] text-mint">
              {heroVerse.reference}
            </cite>
          </blockquote>
         <p className="max-w-xl text-xs leading-relaxed text-fog/90 sm:text-lg">
            {heroMessage}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#details"
              className="rounded-full bg-evergreen px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-moss sm:px-8 sm:py-3.5 sm:text-xs sm:tracking-[0.25em]"
            >
              View Wedding Details
            </a>
            <a
              href="#rsvp"
              className="rounded-full border border-ivory/70 px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-ivory hover:text-evergreen sm:px-8 sm:py-3.5 sm:text-xs sm:tracking-[0.25em]"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-ivory/60" />
      </div>
    </section>
  );
}
