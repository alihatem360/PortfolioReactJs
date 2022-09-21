import { Link } from "react-router-dom";
import "./style.css";
const Nav = () => {
  return (
    <>
      <div className="nav__bar">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
