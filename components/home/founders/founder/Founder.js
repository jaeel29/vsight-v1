import Image from "next/image";
import classes from "./Founder.module.css";

function Founder({ image, name, job }) {
  return (
    <div className={classes.founder}>
      {/* Image */}
      <div className={classes.image}>
        <Image src={image} alt={name} width={700} height={700} />
      </div>
      {/* Founder info */}
      <div className={classes.info}>
        <h3 className={classes.name}>{name}</h3>
        <span className={classes.job}>{job}</span>
      </div>
      {/* Social Media Links */}
    </div>
  );
}

export default Founder;
