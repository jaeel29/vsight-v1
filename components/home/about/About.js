import SectionLabel from "../../ui/section-label/section-label";
import AboutIllustration from "../../icons/about/about-ilustration";
import RightArrow from "../../icons/accessoirs/right-arrow";
import Button from "../../ui/Button/Button";
import classes from "./About.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

function About() {
  const { t } = useTranslation();
  return (
    <div id="about" className={classes.about}>
      <div className="container">
        <div className={`${classes.content} flex-row`}>
          <AboutIllustration className={classes.illustration} />
          <div className={classes.info}>
            <SectionLabel color={`section-label-two ${classes.center}`}>
              {t("about:label")}
            </SectionLabel>
            <h3 className="section-title">{t("about:title")}</h3>
            <p className="paragraph">{t("about:content")}</p>
            <Link href="/">
              <a>
                <Button style={classes.btn}>
                  <span className={classes.buttonText}>
                    {t("about:button")}
                  </span>
                  <RightArrow />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
