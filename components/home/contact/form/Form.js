import classes from "./Form.module.css";
import Button from "../../../ui/Button/Button";

function Form() {
  return (
    <form className={classes.form}>
      <div className="flex-row">
        <div className={classes.inputs}>
          <input type="text" required name="" placeholder="Enter you name" />
          <input type="email" required name="" placeholder="Enter you Email" />
          <input type="text" name="" placeholder="Enter a subject" />
        </div>
        <div className={classes.message}>
          <textarea
            name=""
            required
            placeholder="Enter your message here"
          ></textarea>
        </div>
      </div>
      <Button style={classes.btn}>Send message</Button>
    </form>
  );
}

export default Form;
