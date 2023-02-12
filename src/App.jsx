import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Container from "./components/Container";
import ContactData from "./components/ContactData";
import ProjectList from "./components/ProjectList";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { AiFillFilePdf } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import alkeflixImage from "./assets/alkeflix.png";

export default function App() {
  const aboutElem = useRef(null);
  const portfolioElem = useRef(null);
  const contactElem = useRef(null);

  const scrollToElement = (ref) => {
    if (!ref.current) return;
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

  const contactData = [
    {
      icon: <GrGithub />,
      link: "https://github.com/venutti",
    },
    {
      icon: <GrLinkedin />,
      link: "https://www.linkedin.com/in/lucas-venutti-43a16b172/",
    },
    {
      icon: <GrMail />,
      link: "mailto:lucasvenutti23@gmail.com",
    },
    {
      icon: <AiFillFilePdf />,
      link: "https://drive.google.com/file/d/1aTImRILt0oFnlrJcvWJy9gRj-vc7svYK/view?usp=share_link",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/5491136068626",
    },
  ];

  const pages = [
    {
      ghLink: "https://github.com/venutti/movies-challenge",
      link: "https://venutti.github.io/movies-challenge/",
      img: alkeflixImage,
      title: "Alkeflix",
      description:
        "Página que simula ser un catálogo de películas. Se permite loguearse con credenciales y manejar una sección de 'Favoritos'.",
    },
  ];

  return (
    <>
      <div className="h100 flex flex-col">
        <Navbar links={links} />
        <Hero />
      </div>

      <Section ref={aboutElem}>
        <Container>
          <h2 className="text-3xl font-medium mb-2">Hey!</h2>
          <p className="text-lg">
            Me llamo Lucas Venutti, soy de Argentina y vivo en Santa Clara del
            Mar.
            <br />
            Soy un aficionado a la programación, estudio Análisis de Sistemas en
            la Universidad de Buenos Aires, pero mi vocación es el desarrollo
            web.
            <br />
            Me considero una persona autodidacta y siempre con ganas de aprender
            cosas nuevas!
            <br />
            Espero que te gusten los proyectos que tengo hechos, podés
            contactarme para dejarme comentarios!
          </p>
        </Container>
      </Section>

      <Section ref={portfolioElem} className=" bg-cyan-700 text-white">
        <h2 className="text-3xl font-medium mb-10 text-center">
          Mis proyectos
        </h2>
        <ProjectList pages={pages} />
      </Section>

      <Section
        ref={contactElem}
        className="flex justify-center items-center gap-8"
      >
        <ContactData data={contactData} />
      </Section>
    </>
  );
}
