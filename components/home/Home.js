import Header from "./header/Header";
import Landing from "./landing/Landing";
import About from "./about/About";
import Services from "./services/Services";
import Founders from "./founders/Founders";
import Contact from "./contact/Contact";
import BlogList from "./blog/blog-list";
import Footer from "./footer/footer";
import ToggleTheme from "../ui/toggle-theme/toggle-theme";
import ToggleLang from "../ui/toggle-language/toggle-language";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Services />
      <Founders />
      <BlogList />
      <Contact />
      <Footer />
      <ToggleTheme />
      <ToggleLang />
    </>
  );
};

export default Home;
