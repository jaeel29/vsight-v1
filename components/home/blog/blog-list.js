import classes from "./blog-list.module.scss";
import BlogCard from "./blog-card/blog-card";
import SectionLabel from "../../ui/section-label/section-label";

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
            imgUrl="/images/blog.jpg"
            imgAlt="flowers"
            tag="Nature"
            title="Virtual reality (VR) refers to a computer-generated."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
          <BlogCard
            imgUrl="/images/blog.jpg"
            imgAlt="flowers"
            tag="VR / AR"
            title="Virtual reality (VR) refers to a computer-generated."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
          <BlogCard
            imgUrl="/images/blog-img.jpg"
            imgAlt="men with headset"
            tag="VR / AR"
            title="Virtual reality (VR) refers to a computer-generated."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        </div>
      </div>
    </section>
  );
}

export default BlogList;
