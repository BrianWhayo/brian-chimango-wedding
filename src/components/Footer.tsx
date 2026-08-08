import { couple, footerVerse, weddingDate } from "@/lib/wedding-data";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 sm:px-10">
        <p className="max-w-2xl text-sm leading-relaxed text-fog/75 sm:text-base">
          Thank you for celebrating this special day with us. We are truly grateful for your love, prayers and support.
        </p>
        <blockquote className="mt-2 max-w-2xl font-serif text-xl italic leading-relaxed text-ivory sm:text-2xl">
          &ldquo;{footerVerse.text}&rdquo;
          <cite className="mt-3 block font-sans text-[10px] not-italic uppercase tracking-[0.28em] text-gilt">
            {footerVerse.reference}
          </cite>
        </blockquote>
        <span className="mt-4 font-serif text-3xl text-ivory">
          {couple.partnerOne} <span className="text-gilt">&amp;</span> {couple.partnerTwo}
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-fog/60">{weddingDate.display}</span>
        <a
          href="#top"
          className="mt-5 rounded-full border border-ivory/20 px-5 py-2 text-[10px] uppercase tracking-[0.24em] text-fog/70 transition-colors hover:border-gilt hover:text-gilt"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
