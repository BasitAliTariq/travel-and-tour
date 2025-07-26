import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
