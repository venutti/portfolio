import "./index.css";
import { useForm } from "@formspree/react";
import Title from "../../components/Title";
import ShadowText from "../../components/ShadowText";
import VisibleTag from "../../components/VisibleTag";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import sendingEmail from "../../assets/sendimg-email.svg";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnqyznaq");

  const ContactAlert = () => {
    return (
      <Alert className="contact__alert">
        <img src={sendingEmail} />
        <p>
          ¡Gracias por ponerte en contacto conmigo! <br /> Te estaré
          respondiendo a la brevedad.
        </p>
      </Alert>
    );
  };

  const ContactForm = () => {
    return (
      <div>
        <Title>
          <ShadowText>CONTACTO</ShadowText>
        </Title>
        <VisibleTag tag="form">
          <form className="form" onSubmit={handleSubmit}>
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
              <textarea
                required
                name="message"
                spellCheck={false}
                id="message"
              />
            </div>

            <Button type="submit" disabled={state.submitting}>
              Enviar
            </Button>
          </form>
        </VisibleTag>
      </div>
    );
  };

  return (
    <section className="contact">
      <SwitchTransition>
        <CSSTransition key={state.succeeded} classNames="fade" timeout={300}>
          {state.succeeded ? <ContactAlert /> : <ContactForm />}
        </CSSTransition>
      </SwitchTransition>
    </section>
  );
};

export default Contact;
