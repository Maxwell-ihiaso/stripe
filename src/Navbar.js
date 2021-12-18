import React from "react";
import { useGlobalContext } from "./context";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { sublinks, toggleSidebar, setLocation, closeSubmenu, openSubmenu } =
    useGlobalContext();

  const handleNavLinks = (e) => {
    const page = e.target.textContent;
    const navDimension = e.target.getBoundingClientRect();
    const top = navDimension.bottom - 3;
    const left = (navDimension.left + navDimension.right) / 2;

    setLocation({ page, position: { top, left } });
    openSubmenu();
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stipe-header" />
          <button className="toggle-btn btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={handleNavLinks}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="signin-btn btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
