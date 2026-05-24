import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo-icon.svg";
function Header() {
  return (
    <header className="header">
      <nav>
        <Link className="nav-link" to="/">
          <img className="header-logo" src={logo} alt="Travel Trucks Logo" />
        </Link>
        <div className="nav-menu">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/catalog">
            Catalog
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
