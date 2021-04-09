import { aboutData } from "../../../data/vsight-data";
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
            <SectionLabel color="section-label-two">
              {aboutData.label}
            </SectionLabel>
            <h3 className="section-title">{aboutData.title}</h3>
            <p className="paragraph">{aboutData.content}</p>
            <Button style={classes.btn}>
              <span className={classes.buttonText}>{aboutData.button}</span>
              <RightArrow />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
