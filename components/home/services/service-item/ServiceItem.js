import Image from "next/image";
import classes from "./ServiceItem.module.scss";

function ServiceItem({ title, description, image }) {
  return (
    <div className={classes.service}>
      <div className="move-top-down">
        <Image src={image} alt={`image-${title}`} width={200} height={200} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;
