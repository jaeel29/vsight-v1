import Image from "next/image";
import { animateScroll as scrollHome } from "react-scroll";
import { useTheme } from "next-themes";

function Logo({ className }) {
  const { theme } = useTheme();
  return (
    <div className={className}>
      <Image
        onClick={() => scrollHome.scrollToTop()}
        src={
          theme === "light"
            ? "/images/logo/vsight-logo.png"
            : "/images/logo/vsight-logo-light.png"
        }
        alt="vsight logo"
        width={150}
        height={40}
      />
    </div>
  );
}

export default Logo;
