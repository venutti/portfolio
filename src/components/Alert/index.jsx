import "./index.css";

const Alert = ({ children, className }) => {
  return (
    <div className={`alert ${className || ""}`}>
      <div className="alert__content">{children}</div>
    </div>
  );
};

export default Alert;
