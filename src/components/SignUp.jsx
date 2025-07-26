import Hero from "../components/Hero";
import SignUpImage from "../assets/night.jpg";
import Navbar from "./Navbar";
export default function SignUp() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImage={SignUpImage} title="Sign Up" />
      <div className="form-container">
        <h1>Lets Get Started!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Strong Password" />
          <input type=" Password" placeholder="Confirm Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
}
