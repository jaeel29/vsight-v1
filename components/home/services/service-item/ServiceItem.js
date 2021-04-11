import Link from "next/link";
import classes from "./ServiceItem.module.css";

function ServiceItem({ title, description, Icon }) {
  return (
    <div className={classes.service}>
      <div className={classes.icon}>{Icon && <Icon />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/services/${title.toLowerCase()}`}>
        <a>Read more </a>
      </Link>
    </div>
  );
}

export default ServiceItem;
