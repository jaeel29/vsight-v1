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
      <Light />
    </>
  );
};

export default Home;
