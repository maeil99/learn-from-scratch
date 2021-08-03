import { useParams } from "react-router-dom";
import useFetch from "../const/useFetch";

const BlogDetails = () => {
  //able to use params from the link
  const { id } = useParams();
  const {
    data: blog,
    isError,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isLoading && <>Loading...</>}
      {isError && <>{isError}</>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
