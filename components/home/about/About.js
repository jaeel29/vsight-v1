import SectionLabel from "../../ui/section-label/section-label";
import AboutIllustration from "../../icons/about-ilustration";
import RightArrow from "../../icons/right-arrow";
import Button from "../../ui/Button/Button";
import classes from "./About.module.scss";
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
            <Button style={classes.btn}>
              <span className={classes.buttonText}>{t("about:button")}</span>
              <RightArrow />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
