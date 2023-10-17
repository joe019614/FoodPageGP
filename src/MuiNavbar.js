import React from "react";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

/* https://www.youtube.com/watch?v=y9iX6sfB40k */
const MuiNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 900) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={scrolled ? "navbar-scrolled" : "navbar-container"}>
      <ul>
        <div className="left">
          <IconButton size="large" edge="start" aria-label="logo">
            <Link to="/">
              <Home></Home>
            </Link>
          </IconButton>
          <li>
            <Link to="/MainPage">Home</Link>
          </li>
        </div>
        <div className="right">
          <li>
            <Link to="/MainPage/Country">Country</Link>
          </li>

          <li>
            <Link to="/MainPage/search?find_desc=&find_loc=hk">restaurant</Link>
          </li>
          <li>
            <Link to="/MainPage/Contact">AboutUs&Contacts</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MuiNavbar;
