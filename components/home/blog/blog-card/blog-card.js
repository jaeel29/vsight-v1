import classes from "./blog-card.module.scss";
import Image from "next/image";
import SectionLabel from "../../../ui/section-label/section-label";
import Link from "next/link";

function BlogCard({ imgUrl, imgAlt, tag, title, text }) {
  return (
    <div className={classes.blog}>
      <div className={classes.image}>
        <Image src={imgUrl} alt={imgAlt} width={370} height={400} />
      </div>
      <div className={classes.content}>
        <SectionLabel color="section-label-two">{tag}</SectionLabel>
        <Link href={`/blog/${title}`}>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default BlogCard;
