import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
export default function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImage={aboutImage} title="About" />
      <AboutUs />
      <Footer />
    </>
  );
}
