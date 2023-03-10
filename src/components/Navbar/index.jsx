import "./index.css";
import HamburguerButton from "../HamburguerButton";
import StyledLink from "../StyledLink";
import { useEffect, useState } from "react";

const routes = [
  { link: "/", label: "Inicio" },
  { link: "/about", label: "Acerca de" },
  { link: "/work", label: "Proyectos" },
  { link: "/contact", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isFull = width > 520;

  const handleHamburguerClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  const renderedItems = routes.map((route) => (
    <li key={route.label}>
      <StyledLink href={route.link}>{route.label}</StyledLink>
    </li>
  ));

  let navClass = "nav__links";
  if (isFull) {
    navClass += " full";
  } else {
    navClass += open ? " open" : " close";
  }

  return (
    <nav className="nav">
      {!isFull && (
        <HamburguerButton open={open} onClick={handleHamburguerClick} />
      )}
      <ul className={navClass} onClick={handleMenuClick}>
        {renderedItems}
      </ul>
    </nav>
  );
};

export default Navbar;
