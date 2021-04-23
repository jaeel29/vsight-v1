import classes from "./blog-list.module.scss";
import BlogCard from "./blog-card/blog-card";
import RightArrow from "../../icons/accessoirs/right-arrow";
import SectionLabel from "../../ui/section-label/section-label";
import Button from "../../ui/Button/Button";
import Link from "next/link";

function BlogList() {
  return (
    <section id="blog" className={classes.blogs}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-one center">Blog</SectionLabel>
          <h3 className="section-title center">Latest Articles</h3>
        </div>
        <div className={classes.articles}>
          <BlogCard
            imgUrl="/images/blog/vr2.jpg"
            imgAlt="flowers"
            tag="Nature"
            title="Virtual reality (VR) refers to a computer-generated."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
          <BlogCard
            imgUrl="/images/blog/vr3.jpg"
            imgAlt="flowers"
            tag="VR / AR"
            title="Virtual reality (VR) refers to a computer-generated."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
          <BlogCard
            imgUrl="/images/blog/vr1.jpg"
            imgAlt="men with headset"
            tag="VR / AR"
            title="Virtual reality (VR) refers to a computer-generated."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        </div>
      </div>

      <Link href="/blog">
        <a>
          <Button style={classes.btn}>
            <span className={classes.buttonText}>All posts</span>
            <RightArrow />
          </Button>
        </a>
      </Link>
    </section>
  );
}

export default BlogList;
