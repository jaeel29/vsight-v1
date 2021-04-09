import classes from "./section-label.module.css";

function SectionLabel({ children, color }) {
  return (
    <div className={`${classes.label} ${color}`}>
      <span>{children}</span>
    </div>
  );
}

export default SectionLabel;
