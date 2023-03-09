import "./index.css";
import { Link, useRoute } from "wouter";

const StyledLink = ({ href, children }) => {
  const [match, params] = useRoute(href);

  return (
    <Link href={href}>
      <a className={`link ${match ? "active" : ""}`}>{children}</a>
    </Link>
  );
};

export default StyledLink;
