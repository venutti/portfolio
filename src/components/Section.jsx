import { forwardRef } from "react";

const Section = forwardRef((props, ref) => {
  const classes = `px-6 pt-8 pb-12 ${props.className}`;

  return (
    <section className={classes} ref={ref}>
      {props.children}
    </section>
  );
});

export default Section;
