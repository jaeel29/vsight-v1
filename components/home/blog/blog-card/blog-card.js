import classes from "./blog-card.module.scss";
import Image from "next/image";
import SectionLabel from "../../../ui/section-label/section-label";
import RightArrow from "../../../icons/right-arrow";
import Link from "next/link";

function BlogCard({ imgUrl, imgAlt, tag, title, text }) {
  return (
    <Link href={`/blog/${title}`}>
      <a className={classes.blog}>
        <div className={classes.image}>
          <Image src={imgUrl} alt={imgAlt} width={370} height={400} />
        </div>
        <div className={classes.content}>
          <SectionLabel color="section-label-two">{tag}</SectionLabel>

          <h2>{title}</h2>

          <p>
            {text}
            <span>
              <RightArrow />
            </span>
          </p>
        </div>
      </a>
    </Link>
  );
}

export default BlogCard;
