import { Link } from "react-scroll";

function CustomLink({ children, href, offset }) {
  return (
    <li>
      <Link to={href} spy={true} smooth={true} offset={offset} duration={1000}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
