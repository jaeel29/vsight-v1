import { services } from "../../../data/vsight-data";
import classes from "./Services.module.scss";
import ServiceItem from "./service-item/ServiceItem";
import SectionLabel from "../../ui/section-label/section-label";
import useTranslation from "next-translate/useTranslation";
import ServiceWave from "../../icons/services/service-bg-top";

function Services() {
  const { t } = useTranslation();
  return (
    <section id="services" className={classes.services}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-one center">
            {t("services:label")}
          </SectionLabel>
          <h3 className="section-title center">{t("services:title")}</h3>
        </div>
        <div className={`${classes.list} flex-row`}>
          {services?.map((_, idx) => (
            <ServiceItem
              key={`#-${idx}`}
              title={t(`services:${services[idx]}.title`)}
              image={t(`services:${services[idx]}.image`)}
              description={t(`services:${services[idx]}.description`)}
            />
          ))}
        </div>
      </div>
      <ServiceWave className={classes.topWave} />
    </section>
  );
}

export default Services;
