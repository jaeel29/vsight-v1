import { contactInfo } from "../../../data/vsight-data";
import ContactTopWave from "../../icons/contact/contact-bg-top";
import classes from "./Contact.module.scss";
import SectionLabel from "../../ui/section-label/section-label";
import ContactInfoCard from "./contact-info-card/ContactInfoCard";
import Form from "./form/Form";
import useTranslation from "next-translate/useTranslation";

function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className={classes.contact}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-three center">
            {t("contact:label")}
          </SectionLabel>
          <h3 className="text-gradient section-title center">
            {t("contact:title")}
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
      <ContactTopWave className={classes.topWave} />
    </section>
  );
}

export default Contact;
