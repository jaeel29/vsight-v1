import { useRouter } from "next/router";

function BlogPost() {
  const router = useRouter();

  return (
    <div>
      <h1>This is the blog post with ID : {router.query.blogId}</h1>
    </div>
  );
}

export default BlogPost;
