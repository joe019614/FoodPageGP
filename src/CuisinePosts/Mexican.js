import "./cuisine.css";
import MexicanVid from "./Mexican-Cuisine-Images/MexicanVid.mp4";
import Machaca from "./Mexican-Cuisine-Images/Machaca.jpeg";
import Chilaquiles from "./Mexican-Cuisine-Images/Chilaquiles.webp";
import HuevosRancheros from "./Mexican-Cuisine-Images/HuevosRancheros.jpeg";
import MuiNavbar from "../MuiNavbar";
import Mexico from "./Mexican-Cuisine-Images/Mexico.jpg";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
const Mexican = () => {
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
          {/* <div className="overlay"></div> */}
          <video src={MexicanVid} autoPlay loop muted />
          <div className="postConetent">
            <h1 className="title">Mexican Cuisine</h1>
            <a href="#MexicanPost">↓↓ Tap here to view the post ↓↓</a>
            <div className="overlay"></div>
          </div>
        </div>
        <div
          className="cuisineContent"
          id="MexicanPost"
          style={{ backgroundImage: `url(${Mexico})` }}
        >
          <h1>Top 3 Popular Indian Cuisine You Must Try</h1>
          <h2>
            Indian food, not unlike any other country’s national food scene, is
            a vast constellation of culinary influences and traditions from all
            over the Asian continent.
          </h2>
          <div className="cuisine">
            <img className="cuisineImage" src={Chilaquiles} alt="Chilaquiles" />
            <div className="cuisineContext">
              <h3 className="subheading">1. Chilaquiles</h3>
              <p>
                Chilaquiles is definitely the most popular breakfast in the
                country. Made of triangular pieces of fried or toasted corn
                tortilla, called totopos, soaked in a red or green hot sauce,
                topped with shredded chicken, chorizo, shredded beef, and
                scrambled or sunny side up egg. It is decorated with fresh
                cheese, coriander, and sliced onion and is served with fried
                beans on the side.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={HuevosRancheros}
              alt="HuevosRancheros"
            />
            <div className="cuisineContext">
              <h3 className="subheading">2. Huevos Rancheros</h3>
              <p>
                These represent the hats of two ranchmen. It´s made with two
                fried corn tortillas, topped with fried beans, and two sunny
                side up eggs all bathed in red hot sauce and decorated with
                coriander and freshly ground black pepper.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Machaca} alt=" Machaca" />
            <div className="cuisineContext">
              <h3 className="subheading">3. Machaca</h3>
              <p>
                This is one of the most popular dishes on the northern side of
                México. Machaca is very versatile; you can either eat it in a
                taco, a stuffed burrito, flautas, or just as a stew with some
                tortillas, beans, or rice on the side. Machaca is simply a
                shredded version of dried beef with a proper seasoning. It´s
                delicious!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mexican;
