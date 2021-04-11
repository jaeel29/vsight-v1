import { contactSection, contactInfo } from "../../../data/vsight-data";
import classes from "./Contact.module.css";
import SectionLabel from "../../ui/section-label/section-label";
import ContactInfoCard from "./contact-info-card/ContactInfoCard";
import Form from "./form/Form";

function Contact() {
  return (
    <section id="contact" className={classes.contact}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-three center">
            {contactSection.label}
          </SectionLabel>
          <h3 className="text-gradient section-title center">
            {contactSection.title}
          </h3>
        </div>
        <div className={classes.content}>
          <div className={`${classes.info} flex-row`}>
            <ContactInfoCard
              href={"tel:" + contactInfo.phoneNumber}
              text={contactInfo.phoneNumber}
              icon={contactInfo.phoneIcon}
            />
            <ContactInfoCard
              target="_blank"
              href={"https://goo.gl/maps/RJ5YNHrkP1KB2vNi6"}
              text={contactInfo.location}
              icon={contactInfo.locationIcon}
            />
            <ContactInfoCard
              href={"mailto:" + contactInfo.email}
              text={contactInfo.email}
              icon={contactInfo.emailIcon}
            />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
