import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function ToggleLang() {
  const router = useRouter();

  return (
    <>
      {router.locale === "fr" ? (
        <Link href={router.asPath} locale="en-US">
          <a>
            <span>En</span>
            <Image
              src="/images/usa.png"
              alt="usa flag"
              width={20}
              height={20}
            />
          </a>
        </Link>
      ) : (
        <Link href={router.asPath} locale="fr">
          <a>
            <span>Fr</span>
            <Image
              src="/images/fr.png"
              alt="frensh flag"
              width={20}
              height={20}
            />
          </a>
        </Link>
      )}
    </>
  );
}

export default ToggleLang;
