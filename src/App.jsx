import { createRef } from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { Router, useLocation } from "wouter";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", component: <Main />, nodeRef: createRef() },
  { path: "/about", component: <About />, nodeRef: createRef() },
  { path: "/work", component: <Portfolio />, nodeRef: createRef() },
  { path: "/contact", component: <Contact />, nodeRef: createRef() },
];

export default function App() {
  const [location] = useLocation();
  // Obtiene el componente renderizado y su nodo
  const { component, nodeRef } = routes.find(
    (route) => route.path === location
  );

  return (
    <Router>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          // la key evidencia a lo que hay que prestar atención
          key={location}
          // ref para evitar un cierto error
          nodeRef={nodeRef}
          // tiempo entre statING y statED
          timeout={300}
          classNames="page"
        >
          {
            <div ref={nodeRef} className="page">
              {component}
            </div>
          }
        </CSSTransition>
      </SwitchTransition>
    </Router>
  );
}
