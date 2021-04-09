import { founders, foundersSection } from "../../../data/vsight-data";
import classes from "./Founders.module.css";
import SectionLabel from "../../ui/section-label/section-label";
import Founder from "./founder/Founder";

function Founders() {
  return (
    <section id="founders" className={classes.founders}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-two">
            {foundersSection.label}
          </SectionLabel>
          <h3 className="section-title">{foundersSection.title}</h3>
        </div>
        <div className={`${classes.foundersList} flex-row`}>
          {founders.map(({ name, job, image }) => (
            <Founder key={`#-${name}`} name={name} job={job} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Founders;
