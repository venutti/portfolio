import "./index.css";

const VisibleTag = ({
  tag,
  closeTag = true,
  className,
  children,
  center = false,
}) => {
  return (
    <div className={`tag__container ${center ? "center" : ""}`}>
      <p className="tag">{`<${tag}>`}</p>
      <div className={`tag__content ${className || ""}`}>{children}</div>
      {closeTag && <p className="tag">{`</${tag}>`}</p>}
    </div>
  );
};

export default VisibleTag;
