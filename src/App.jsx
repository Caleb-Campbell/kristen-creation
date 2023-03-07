import { useState } from "react";
import { Stack, Container } from "react-bootstrap";
//  components
import Title from "./components/Title";
import TopNav from "./components/TopNav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./app.css";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <Title />
      <About />
      <div className="spacer" />

      <Gallery />
      <div className="spacer" />

      <Contact />
      <div className="spacer" />

      <Footer />
    </>
  );
}

export default App;
