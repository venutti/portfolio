import "./index.css";
import Title from "../../components/Title";
import ShadowText from "../../components/ShadowText";
import VisibleTag from "../../components/VisibleTag";
import ImageZoom from "../../components/ImageZoom";

import data from "../../data";

const Portfolio = () => {
  const renderedProjects = data.map((project) => (
    <ImageZoom key={project.name} img={project.img} to={project.url} />
  ));

  return (
    <section className="portfolio">
      <Title>
        <ShadowText>PORTFOLIO</ShadowText>
      </Title>

      <VisibleTag tag="grid" className="portfolio__container">
        <div className="portfolio__grid">{renderedProjects}</div>
      </VisibleTag>
    </section>
  );
};

export default Portfolio;
