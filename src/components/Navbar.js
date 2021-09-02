import { Link } from "react-router-dom";

//stateless functional component (sfc)
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ismail Website</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
