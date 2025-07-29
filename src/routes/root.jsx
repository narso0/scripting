import { Outlet,  NavLink, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="navbar">
       <Link to="/" className="title"> <h1 >My Blog</h1></Link>
        <nav>
          <ul className="links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new-post"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
