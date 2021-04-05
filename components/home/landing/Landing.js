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
            Make your daily experience
          </span>
          <br />
          entertaining and augmented.
        </h1>
        <Button>
          <span className={classes.buttonText}>Schedule Appointment</span>
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
