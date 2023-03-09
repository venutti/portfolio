import "./index.css";

const Alert = ({ children }) => {
  return (
    <div className="alert">
      <div className="alert__content">{children}</div>
    </div>
  );
};

export default Alert;
