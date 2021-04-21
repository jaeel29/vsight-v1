import Image from "next/image";
import classes from "./ServiceItem.module.scss";
import { useSpring, animated } from "react-spring";

function ServiceItem({ title, description, image }) {
  const props = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 5 },
    config: { duration: 1200, mass: 2, tension: 280, friction: 60 },
  });
  return (
    <div className={classes.service}>
      <animated.div style={props}>
        <Image src={image} alt={`image-${title}`} width={200} height={200} />
      </animated.div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;
