import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useRef } from "react";

export default function App() {
  const aboutElem = useRef(null);
  const portfolioElem = useRef(null);
  const contactElem = useRef(null);

  const scrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    {
      label: "Acerca de mi",
      onClick: () => scrollToElement(aboutElem),
    },
    {
      label: "Portfolio",
      onClick: () => scrollToElement(portfolioElem),
    },
    {
      label: "Contacto",
      onClick: () => scrollToElement(contactElem),
    },
  ];

  return (
    <>
      <div className="h100 flex flex-col">
        <Navbar links={links} />
        <Hero />
      </div>
      <section ref={aboutElem} className="h100 p-4">
        Acerca de mi
      </section>
      <section ref={portfolioElem} className="h100">
        Portfolio
      </section>
      <section ref={contactElem} className="h100">
        Contacto
      </section>
    </>
  );
}
