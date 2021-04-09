import { useSpring, animated } from "react-spring";

function RightArrow() {
  const props = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 2 },
    config: { duration: 700, mass: 2, tension: 280, friction: 60 },
  });
  return (
    <animated.svg
      style={props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="15"
      fill="none"
      viewBox="0 0 18 15"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M1.26 7.31h15.48m0 0l-6.457-5.629M16.74 7.31l-6.457 5.629"
      ></path>
    </animated.svg>
  );
}

export default RightArrow;
