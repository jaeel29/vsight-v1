import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import classes from "./toggle-language.module.scss";

function ToggleLang({ showControllers }) {
  const router = useRouter();

  return (
    <div className={`${classes.lang} ${showControllers && "hide"}`}>
      {router.locale === "fr" ? (
        <Link href={router.asPath} locale="en-US">
          <a>
            <span>En</span>
            <div className={classes.image}>
              <Image
                src="/images/flags/usa.png"
                alt="usa flag"
                width={20}
                height={20}
              />
            </div>
          </a>
        </Link>
      ) : (
        <Link href={router.asPath} locale="fr">
          <a>
            <span>Fr</span>
            <div className={classes.image}>
              <Image
                src="/images/flags/fr.png"
                alt="frensh flag"
                width={20}
                height={20}
              />
            </div>
          </a>
        </Link>
      )}
    </div>
  );
}

export default ToggleLang;
