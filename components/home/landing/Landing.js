import { landingData } from "../../../data/vsight-data";
import classes from "./Landing.module.css";
import Button from "../../ui/Button/Button";
import RightArrow from "../../icons/right-arrow";
import VrIcon from "../../icons/vr-icon";

function Landing() {
  return (
    <div className={classes.landing}>
      <div className="container">
        <h1 className={classes.title}>
          <span className="primary-one text-gradient">
            {landingData.titlePrimary}
          </span>
          <br />
          {landingData.titleSimple}
        </h1>
        <Button style={classes.btn}>
          <span className={classes.buttonText}>{landingData.button}</span>
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
