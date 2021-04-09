import SectionLabel from "../../ui/section-label/section-label";
import AboutIllustration from "../../icons/about-ilustration";
import RightArrow from "../../icons/right-arrow";
import Button from "../../ui/Button/Button";
import classes from "./About.module.css";

function About() {
  return (
    <div id="about" className={classes.about}>
      <div className="container">
        <div className={`${classes.content} flex-row`}>
          <div className={classes.illustration}>
            <AboutIllustration />
          </div>
          <div className={classes.info}>
            <SectionLabel color="section-label-two">About us</SectionLabel>
            <h3 className="section-title">What we do</h3>
            <p className="paragraph">
              Vsight is one of the first Moroccan startup that provides XR(*)
              solutions, we developpe maintenance, education, e-commerce,
              advertisement and more solutions. Our mission is to understand and
              remedy our client’s need by providing him the best solution that
              fits the client's demand. We developpe cross platform and
              user-friendly solutions which enable you to target a wider market.
            </p>
            <Button style={classes.btn}>
              <span className={classes.buttonText}>Read more</span>
              <RightArrow />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
