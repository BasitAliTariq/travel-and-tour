import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage={heroImage}
        title="Your Journey Your Story"
        text="Choose your favourite destination."
        btnClass="Show"
        buttonText="Travle Plan"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
