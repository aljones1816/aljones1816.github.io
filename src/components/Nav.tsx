import { NavLink } from "react-router-dom";
import "../styles/nav.css";

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-name">
          alan jones
        </NavLink>
        <div className="nav-links">
          <NavLink to="/notes" className={({ isActive }) => isActive ? "active" : ""}>notes</NavLink>
          <NavLink to="/work"  className={({ isActive }) => isActive ? "active" : ""}>work</NavLink>
          <NavLink to="/principles" className={({ isActive }) => isActive ? "active" : ""}>principles</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>about</NavLink>
        </div>
      </div>
    </nav>
  );
}
