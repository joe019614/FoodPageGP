import React, { useEffect, useRef } from "react";
import Logo1 from "./Logo.svg";
import "animate.css";
import MuiNavbar from "./MuiNavbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import icon from "./icon2.svg";

export default function Logo() {
  const logoRef = useRef(null);

  return (
    <>
      <MuiNavbar />
      <header className={styles.overlay}>
        <div className={styles["Logo-container"]}>
          <div
            style={{
              display: "block",
              justifyContent: "center",
            }}
          >
            <svg
              className={styles.loader}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 340 340"
            >
              <circle cx="170" cy="170" r="160" stroke="#808080" />
              <circle cx="170" cy="170" r="145" stroke="#fafafa" />

              <image
                href={icon}
                x="85" // Adjust the x position to center the image within the circle
                y="85" // Adjust the y position to center the image within the circle
                width="170" // Adjust the width of the image to fit within the circle
                height="170" // Adjust the height of the image to fit within the circle
              />
            </svg>
          </div>

          <div
            style={{
              display: "block",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Link to={"/MainPage/"}>
              <button className={styles["contact-button"]}>Enter </button>
            </Link>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
}
