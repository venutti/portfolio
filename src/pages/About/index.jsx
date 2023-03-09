import "./index.css";
import VisibleTag from "../../components/VisibleTag";
import Title from "../../components/Title";
import ShadowText from "../../components/ShadowText";
import StyledText from "../../components/StyledText";

const About = () => {
  return (
    <section className="about">
      <Title>
        <ShadowText>SOBRE MI</ShadowText>
      </Title>

      <VisibleTag tag="p" className="about__text">
        <p>
          ¡Hola! Soy Lucas Venutti, <StyledText>ESTUDIANTE</StyledText> de
          Análisis de Sistemas y <StyledText>PROGRAMADOR</StyledText>{" "}
          autodidacta. Mi pasión por la programación me ha llevado a desarrollar
          varios proyectos personales, donde pude demostrar mi capacidad de
          aprender rápidamente y solucionar problemas.
        </p>
        <p>
          Aunque no tengo experiencia laboral, estoy convencido de que mi
          dedicación y esfuerzo son valiosos para cualquier empresa que quiera
          un programador <StyledText>APASIONADO y COMPROMETIDO</StyledText>.
          Actualmente, estoy en un curso de React en Coderhouse y emocionado por
          aplicar todo lo que aprenda en mi primer trabajo.
        </p>
        <p>
          Si buscás un programador con <StyledText>GANAS</StyledText> de crecer
          y mejorar, ¡no dudes en contactarme! Estoy dispuesto a dar lo mejor de
          mí para crear soluciones innovadoras y eficientes. ¡Gracias por tu
          tiempo!
        </p>
      </VisibleTag>
    </section>
  );
};

export default About;
