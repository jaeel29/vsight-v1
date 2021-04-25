import classes from "./blog-list.module.scss";
import BlogCard from "./blog-card/blog-card";
import RightArrow from "../../icons/accessoirs/right-arrow";
import SectionLabel from "../../ui/section-label/section-label";
import Button from "../../ui/Button/Button";
import Link from "next/link";
import { posts } from "../../../data/blog";

function BlogList() {
  return (
    <section id="blog" className={classes.blogs}>
      <div className="container">
        <div className={classes.title}>
          <SectionLabel color="section-label-one center">Blog</SectionLabel>
          <h3 className="section-title center">Latest Articles</h3>
        </div>
        <div className={classes.articles}>
          {posts.map(({ image, text, title, tags }) => (
            <BlogCard
              key={image}
              imgUrl={image}
              imgAlt=""
              tags={tags}
              title={title}
              text={text}
            />
          ))}
        </div>
      </div>

      <Link href="/">
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
