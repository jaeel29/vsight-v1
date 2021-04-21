import classes from "./Form.module.scss";
import Button from "../../../ui/Button/Button";
import useTranslation from "next-translate/useTranslation";

function Form() {
  const { t } = useTranslation();
  return (
    <form className={classes.form}>
      <div className="flex-row">
        <div className={classes.inputs}>
          <input
            type="text"
            required
            name=""
            placeholder={t("contact:name-p")}
          />
          <input
            type="email"
            required
            name=""
            placeholder={t("contact:email-p")}
          />
          <input type="text" name="" placeholder={t("contact:subject-p")} />
        </div>
        <div className={classes.message}>
          <textarea
            name=""
            required
            placeholder={t("contact:message-p")}
          ></textarea>
        </div>
      </div>
      <Button style={classes.btn}>
        <span className="text-gradient">{t("contact:send")}</span>
      </Button>
    </form>
  );
}

export default Form;
