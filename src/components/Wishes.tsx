import Image from "next/image";
import BestWishesForm from "./BestWishesForm";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

export default function Wishes() {
  return (
    <section id="wishes" className="relative overflow-hidden bg-evergreen py-24 sm:py-32">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/couple-reception-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-evergreen/90" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Leave Us Your Wishes"
            title="A message we'll treasure"
            tone="light"
            description="Your kind words, prayers and well wishes mean so much to us."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-fog/80 sm:text-base">
            Please leave us a message that we&apos;ll treasure long after our wedding day.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="rounded-[2rem] border border-ivory/15 bg-ink/20 p-6 backdrop-blur-sm sm:p-8">
            <BestWishesForm embedded />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
