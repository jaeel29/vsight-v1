import { founders } from "../../../data/vsight-data";
import classes from "./Founders.module.scss";
import SectionLabel from "../../ui/section-label/section-label";
import Founder from "./founder/Founder";
import useTranslation from "next-translate/useTranslation";

function Founders() {
  const { t } = useTranslation();
  return (
    <section id="founders" className={classes.founders}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-two center">
            {t("founders:label")}
          </SectionLabel>
          <h3 className="section-title center">{t("founders:title")}</h3>
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
