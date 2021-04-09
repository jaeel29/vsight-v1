// import ToggleTheme from "../components/ui/toggle-theme";
import Header from "../components/home/header/Header";
import Landing from "../components/home/landing/Landing";
import About from "../components/home/about/About";
import Services from "../components/home/services/Services";
import Founders from "../components/home/founders/Founders";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Services />
      <Founders />
    </>
  );
}
