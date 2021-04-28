import { useState, useEffect } from "react";
import Header from "./header/Header";
import Landing from "./landing/Landing";
import About from "./about/About";
import Services from "./services/Services";
import Founders from "./founders/Founders";
import Contact from "./contact/Contact";
import BlogList from "./blog/blog-list";
import Footer from "./footer/footer";
import Light from "../icons/accessoirs/light";

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showControllers, setShowControllers] = useState(false);

  //* USEFULL CODE
  useEffect(() => {
    if (process.browser) {
      let scrollTimer = -1;
      function bodyScroll() {
        setShowControllers(false);
        if (scrollTimer != -1) clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(() => {
          setShowControllers(true);
        }, 2000);
      }
      const fixHeaderAtTop = () => {
        setShowMenu(false);
        bodyScroll();
        if (window.scrollY > 70) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };

      window.addEventListener("scroll", fixHeaderAtTop);
    }
  }, []);

  return (
    <>
      <Header
        scroll={scroll}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showControllers={showControllers}
      />
      <Landing />
      <About />
      <Services />
      <Founders />
      <BlogList />
      <Contact />
      <Footer showControllers={showControllers} />
      <Light />
    </>
  );
};

export default Home;
