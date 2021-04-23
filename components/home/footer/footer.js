import classes from "./footer.module.scss";
import ToTopArrow from "../../icons/accessoirs/to-top-arrow";
import { links } from "../../../data/vsight-data";
import { animateScroll as scroll } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import CustomLink from "../../ui/custom-link/custom-link";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.content}>
          <p>&copy; 2021 Vsight. Tous droits réservés</p>
          <div className={classes.toTop}>
            <ToTopArrow onClick={() => scroll.scrollToTop()} />
          </div>
          <ul className={classes.socialMedia}>
            {links.map((link, idx) => (
              <CustomLink
                key={`f--link--${idx}`}
                href={link.toLowerCase()}
                offset={-170}
                setShowMenu={() => {
                  return;
                }}
              >
                {t(`header:${link}`)}
              </CustomLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
