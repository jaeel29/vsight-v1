import { links } from "../../../data/vsight-data";
import { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import CustomLink from "../../ui/custom-link/custom-link";
import useTranslation from "next-translate/useTranslation";
import Logo from "./logo/logo";
import Sphere from "../../icons/accessoirs/sphere";
import ToggleTheme from "../../ui/toggle-theme/toggle-theme";
// import ToggleLang from "../../ui/toggle-language/toggle-language";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { t } = useTranslation();

  //* USEFULL CODE
  useEffect(() => {
    if (process.browser) {
      const fixHeaderAtTop = () => {
        setShowMenu(false);
        if (window.scrollY > 70) {
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
          <Logo className={classes.logo} />
          <div
            className={`${classes.navbar} ${showMenu ? classes.show : null}`}
          >
            <div className={classes.logo}>
              <Logo className={classes.mobileLogo} />
            </div>
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
          <div className={classes.themes}>
            <ToggleTheme />
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
