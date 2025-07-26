import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
export default function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImage={aboutImage} title="Services" />
      <Trip />
      <Footer />
    </>
  );
}
