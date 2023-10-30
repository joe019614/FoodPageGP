import MuiNavbar from "../MuiNavbar";
import "./cuisine.css";
import SpanishVid from "./Spanish-Cuisine-Images/SpanishVid.mp4";
import React, { useState, useEffect } from "react";
import Ham01 from "./Spanish-Cuisine-Images/Ham01.jpg";
import Ham02 from "./Spanish-Cuisine-Images/Ham02.jpg";
import Ham03 from "./Spanish-Cuisine-Images/Ham03.jpg";
import Spain from "./Spanish-Cuisine-Images/Spain.jpg";
import Footer from "../Footer";
const Spanish = () => {
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
          <video src={SpanishVid} autoPlay loop muted />
          <div className="postConetent">
            <h1 className="title">Spanish Cuisine</h1>
            <a href="#spanishPost">↓↓ Tap here to view the post ↓↓</a>
            <div className="overlay"></div>
          </div>
        </div>
        <div
          className="cuisineContent"
          id="spanishPost"
          style={{
            backgroundImage: `url(${Spain})`,
          }}
        >
          <h1 className="posttitle">
            Spanish Ham: The Ultimate Guide To Serrano Ham & Iberian Ham
          </h1>
          <p className="intro">
            If you had to pick just one food to eat for the rest of your life,
            what would it be? I know what I'd go for: Spanish ham. In Spain,
            there's nothing quite as important as ham. It's bigger than
            religion, bigger than football, and goes beyond just a regular
            obsession. This isn't just food, it's life. Don't believe me? Just
            ask a local! All you need to do is mention jamón ibérico to a
            Spaniard and you'll see their eyes glaze over and their mouth start
            to water.
          </p>
          <h2 className="ramenSubheadings">The Best Ham In The World</h2>
          <p className="intro">
            There are few foods that are more Spanish than ham. Alongside
            gazpacho and paella, it might just be the country's most iconic
            food. Spanish ham (jamón) is the one food that all Spaniards, by
            virtue of just being Spanish, have to like. Whenever I've heard a
            foreigner say they don't like jamón, the response of every single
            Spaniard has been, "well then you haven't tried the good stuff!"
          </p>
          <div className="cuisine">
            <img className="cuisineImage" src={Ham01} alt="Ham" />
            <div className="cuisineContext">
              <h3 className="subheading">Serrano Ham</h3>
              <p>
                Jamón serrano is the name of the most common type of Spanish
                ham. In fact, it makes up 93% of all ham production in Spain!
                You'll see it in supermarkets and on bar menus, and can eat it
                as a snack or on a sandwich. It's simple and tasty, but it's the
                least special kind of ham. If this is the only ham you eat while
                you're in Spain, you've done yourself a disservice!
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Ham02} alt="Ham" />
            <div className="cuisineContext">
              <h3 className="subheading">White Pigs (Cerdos Blancos)</h3>
              <p>
                Serrano ham comes from pigs with the slightly misleading name of
                "white pigs." If you picture a pig, you're probably imagining a
                cerdo blanco. These pink animals are a common sight throughout
                the world, and the breed is usually Landrace, Large White,
                Duroc, or Pietrain. They were purpose-bred for industry, suited
                for mass production of pork.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Ham03} alt="Ham" />
            <div className="cuisineContext">
              <h3 className="subheading">Iberian Ham</h3>
              <p>
                This is where the magic happens. Although it only accounts for
                7% of production, Iberian ham is the best kind of Spanish ham.
                It's the stuff that makes Spaniards weak at the knees, and makes
                grown men weep with joy! While there are some reasonably priced
                hams for around 100 euros, you'll also see legs sold for over
                1,000 euros at any good deli in the country.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Spanish;
