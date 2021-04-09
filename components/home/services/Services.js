import { servicesSection, servicesArray } from "../../../data/vsight-data";
import classes from "./Services.module.css";
import ServiceItem from "./service-item/ServiceItem";
import SectionLabel from "../../ui/section-label/section-label";
import RightArrow from "../../icons/right-arrow";
import Button from "../../ui/Button/Button";

const services = servicesArray();

function Services() {
  return (
    <section id="services" className={classes.services}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-one">
            {servicesSection.label}
          </SectionLabel>
          <h3 className="section-title">{servicesSection.title}</h3>
        </div>
        <div className={`${classes.list} flex-row`}>
          {services.map(({ title, Icon }) => (
            <ServiceItem key={`#-${title}`} title={title} Icon={Icon} />
          ))}
        </div>
        <Button style={classes.btn}>
          <span className={classes.buttonText}>{servicesSection.button}</span>
          <RightArrow />
        </Button>
      </div>
    </section>
  );
}

export default Services;
