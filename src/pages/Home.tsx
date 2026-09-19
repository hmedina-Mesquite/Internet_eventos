import TopBar from "../sections/TopBar";
import Navbar from "../sections/Navbar";
import HeroCarousel from "../sections/HeroCarousel";
import Solutions from "../sections/Solutions";
import ExperientialStories from "../sections/ExperientialStories";
import Services from "../sections/Services";
import BandwidthBanner from "../sections/BandwidthBanner";
import Testimonials from "../sections/Testimonials";
import ClientLogos from "../sections/ClientLogos";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroCarousel />
      <Solutions />
      <ExperientialStories />
      <Services />
      <BandwidthBanner />
      <Testimonials />
      <ClientLogos />
      <Footer />
    </>
  );
}
