import BlogList from "./BlogList";
import useFetch from "../const/useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isLoading && <>Loading...</>}
      {isError && (
        <div>
          <p>An error occured...</p>
          <p style={{ color: "red" }}>Error message: {isError}</p>
        </div>
      )}
      {blogs && (
        <>
          {/* pass the value(props) of blog inside bloglist tag */}
          <BlogList blogs={blogs} title="All blogs" />
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "ismail")}
            title="Ismail's Blog"
          />
        </>
      )}
    </div>
  );
};

export default Home;
