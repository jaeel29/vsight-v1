import classes from "./blog-card.module.scss";
import Image from "next/image";
// import SectionLabel from "../../../ui/section-label/section-label";
import RightArrow from "../../../icons/accessoirs/right-arrow";
import Link from "next/link";

const randomColor = ["section-label-two", "section-label-one"];

function BlogCard({ imgUrl, imgAlt, tags, title, text }) {
  return (
    <Link href={`/`}>
      <a className={classes.blog}>
        <div className={classes.image}>
          <Image src={imgUrl} alt={imgAlt} width={370} height={400} />
        </div>
        <div className={classes.content}>
          {tags.map((_, i) => (
            <span key={`#-tag-${i}`} className={classes.tags}>
              {tags[i]}
            </span>
          ))}
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
