import classes from "./Services.module.css";
import ServiceItem from "./service-item/ServiceItem";
import SectionLabel from "../../ui/section-label/section-label";
import Industrial from "../../icons/industrial-icon";
import RightArrow from "../../icons/right-arrow";
import Button from "../../ui/Button/Button";

function Services() {
  return (
    <section id="services" className={classes.services}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-one">Services</SectionLabel>
          <h3 className="section-title">Simple process to start</h3>
        </div>
        <div className={`${classes.list} flex-row`}>
          <ServiceItem title="Industrial" Icon={Industrial} />
          <ServiceItem title="Education" Icon={Industrial} />
          <ServiceItem title="E-commerce" Icon={Industrial} />
          <ServiceItem title="Advertisement" Icon={Industrial} />
          <ServiceItem title="Real-estat" Icon={Industrial} />
          <ServiceItem title="Consulting" Icon={Industrial} />
        </div>
        <Button style={classes.btn}>
          <span className={classes.buttonText}>More services</span>
          <RightArrow />
        </Button>
      </div>
    </section>
  );
}

export default Services;
