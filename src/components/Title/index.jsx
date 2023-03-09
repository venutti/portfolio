import "./index.css";
import VisibleTag from "../VisibleTag";

const Title = ({ children }) => {
  return (
    <VisibleTag tag="h2">
      <h2 className="title">{children}</h2>
    </VisibleTag>
  );
};

export default Title;
