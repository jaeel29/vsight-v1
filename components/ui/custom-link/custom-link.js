import { Link } from "react-scroll";

function CustomLink({ children, href, offset, setShowMenu }) {
  return (
    <li>
      <Link
        onClick={() => setShowMenu(false)}
        to={href}
        spy={true}
        smooth={true}
        offset={offset}
        duration={1000}
      >
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
