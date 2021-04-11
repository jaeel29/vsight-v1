import { servicesSection } from "../../../data/vsight-data";
import classes from "./Services.module.css";
import ServiceItem from "./service-item/ServiceItem";
import SectionLabel from "../../ui/section-label/section-label";
import Industrial from "../../icons/industrial-icon";

function Services() {
  return (
    <section id="services" className={classes.services}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-one center">
            {servicesSection.label}
          </SectionLabel>
          <h3 className="section-title center">{servicesSection.title}</h3>
        </div>
        <div className={`${classes.list} flex-row`}>
          <ServiceItem title="Industrial" Icon={Industrial} />
          <ServiceItem title="Education" Icon={Industrial} />
          <ServiceItem title="E-commerce" Icon={Industrial} />
          <ServiceItem title="Advertisement" Icon={Industrial} />
          <ServiceItem title="Real-estat" Icon={Industrial} />
          <ServiceItem title="Consulting" Icon={Industrial} />
        </div>
      </div>
    </section>
  );
}

export default Services;
