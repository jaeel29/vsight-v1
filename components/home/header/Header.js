import { useState } from "react";
import Image from "next/image";
import classes from "./Header.module.css";
import CustomLink from "../../ui/custom-link";
import MoonIcon from "../../icons/moon-icon";

const links = ["About", "Services", "Founders", "Contact"];

function Header() {
  const [scroll, setScroll] = useState(false);

  //! IMPORTANT
  if (process.browser) {
    const fixHeaderAtTop = () => {
      if (window.scrollY > 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", fixHeaderAtTop);
  }

  return (
    <header className={classes.header}>
      <div className="container">
        <div className="flex-row">
          <div className={classes.logo}>
            <Image
              src="/images/vsight-logo.png"
              alt="vsight logo"
              width={100}
              height={100}
            />
          </div>
          <div className={classes.navbar}>
            <ul className="flex-row">
              {links.map((link, idx) => (
                <CustomLink key={`link--${idx}`} href={link.toLowerCase()}>
                  {link}
                </CustomLink>
              ))}
            </ul>
          </div>
          <div className={classes.themes}>
            <MoonIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
