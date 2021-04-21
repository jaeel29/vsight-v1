import { links } from "../../../data/vsight-data";
import { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./Header.module.scss";
import CustomLink from "../../ui/custom-link/custom-link";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";
import { animateScroll as scrollHome } from "react-scroll";
import Sphere from "../../icons/sphere";
import ToggleTheme from "../../ui/toggle-theme/toggle-theme";
import ToggleLang from "../../ui/toggle-language/toggle-language";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  //* USEFULL CODE
  useEffect(() => {
    if (process.browser) {
      const fixHeaderAtTop = () => {
        setShowMenu(false);
        if (window.scrollY > 90) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };

      window.addEventListener("scroll", fixHeaderAtTop);
    }
  }, []);

  return (
    <header
      className={
        scroll ? ` ${classes.fixed} flex-row` : `${classes.header} flex-row`
      }
    >
      <div className="container">
        <div className={classes.flex}>
          <div className={classes.logo}>
            <Image
              onClick={() => scrollHome.scrollToTop()}
              src={
                theme === "light"
                  ? "/images/vsight-logo.png"
                  : "/images/vsight-logo-light.png"
              }
              alt="vsight logo"
              width={100}
              height={100}
            />
          </div>
          <div
            className={`${classes.navbar} ${showMenu ? classes.show : null}`}
          >
            <ul className="flex-row">
              {links.map((link, idx) => (
                <CustomLink
                  setShowMenu={setShowMenu}
                  key={`link--${idx}`}
                  href={link.toLowerCase()}
                  offset={-170}
                >
                  {t(`header:${link}`)}
                </CustomLink>
              ))}
            </ul>
          </div>
          <div className={classes.togglers}>
            <div className={classes.langs}>
              <ToggleLang />
            </div>
            <div className={classes.themes}>
              <ToggleTheme />
            </div>
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={`${classes.menu} ${!showMenu ? classes.animate : null}`}
          >
            <Sphere className={classes.sphere} />
            <Sphere className={classes.sphere} />
            <Sphere className={classes.sphere} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
