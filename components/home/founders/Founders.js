import classes from "./Founders.module.css";
import SectionLabel from "../../ui/section-label/section-label";
import Founder from "./founder/Founder";

function Founders() {
  return (
    <section id="founders" className={classes.founders}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-two">Founders</SectionLabel>
          <h3 className="section-title">Who we are ?</h3>
        </div>
        <div className={`${classes.foundersList} flex-row`}>
          <Founder
            name="Youssef Moukhlis"
            job="XR Developer Expert"
            image="/images/youssef.png"
          />
          <Founder name="Saad El Yousfi" job="CEO" image="/images/saad.png" />
          <Founder
            name="Ahmed Khilad"
            job="3D Graphic Expert"
            image="/images/ahmed.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Founders;
