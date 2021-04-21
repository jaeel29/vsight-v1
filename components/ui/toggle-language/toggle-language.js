import { useRouter } from "next/router";
import Link from "next/link";
import UsaFlag from "../../icons/usa-flag";
import FrenshFlag from "../../icons/frensh-flag";

function ToggleLang() {
  const router = useRouter();

  const style = {
    position: "fixed",
    width: "50px",
    height: "37px",
    top: "260px",
    right: "0",
    padding: "0 .4rem",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    backgroundColor: "var(--theme-bg)",
  };
  return (
    <div style={style}>
      {router.locale === "fr" ? (
        <Link href={router.asPath} locale="en-US">
          <a>
            <UsaFlag />
          </a>
        </Link>
      ) : (
        <Link href={router.asPath} locale="fr">
          <a>
            <FrenshFlag />
          </a>
        </Link>
      )}
    </div>
  );
}

export default ToggleLang;
