import classes from "./Landing.module.scss";
import Button from "../../ui/Button/Button";
import RightArrow from "../../icons/right-arrow";
import VrIcon from "../../icons/vr-icon";
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
        <Button style={classes.btn}>
          <span className={classes.buttonText}> {t("landing:button")}</span>
          <RightArrow />
        </Button>
        <div className={classes.illustration}>
          <VrIcon />
        </div>
      </div>
    </div>
  );
}

export default Landing;
