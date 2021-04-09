import Link from "next/link";
import classes from "./ServiceItem.module.css";

function ServiceItem({ title, Icon }) {
  return (
    <Link href={`/services/${title}`}>
      <a className={classes.service}>
        <div className={`${classes.item} flex-row`}>
          <div className={classes.icon}>
            <Icon />
          </div>
          <span>{title}</span>
        </div>
      </a>
    </Link>
  );
}

export default ServiceItem;
