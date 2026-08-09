import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { ceremony, reception, weddingDate } from "@/lib/wedding-data";

function DetailCard({
  kicker,
  title,
  lines,
  mapUrl,
}: {
  kicker: string;
  title: string;
  lines: string[];
  mapUrl?: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-mist/70 bg-paper p-8 shadow-[0_20px_45px_-30px_rgba(44,46,44,0.4)] sm:p-10">
      <div className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.3em] text-sage">{kicker}</span>
        <h3 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h3>
        <div className="flex flex-col gap-1.5 text-graphite">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      {mapUrl && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-evergreen px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-evergreen transition-colors hover:bg-evergreen hover:text-ivory"
        >
          View Location <span aria-hidden>&rarr;</span>
        </a>
      )}
    </div>
  );
}

export default function WeddingDetails() {
  return (
    <section id="details" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Wedding Details"
            title="When & Where"
            description={`${weddingDate.dayOfWeek}, ${weddingDate.display}`}
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <DetailCard
              kicker="Ceremony"
              title={ceremony.venueName}
              lines={[
                ceremony.venueNote,
                `Guest arrival: ${ceremony.guestArrival}`,
                `Ceremony begins: ${ceremony.time}`,
              ]}
              mapUrl={ceremony.mapUrl}
            />
          </RevealOnScroll>
          <RevealOnScroll delayMs={120}>
            <DetailCard
              kicker="Reception"
              title={reception.venueName}
              lines={[reception.venueNote, `Reception begins: ${reception.time}`]}
              mapUrl={reception.mapUrl}
            />
          </RevealOnScroll>
        </div>

        <RevealOnScroll delayMs={180}>
          <div className="mt-6 grid gap-4 rounded-3xl border border-mist/70 bg-sage-hint/65 p-6 sm:grid-cols-1 sm:p-8">
          
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-moss">RSVP By</span>
              <p className="mt-2 font-serif text-2xl text-ink">{weddingDate.rsvpDeadline}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
