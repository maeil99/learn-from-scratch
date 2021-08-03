import { useHistory, useParams } from "react-router-dom";
import useFetch from "../const/useFetch";

const BlogDetails = () => {
  //able to use params from the link
  const { id } = useParams();
  const {
    data: blog,
    isError,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  //function to delete blog
 const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then (()=> {
      history.push('/');
    })
 }

  return (
    <div className="blog-details">
      {isLoading && <>Loading...</>}
      {isError && <>{isError}</>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
