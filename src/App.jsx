import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { Route, Router } from "wouter";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Router base="/portfolio">
        <Navbar />
        <Route path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Router>
    </>
  );
}
