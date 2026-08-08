import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import Schedule from "@/components/Schedule";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import OutfitInspo from "@/components/OutfitInspo";
import FAQ from "@/components/FAQ";
import Rsvp from "@/components/Rsvp";
import Wishes from "@/components/Wishes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
        <WeddingDetails />
        <Schedule />
        <Countdown />
        <Gallery />
        <OutfitInspo />
        <FAQ />
        <Rsvp />
        <Wishes />
      </main>
      <Footer />
    </>
  );
}
