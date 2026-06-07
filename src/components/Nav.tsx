import { NavLink } from "react-router-dom";
import { IconSun, IconMoon } from "@tabler/icons-react";
import "../styles/nav.css";

interface NavProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-name">
          alan jones
        </NavLink>
        <div className="nav-links">
          <NavLink to="/notes"      className={({ isActive }) => isActive ? "active" : ""}>notes</NavLink>
          <NavLink to="/work"       className={({ isActive }) => isActive ? "active" : ""}>work</NavLink>
          <NavLink to="/principles" className={({ isActive }) => isActive ? "active" : ""}>principles</NavLink>
          <NavLink to="/about"      className={({ isActive }) => isActive ? "active" : ""}>about</NavLink>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle dark mode">
            {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
