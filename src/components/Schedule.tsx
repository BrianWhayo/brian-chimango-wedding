import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { schedule } from "@/lib/wedding-data";

export default function Schedule() {
  return (
    <section id="schedule" className="bg-evergreen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Our Day"
            title="Order of Events"
            tone="light"
            description="A simple guide to the day's celebrations."
          />
        </RevealOnScroll>

        <ol className="relative mt-16 before:absolute before:bottom-7 before:left-[4.55rem] before:top-7 before:w-px before:bg-mint/30 sm:before:left-[6.55rem]">
          {schedule.map((item, index) => (
            <RevealOnScroll key={`${item.time}-${item.title}`} delayMs={index * 65}>
              <li className="relative flex gap-6 border-t border-ivory/15 py-7 first:border-t-0 sm:gap-10">
                <div className="w-20 shrink-0 sm:w-28">
                  <span className="font-serif text-2xl text-gilt tabular-nums sm:text-3xl">
                    {item.time}
                  </span>
                </div>
                <span className="absolute left-[4.25rem] top-9 h-2.5 w-2.5 rounded-full bg-mint ring-4 ring-evergreen sm:left-[6.25rem]" />
                <div className="flex flex-1 items-center">
                  <h3 className="font-serif text-xl text-ivory sm:text-2xl">{item.title}</h3>
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ol>

        <RevealOnScroll delayMs={180}>
          <p className="mt-8 text-center text-xs italic leading-relaxed text-fog/65">
            Times are provided as a guide and may be subject to minor adjustments.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
