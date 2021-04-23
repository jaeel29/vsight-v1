import classes from "./Landing.module.scss";
import Button from "../../ui/Button/Button";
import LandingArrow from "../../icons/landing/arrow-landing";
import VrIcon from "../../icons/landing/vr-icon";
import CustomLink from "../../ui/custom-link/custom-link";
import useTranslation from "next-translate/useTranslation";

function Landing() {
  let { t } = useTranslation();
  return (
    <div className={classes.landing}>
      <div className="container">
        <h1 className={classes.title}>
          <span className="primary-one text-gradient">
            {t("landing:titlePrimary")}
          </span>
          <br />
          <span className={classes.simple}>{t("landing:titleSimple")}</span>
        </h1>
        <CustomLink
          setShowMenu={() => {
            return;
          }}
          href="contact"
          offset={-120}
        >
          <Button style={classes.btn}>
            <span className={classes.buttonText}> {t("landing:button")}</span>
            <LandingArrow />
          </Button>
        </CustomLink>
        <div className={classes.illustration}>
          <VrIcon />
        </div>
      </div>
    </div>
  );
}

export default Landing;
