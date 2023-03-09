import "./index.css";
import VisibleTag from "../../components/VisibleTag";
import Title from "../../components/Title";
import ShadowText from "../../components/ShadowText";
import Button from "../../components/Button";

const Main = () => {
  return (
    <main className="main">
      <VisibleTag tag="html" closeTag={false}>
        <VisibleTag tag="root" className="mb" closeTag={false} />

        <Title>
          Hola!
          <br /> Soy <ShadowText>L</ShadowText>ucas,
          <br /> desarrollador web
        </Title>

        <VisibleTag tag="p">Front End Developer</VisibleTag>
      </VisibleTag>
      <Button className="main__button">Contactame!</Button>
    </main>
  );
};

export default Main;
