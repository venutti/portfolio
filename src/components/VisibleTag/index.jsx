import "./index.css";

const VisibleTag = ({ tag, closeTag = true, className, children }) => {
  let classContainer = "tag";
  if (className) classContainer += " " + className;

  return (
    <div className={classContainer}>
      <div className="tag__content">
        <div className="tag__label">{`<${tag}>`}</div>
        {children}
        {closeTag && <div className="tag__label">{`</${tag}>`}</div>}
      </div>
    </div>
  );
};

export default VisibleTag;
