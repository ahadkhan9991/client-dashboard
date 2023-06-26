import React, { useEffect, useState } from "react";
import Content from "./Content";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [headerToggleMargin, setHeaderToggleMargin] = useState(0); // Initialize margin value as 0

  const toggleNavbar = () => {
    setNavbarVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const showNavbar = () => {
      const nav = document.getElementById("nav-bar");
      const bodypd = document.getElementById("body-pd");
      const headerpd = document.getElementById("header");

      // Validate that all variables exist
      if (nav && bodypd && headerpd) {
        if (navbarVisible) {
          nav.classList.add("show1");
          bodypd.classList.add("body-pd");
          headerpd.classList.add("body-pd");
          setHeaderToggleMargin(70); // Update the margin value to 70 when the navbar is visible
        } else {
          nav.classList.remove("show1");
          bodypd.classList.remove("body-pd");
          headerpd.classList.remove("body-pd");
          setHeaderToggleMargin(0); // Reset the margin value to 0 when the navbar is not visible
        }
      }
    };

    showNavbar();
  }, [navbarVisible]);

  const colorLink = (event) => {
    const linkColor = document.querySelectorAll(".nav_link");
    linkColor.forEach((l) => l.classList.remove("active"));
    event.target.classList.add("active");
  };

  return (
    <div className="" id="body-pd">
      <header className="header" id="header">
        <div
          className="header_toggle"
          style={{ marginLeft: `${headerToggleMargin}px` }} // Apply the left margin dynamically
        >
          <i
            className={!navbarVisible ? "bx bx-menu" : "bx bx-x"}
            id="header-toggle"
            onClick={toggleNavbar}
          ></i>
        </div>
        <div className="header_img">
          <div className="">
            <a href="" className="bell">
              <i className="bx bxs-bell-ring"></i>
            </a>{" "}
            <a href="" className="bell">
              <i className="bx bx-wallet"></i>
            </a>{" "}
          </div>
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <aside>
        {/* Rest of your code */}
        <div className="side-nav" id="nav-bar">
          <nav className="nav">
            <div>
              <Link to="/" className="nav_logo">
                {" "}
                <img src="images/logo.webp" alt="Logo" />{" "}
                {/* <i className={!navbarVisible ? "bx bx-menu" : "bx bx-x"} id="header-toggle" onClick={toggleNavbar}></i> */}
              </Link>
              <div className="nav_list">
                <a
                  href="#"
                  className="nav_link active"
                  onClick={colorLink}
                >
                  <i className="bx bx-grid-alt nav_icon"></i>{" "}
                  <span className="nav_name">Dashboard</span>{" "}
                </a>
                <Link
                  to="/my-order"
                  className="nav_link"
                  onClick={colorLink}
                >
                  <i className="bx bx-user nav_icon"></i>{" "}
                  <span className="nav_name">My Orders</span>{" "}
                </Link>
                <Link to="/all-order" className="nav_link">
                  <i className="bx bx-cart-alt nav_icon"></i>{" "}
                  <span className="nav_name">All Orders</span>
                </Link>
                <a href="#" className="nav_link">
                  <i className="bx bx-bookmark nav_icon"></i>{" "}
                  <span className="nav_name">More Services</span>{" "}
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-cog nav_icon"></i>{" "}
                  <span className="nav_name">Setting</span>{" "}
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-money-withdraw nav_icon"></i>{" "}
                  <span className="nav_name">Loyalty Bonus</span>{" "}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Header;
