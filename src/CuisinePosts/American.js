import "./cuisine.css";
import AmericanVid from "./American-Cuisine-Images/AmericanVid.mp4";
import MuiNavbar from "../MuiNavbar";
import React, { useState, useEffect } from "react";
import Burger01 from "./American-Cuisine-Images/Burger01.jpg";
import Burger06 from "./American-Cuisine-Images/Burger06.jpg";
import America from "./American-Cuisine-Images/America.jpg";
import Footer from "../Footer";

const American = () => {
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
          <video src={AmericanVid} autoPlay loop muted />
          <div className="postConetent">
            <h1 className="title">American Cuisine</h1>
            <a href="#americanPost">↓↓ Tap here to view the post ↓↓</a>
            <div className="overlay"></div>
          </div>
        </div>
        <div
          className="cuisineContent"
          id="americanPost"
          style={{ backgroundImage: `url(${America})` }}
        >
          <h1 className="posttitle">THE BURGER BLOG</h1>
          <p className="intro">
            The humble burger has been a staple of our diet since the late 19th
            century, starting life as a high society dish, that was one of the
            most expensive out there to morphing into convenience food. Today it
            is enjoyed by millions daily and can be described as the most
            successful American export.
          </p>
          <h2 className="ramenSubheadings">
            The Hamburger Becomes a Fast Food Staple
          </h2>
          <p className="intro">
            The hamburger seems to have made its jump from plate to bun in the
            last decades of the 19th century, though the site of this
            transformation is highly contested. Lunch wagons, fair stands and
            roadside restaurants in Wisconsin, Connecticut, Ohio, New York and
            Texas have all been put forward as possible sites of the hamburger’s
            birth. Whatever its genesis, the burger-on-a-bun found its first
            wide audience at the 1904 St. Louis World’s Fair, which also
            introduced millions of Americans to new foods ranging from waffle
            ice cream cones and cotton candy to peanut butter and iced tea.
          </p>

          <h2 className="ramenSubheadings">Toppings</h2>
          <p className="ramenContext">
            Below is a list of toppings that are commonly served with burger:
            <br></br>
            <br></br>
            <br></br>
            <li>Chiles</li>
            <p className="toppings">
              If you’re from the west coast, you’ll know, we want a little spice
              on just about everything. On a burger, some chopped chiles cut
              through the heavy meats and cheeses. They offer that perfect touch
              of tanginess to take your plain cheeseburger to another level.
              Plus, spicy food is known to enhance your metabolism. So whatever
              chile pepper you get (jalapeños, green chiles, pepperoncinis) it
              will be good for your health and your taste buds.
            </p>
            <li>Bacon</li>
            <p className="toppings">
              Lately, you can hardly find a burger that doesn’t have bacon on
              it. And there’s a reason for that! Add to the savory goodness of
              your burger with some thick, smokey, salty strips of bacon. It
              gives your burger texture and intense flavor, and makes any burger
              taste better. You just can’t go wrong with bacon! This one is
              definitely a must-have on my list.
            </p>
            <li>Pickles</li>
            <p className="toppings">
              Perhaps the epitome of delicious toppings, pickles provide that
              extra punch of zest and perfect juiciness. Whether you go with
              dill, sweet, cucumber, or zucchini, you simply can’t go wrong with
              a sweet, crunchy pickle.
            </p>
            <li>Condiments</li>
            <p className="toppings">
              Condiments are an essential burger topping. They add flavor,
              texture, and moisture, all much needed ingredients. Spicy, creamy,
              fresh, or rich, I can’t even imagine a burger without some kind of
              condiment! Ketchup and mustard are absolute classics. If you don’t
              put anything else on a burger, you’ve at least got to have this
              flavorful pair. You could also go in the direction of thousand
              island or ranch for an extra creamy and decadent burger. And of
              course mayo is a must have ingredient for adding a little moisture
              on your buns.
            </p>
            <li> Lettuce</li>
            <p className="toppings">
              Lettuce on a burger has to be crunchy since it doesn’t add a lot
              of flavor. You could add mixed greens or arugula for something
              with a little more zing, but my advice is just to make sure your
              romaine stays crisp. One way to do so is to wait to wash your head
              of lettuce until you’re about to use it. This way the leaves don’t
              go soggy sitting in your fridge. And even if your lettuce does end
              up getting a little sad looking, there’s a trick for that too!
              Soak your lettuce in an ice bath for a few minutes and it will
              perk back up.
            </p>
            <li>Onions</li>
            <p className="toppings">
              Onions are another super versatile burger topping. When popped on
              top raw, they offer a fresh, spicy kick that is a much needed
              contrast to the greasiness of the beef patty and cheese.
              Caramelized onions give a light sweetness, and fried onions just
              taste great! No matter your preference on onion type, they add
              dimension and personality to your meal. Fun Fact: Onions are one
              of the secret ingredients in White Castle burgers. They stack a
              pile of onions on the grill and then cook the patties on top. It
              almost looks like the onions are actually cooked into the patty
              itself. Which is part of what creates their signature flavor.
            </p>
            <li>Cheese</li>
            <p className="toppings">
              Cheese is a must-have ingredient when it comes to burgers. Cheese
              goes with burgers like peanut butter goes with jelly. Whether it’s
              a thin slice of American, a rich piece of Swiss, or a creamy
              Provolone, you absolutely have to have cheese.
            </p>
            <li>Fried Egg</li>
            <p className="toppings">
              This is a more controversial topping. Some people don’t want to
              deal with the mess of the runny yolk. And others think that the
              combination of egg and ground beef is simply too rich.
            </p>
            <li>Pineapple</li>
            <p className="toppings">
              For a tropical feel, go with a thick slice of pineapple and your
              favorite BBQ sauce. Pineapple is so bright, flavorful, and juicy,
              it could be the only topping and still taste amazing.
            </p>
          </p>
          <div className="ramenImage">
            <img className="ramenimage" src={Burger01} alt="burger" />
            <img className="ramenimage" src={Burger06} alt="burger" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default American;
