import MuiNavbar from "../MuiNavbar";
import "./cuisine.css";
import IndianVid from "./Indian-Cuisine-Images/IndianVid.mp4";
import React, { useState, useEffect } from "react";
import AlooGobi from "./Indian-Cuisine-Images/AlooGobi.jpeg";
import ButterChicken from "./Indian-Cuisine-Images/ButterChicken.jpeg";
import ChanaMasala from "./Indian-Cuisine-Images/ChanaMasala.jpeg";
import India from "./Indian-Cuisine-Images/India.jpg";
import Footer from "../Footer";

const Indian = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showMore, setShowMore] = useState(false);

  const ReadMoreButton = () => {
    const handleClick = () => {
      setShowMore(!showMore);
    };

    return (
      <div className="read-more-btn" onClick={handleClick}>
        {showMore
          ? "Show Less"
          : "Click here to read the full context of this page"}
      </div>
    );
  };
  return (
    <>
      <MuiNavbar />
      <div className="cuisinePage">
        <div className="cuisineVid">
          <video src={IndianVid} autoPlay loop muted />
          <div className="postConetent">
            <h1 className="title">Indian Cuisine</h1>
            <a href="#indianPost">↓↓ Tap here to view the post ↓↓</a>
            <div className="overlay"></div>
          </div>
        </div>
        <div
          className="cuisineContent"
          id="indianPost"
          style={{ backgroundImage: `url(${India})` }}
        >
          <h1>Top 3 Popular Indian Cuisine You Must Try</h1>
          <h2>
            Indian food, not unlike any other country’s national food scene, is
            a vast constellation of culinary influences and traditions from all
            over the Asian continent.
          </h2>
          <div className="cuisine">
            <img className="cuisineImage" src={AlooGobi} alt="Aloo gobi" />

            <div className="cuisineContext">
              <h3 className="subheading">1. Aloo gobi</h3>
              <p>
                A reliable sight on Indian restaurant menus the world over, aloo
                gobi is a simple Indian food packed with flavor—and it just so
                happens to be one of the easiest vegan recipes ever. It can be
                served as a main, or a side, and pairs well with cool cucumber
                raita and fresh breads like roti or naan.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={ButterChicken}
              alt="Butter Chicken"
            />
            <div className="cuisineContext">
              <h3 className="subheading">2. Butter Chicken</h3>
              <p>
                No matter the cuisine, be it French or American Southern, an
                indulgent cream sauce cannot be denied. Indian food is no
                exception, and this Indian butter chicken recipe is a prime
                example.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={ChanaMasala} alt="ChanaMasala" />
            <div className="cuisineContext">
              <h3 className="subheading">3. Chana Masala</h3>
              <p>
                Any Indian spread is incomplete without chana masala, a Punjabi
                dish meaning “mixed spice chickpeas.” Its signature spiced tang
                is thanks to coriander, amchoor powder (a tangy dried green
                mango powder), and a combination of fresh and powdered chilies.
                Chana masala is high in protein and fiber, thanks to its star
                ingredient of chickpeas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Indian;
