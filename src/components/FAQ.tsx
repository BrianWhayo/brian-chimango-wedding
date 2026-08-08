import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/wedding-data";

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently Asked Questions"
            description="A few practical details to help you prepare for the day."
          />
        </RevealOnScroll>

        <div className="mt-14 divide-y divide-mist rounded-[2rem] border border-mist/80 bg-ivory px-6 sm:px-10">
          {faqs.map((item, index) => (
            <RevealOnScroll key={item.question} delayMs={index * 55}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-ink marker:content-none sm:text-2xl">
                  <span>{item.question}</span>
                  <span className="text-gilt transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-1 pt-4 text-sm leading-relaxed text-graphite sm:text-base">
                  {item.answer}
                </p>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
