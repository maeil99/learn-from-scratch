import "./App.css";

export function App() {
  //create variable
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.youtube.com";
  //declare object
  const person = {
    name: "Ismail",
    age: 22,
  };
  return (
    <div className="App">
      <div className="content">
        {/*use variable*/}
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* how to use object */}
        <p>This page is created by {person.name}</p>

        {/* use JS element in JSX */}
        <p>{Math.random() * 10}</p>
        {/* anchor tag */}
        <a href={link}>Youtube Site</a>
      </div>
    </div>
  );
}

export function Home() {
  const handleClick = () => {
    console.log("hello, Ismail");
  };
  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click me</button>
      {/* to use function with variable , it must me wrapped in anon function */}
      {/* if not , it will automatically run before use click the button */}
      <button onClick={() => handleClickAgain("ismail")}>Click me again</button>
    </div>
  );
}
