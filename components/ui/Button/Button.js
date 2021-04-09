import classes from "./Button.module.css";

function Button({ children, style }) {
  return <button className={`${classes.button} ${style}`}>{children}</button>;
}

export default Button;
