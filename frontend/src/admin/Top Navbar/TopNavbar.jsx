import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./TopNavbar.css";
import { Link, useNavigate } from "react-router-dom";
const TopNavbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const showNavbar = () => {
    navRef.current.classList.toggle("kd_responsive_nav");
  };

  const handleClick = () => {
    localStorage.clear();
    navigate("/adminsignin");
  };
  return (
    <header>
      <img
        className="kd-logo"
        src="https://www.linkpicture.com/q/home-logo.jpg"
        alt="Logo"
      />
      <nav ref={navRef}>
        <li>
          <Link to={"/adminProperty"} className="kd-link">
            Property List
          </Link>
        </li>
        <li>
          <Link to={"/addproperty"} className="kd-link">
            Add Property
          </Link>
        </li>
        <li>
          <Link to={"/userlist"} className="kd-link">
            User List
          </Link>
        </li>
        <li>
          <Link to={"/adminlist"} className="kd-link">
            Admin List
          </Link>
        </li>
        <button className="kd-logout" onClick={handleClick}>
          Log-out
        </button>
        <button className="kd-nav-btn kd-nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="kd-nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default TopNavbar;
