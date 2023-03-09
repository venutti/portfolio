import "./index.css";
import { useForm } from "@formspree/react";
import Title from "../../components/Title";
import ShadowText from "../../components/ShadowText";
import VisibleTag from "../../components/VisibleTag";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

import sendingEmail from "../../assets/sendimg-email.svg";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnqyznaq");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    handleSubmit();
  };

  if (state.succeeded) {
    return (
      <Alert>
        <img src={sendingEmail} />
        <p>
          ¡Gracias por ponerte en contacto conmigo! <br /> Te estaré
          respondiendo a la brevedad.
        </p>
      </Alert>
    );
  }

  return (
    <section className="contact">
      <Title>
        <ShadowText>CONTACTO</ShadowText>
      </Title>
      <VisibleTag tag="form">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label htmlFor="name">Nombre completo:</label>
            <input required autoComplete="off" name="name" id="name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input required type="email" name="email" id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="message">Mensaje:</label>
            <textarea required name="message" spellCheck={false} id="message" />
          </div>
          <Button type="submit" disabled={state.submitting}>
            Enviar
          </Button>
        </form>
      </VisibleTag>
    </section>
  );
};

export default Contact;
