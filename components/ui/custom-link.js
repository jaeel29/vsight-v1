import { Link } from "react-scroll";

function CustomLink({ children, href }) {
  return (
    <li>
      <Link to={href} spy={true} smooth={true} offset={-20} duration={600}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
