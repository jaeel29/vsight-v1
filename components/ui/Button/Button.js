import classes from "./Button.module.scss";

function Button({ children, style }) {
  return <button className={`${classes.button} ${style}`}>{children}</button>;
}

export default Button;
