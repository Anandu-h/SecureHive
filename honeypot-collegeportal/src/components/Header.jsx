import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo/Portal Name */}
        <Link to="/" className="logo">
          <h1>College Portal</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#achievements">Achievements</Link>
          <Link to="/#placements">Placements</Link>
        </nav>

        {/* Login Buttons */}
        <div className="auth-buttons">
          <Link to="/login/student" className="btn btn-student">
            Student Login
          </Link>
          <Link to="/login/faculty" className="btn btn-faculty">
            Faculty Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
