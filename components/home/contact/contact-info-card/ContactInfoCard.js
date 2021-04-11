import classes from "./ContactInfoCard.module.css";

function ContactInfoCard({ text, icon, href, target }) {
  return (
    <a className={classes.infoCard} href={href} target={target}>
      <div>{icon}</div>
      <span>{text}</span>
    </a>
  );
}

export default ContactInfoCard;
