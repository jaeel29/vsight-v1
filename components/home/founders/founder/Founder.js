import Image from "next/image";
import classes from "./Founder.module.scss";

function Founder({ image, name, job, linkedinUrl }) {
  return (
    <div className={classes.founder}>
      <div className={classes.image}>
        <Image src={image} alt={name} width={300} height={300} />
      </div>

      <div className={classes.info}>
        <h3 className={classes.name}>{name}</h3>
        <span className={classes.job}>{job}</span>
        <a href={linkedinUrl} target="_blank" className={classes.link}>
          Profile
        </a>
      </div>
    </div>
  );
}

export default Founder;
