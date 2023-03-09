import "./index.css";
import { RxHamburgerMenu as MenuIcon } from "react-icons/rx";
import StyledLink from "../StyledLink";

const routes = [
  { link: "/", label: "Inicio" },
  { link: "/about", label: "Acerca de" },
  { link: "/work", label: "Proyectos" },
  { link: "/contact", label: "Contacto" },
];

const Navbar = () => {
  const renderedItems = routes.map((route) => (
    <li key={route.label}>
      <StyledLink href={route.link}>{route.label}</StyledLink>
    </li>
  ));

  return (
    <nav className="nav">
      <MenuIcon className="nav__icon" />
      <ul className="nav__links">{renderedItems}</ul>
    </nav>
  );
};

export default Navbar;
