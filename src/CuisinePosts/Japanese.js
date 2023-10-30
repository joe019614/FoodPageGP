import "./cuisine.css";
import JapaneseVid from "./Japanese-Cuisine-Images/JapaneseVid.mp4";
import ShoYuRamen from "./Japanese-Cuisine-Images/ShoYuRamen.jpg";
import ShioRamen from "./Japanese-Cuisine-Images/ShioRamen.jpg";
import MisoRamen from "./Japanese-Cuisine-Images/MisoRamen.jpg";
import TonkotsuRamen from "./Japanese-Cuisine-Images/TonkotsuRamen.jpg";
import RamenBackground from "./Japanese-Cuisine-Images/RamenBackground.jpg";
import RamenBackground2 from "./Japanese-Cuisine-Images/RamenBackground2.jpg";
import Japan from "./Japanese-Cuisine-Images/Japan.jpg";
import MuiNavbar from "../MuiNavbar";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
const Japanese = () => {
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
      <div className="cuisinePage" id="ramen">
        <div className="cuisineVid">
          <video src={JapaneseVid} autoPlay loop muted />
          <div className="postConetent">
            <h1 className="title">Japanese Cuisine</h1>
            <a href="#japanesePost">↓↓ Tap here to view the post ↓↓</a>
            <div className="overlay"></div>
          </div>
        </div>
        <div
          className="cuisineContent"
          id="japanesePost"
          style={{ backgroundImage: `url(${Japan})` }}
        >
          <h1 className="posttitle">Ramen in Japan</h1>
          <p className="intro">
            Ramen (ラーメン) is a noodle soup dish that was originally imported
            from China and has become one of the most popular dishes in Japan in
            recent decades. Ramen are inexpensive and widely available, two
            factors that also make them an ideal option for budget travelers.
            Ramen restaurants, or ramen-ya, can be found in virtually every
            corner of the country and produce countless regional variations of
            this common noodle dish.
          </p>
          <h2 className="ramenSubheadings">Popular Ramen Types</h2>
          <p className="intro">
            Ramen are typically categorized according to their soup base,
            although variations that combine the different bases are not
            uncommon. <br></br>The main types of soup are:
          </p>
          <div className="cuisine">
            <img className="cuisineImage" src={ShoYuRamen} alt="ShoYuRamen" />
            <div className="cuisineContext">
              <h3 className="subheading">1. Shoyu (soy sauce)</h3>
              <p>
                Shoyu ramen soup is a clear, brown broth flavored with soy sauce
                (shoyu). The soup is usually made of chicken broth but often
                contains other meats such as pork, beef or fish depending on the
                region. Shoyu ramen is the most common type of ramen and is
                usually what is served when the menu does not specify a specific
                type of soup.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={ShioRamen} alt="ShioRamen" />
            <div className="cuisineContext">
              <h3 className="subheading">2. Shio (salt)</h3>
              <p>
                Shio ramen soup is a light, clear broth seasoned with salt. It
                is typically made from chicken broth, but may also be flavored
                with other meats such as pork.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={MisoRamen} alt="MisoRamen" />
            <div className="cuisineContext">
              <h3 className="subheading">3. Miso (soybean paste)</h3>
              <p>
                Miso ramen soup is flavored with soybean paste (miso), resulting
                in a thick, brown soup with a rich, complex flavor. The style
                originated in Hokkaido where the long cold winters spurred the
                need for a heartier type of ramen soup, but it has spread to the
                point where it can be found pretty much anywhere in Japan.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={TonkotsuRamen}
              alt="TonkotsuRamen"
            />
            <div className="cuisineContext">
              <h3 className="subheading">4. Tonkotsu (pork bone)</h3>
              <p>
                Particularly popular around Kyushu, tonkotsu ramen is made of
                pork bones which have been boiled down until they dissolve into
                a cloudy white broth. The thick, creamy soup is also often
                flavored with chicken broth and pork fat.
              </p>
            </div>
          </div>
          <h2 className="ramenSubheadings">Ramen noodles</h2>
          <p className="ramenContext">
            Ramen (ラーメン) is a noodle soup dish that was originally imported
            from China and has become one of the most popular dishes in Japan in
            recent decades. Ramen are inexpensive and widely available, two
            factors that also make them an ideal option for budget travelers.
            Ramen restaurants, or ramen-ya, can be found in virtually every
            corner of the country and produce countless regional variations of
            this common noodle dish.
          </p>
          <h2 className="ramenSubheadings">Toppings</h2>
          <p className="ramenContext">
            Below is a list of toppings that are commonly served with ramen:
            <br></br>
            <br></br>
            <br></br>
            <li>Chashu</li>
            <p className="toppings">
              Fatty slices of roasted or braised pork. Chashu is a very common
              topping, and standard bowls of ramen usually come with one or two
              slices of it. Most ramen-ya also serve Chashumen (chashu ramen)
              which is a ramen dish with additional pieces of chashu. Kakuni
              (braised pork belly) is served instead of chashu at some
              restaurants.
            </p>
            <li>Menma</li>
            <p className="toppings">
              Preserved bamboo shoots with a salty flavor
            </p>
            <li>Negi</li>
            <p className="toppings">
              Chopped or shredded leeks or green onions. Karanegi is a spicy
              variation of shredded leeks mixed with chili oil. Negi is a ramen
              standard, while karanegi is often seen with miso ramen.
            </p>
            <li>Moyashi</li>
            <p className="toppings">
              Raw or cooked bean sprouts add sweetness and crunch. Served on all
              types of ramen.
            </p>
            <li>Tamago</li>
            <p className="toppings">
              Hard boiled, soft boiled, raw and marinated eggs are all popular
              toppings on any type of ramen.
            </p>
            <li>Seaweed</li>
            <p className="toppings">
              Various types of seaweed such as wakame and nori are commonly
              added to all types of ramen.
            </p>
            <li>Kamaboko</li>
            <p className="toppings">
              Slices of steamed fish cake. One type of kamaboko that is commonly
              served on ramen is naruto (or narutomaki), a sawtooth edged, white
              fish cake with a pink spiral design on it.
            </p>
            <li>Corn</li>
            <p className="toppings">
              Canned corn is often paired with butter and served on miso or shio
              ramen.
            </p>
            <li>Butter</li>
            <p className="toppings">
              A thick pat of butter adds creaminess and depth. Typically added
              to miso or shio ramen.
            </p>
          </p>
          <div className="ramenImage">
            <img
              className="ramenimage"
              src={RamenBackground}
              alt="RamenImage"
            />
            <img
              className="ramenimage"
              src={RamenBackground2}
              alt="RamenImage"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Japanese;
