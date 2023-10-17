import "./cuisine.css";
import React, { useState, useEffect } from "react";
import ItalianVid from "./Italian-Cuisine-Images/ItalianVid.mp4";
import Pizza from "./Italian-Cuisine-Images/Pizza.jpeg";
import Bruschetta from "./Italian-Cuisine-Images/Bruschetta.jpeg";
import Tiramisù from "./Italian-Cuisine-Images/Tiramisù.jpeg";
import Risotto from "./Italian-Cuisine-Images/Risotto.jpeg";
import Ravioli from "./Italian-Cuisine-Images/Ravioli.jpeg";
import PizzaNapoletana from "./Italian-Cuisine-Images/PizzaNapoletana.jpeg";
import PastaCarbonara from "./Italian-Cuisine-Images/PastaCarbonara.jpeg";
import Nougat from "./Italian-Cuisine-Images/Nougat.jpeg";
import Gnocchi from "./Italian-Cuisine-Images/Gnocchi.jpeg";
import Classic from "./Italian-Cuisine-Images/Classic.jpeg";
import MuiNavbar from "../MuiNavbar";
import Italy from "./Italian-Cuisine-Images/Italy.jpg";
import Footer from "../Footer";

const Italian = () => {
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
          <video src={ItalianVid} autoPlay loop muted />
          <div className="postConetent">
            <h1 className="title">Italian Cuisine</h1>
            <a href="#italianPost">↓↓ Tap here to view the post ↓↓</a>
            <div className="overlay"></div>
          </div>
        </div>
        <div
          className="cuisineContent"
          id="italianPost"
          style={{ backgroundImage: `url(${Italy})` }}
        >
          <h1>
            Food in Italy: 10 Popular Italian Dishes You Need To Try Next Visit
          </h1>
          <span className="shortIntro">
            A vacation in Italy is a dream come true for people who appreciate
            vino (wine), antipasti, and medieval architecture. It is a country
            that hosts millions of tourists every year who can be marvelling at
            the majestic churches, mansions, and street fairs in famous cities
            like Rome, Florence, Venice, and Milan. For a more relaxed trip in
            the hills, Tuscany is the destination where tourists spend most of
            their time. Wherever you go, all traditional Italian dishes are
            simply amazing. Or you can always do as the Romans, quite literally
            in this country, by exclaiming: Ottimo! This means that the food is
            delicious to the last bite. With so many places to visit in Italy,
            building up an appetite is a prerequisite for every traveller.
            Mentioned below are the top 10 most iconic foods of Italy that you
            can devour on your next vacation:
          </span>
          <ReadMoreButton></ReadMoreButton>
          <div className="cuisine">
            <img className="cuisineImage" src={Pizza} alt="Pizza" />
            <div className="cuisineContext">
              <h3 className="subheading">1. Pizza</h3>
              <p>
                The story of the invention of this everyday household name
                changes depending on how you define it. If you think a pizza is
                an oven-baked flatbread, its origins lie in the ancient Middle
                East.
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  If pizza must have toppings, its origins date back to the
                  ancient Romans and Greeks, who baked flatbreads and topped
                  them with available, local spices and olive oil. But the pizza
                  we all know today, made with tomato sauce, cheese, and
                  numerous toppings, originated in Italy. <br></br>
                  <br></br>It became popular in Naples in the 18th century as a
                  cheap, nourishing food that was consumed mainly by peasants.
                  The modern pizza as we know it today evolved from early
                  Neapolitan flatbreads topped with lard, salt, and garlic.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Classic} alt="Classic" />
            <div className="cuisineContext">
              <h3 className="subheading">
                2. Tagliatelle al ragù alla Bolognese
              </h3>
              <p>
                Tagliatelle al ragù alla Bolognese is a traditional Italian dish
                originating from Bologna, consisting of tagliatelle pasta and a
                rich ragù made with a mixture of minced beef and pork, and
                tomatoes as key ingredients.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  Even though they are often thought to be synonymous,
                  tagliatelle al ragù—one of Bologna's signature dishes—bears
                  little or no resemblance to the dish known as spaghetti
                  Bolognese in the rest of the world. <br></br>
                  <br></br>In fact, the world famous Italian ragù alla Bolognese
                  meat sauce is never served with spaghetti in Bologna. Instead,
                  when it isn't served over fresh tagliatelle, you will most
                  often find it topping a bed of some other other ribbon-like
                  pasta, such as fettuccine or pappardelle. <br></br>
                  <br></br>Regardless of the type of pasta used, what makes or
                  breaks this classic Emilian dish is the ragù itself. Experts
                  nowadays tend to consider the recipe for ragù alla Bolognese
                  registered by the Italian Academy of Cuisine in October 1982
                  the most authentic version.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Gnocchi} alt="Gnocchi" />
            <div className="cuisineContext">
              <h3 className="subheading">3. Gnocchi</h3>
              <p>
                This is the traditional Italian form of dumplings. Today, the
                word gnocchi usually refers to a dumpling made with potato-based
                dough shaped into thick bite-sized pieces and pressed into a
                ribbed wooden board or grater to create an imprint, which helps
                the sauce to adhere to each piece.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  They are typically boiled in large amounts of salted water or
                  fried in shallow oil, a technique typical for some Italian
                  regions. Gnocchi are believed to have been a predecessor of
                  pasta, and historical records show that the term gnocchi, or
                  gnocco, was sometimes interchangeably used with the word
                  maccherone, a word that once referred to all pasta in general.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={PastaCarbonara}
              alt="PastaCarbonara"
            />
            <div className="cuisineContext">
              <h3 className="subheading">4. Pasta carbonara</h3>
              <p>
                The carbonara we know today is prepared by simply tossing
                spaghetti with guanciale (cured pork jowl), egg yolks, and
                Pecorino Romano cheese. Despite its simplicity, this dish
                remains one of Rome's favorites, equally popular throughout the
                country.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  Even though carbonara is considered a typical Roman dish
                  today, its origins are quite vague and often disputed. The
                  name is said to have been derived from the carbonari,
                  woodcutters and charcoal-makers who lived in the Appenine
                  mountains northeast of Rome, and who supposedly cooked their
                  pasta over a hardwood charcoal fire and tossed it with eggs
                  and cheese.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={PizzaNapoletana}
              alt=" PizzaNapoletana "
            />
            <div className="cuisineContext">
              <h3 className="subheading">5. Pizza Napoletana</h3>
              <p>
                Italy’s most emblematic culinary creation, the genuine pizza
                Napoletana is made with just a few simple ingredients and
                prepared in only two variations – marinara, the basic Neapolitan
                pizza topped with a tomato-based sauce flavored with garlic and
                oregano, and margherita, which is topped with tomatoes,
                mozzarella, and fresh basil leaves, a delicious combination
                whose colors are said to represent the Italian flag.
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  {" "}
                  <br></br>
                  The crust is very thin at the base, and the dough puffs up on
                  the sides, which results in airy crust that should have
                  typical charred 'leopard spots' if baked properly. The origins
                  of this iconic Neapolitan dish can be traced to the early
                  1700s, when what we know today as pizza marinara was first
                  described by Italian chef, writer, and philosopher Vincenzo
                  Corrado in his treatise on the eating habits of the people of
                  Naples.<br></br> <br></br>
                  Almost 200 years later, in 1889, the premier Neapolitan master
                  pizzaiolo Raffaele Esposito added mozzarella to the mix and
                  invented the margherita, which is now generally cited as the
                  first modern pizza. Originally dubbed la pizza tricolore,
                  Esposito’s creation is said to have been made in honor of and
                  named after Margherita of Savoy, the Queen consort of the
                  Kingdom of Italy, who was visiting Naples at the time.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Nougat} alt="KungPaoChickent" />
            <div className="cuisineContext">
              <h3 className="subheading">6. Nougat</h3>
              <p>
                This is one of the oldest types of confections, and varieties
                can be found throughout Italy, Spain, France, the Balkans, and
                the Middle East. Although each region has its own distinctive
                type, most nougats are made of whipped egg white mixed with
                roasted chopped nuts such as almonds, pistachios, walnuts, and
                hazelnuts.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  The result is a sweet treat with a chewy consistency. The
                  exact origin of nougat is hard to trace, but the first recipe
                  for a sweet resembling white nougat called natif was recorded
                  in a 10th-century book found in Baghdad. Nougat can be divided
                  into numerous categories, but the most basic distinction is
                  made between soft or hard nougat, depending on whether it is
                  made with honey or sugar. <br></br>
                  <br></br>In Italy, nougat is torrone, and each city and region
                  has its own traditional type of torrone, ranging from hard
                  versions made with sugar to soft and chewy honey-based
                  varieties. French nougat is predominately made without eggs
                  and with a larger proportion of nuts, while the Spanish
                  usually use roasted almonds and raw honey.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Ravioli} alt="Ravioli" />
            <div className="cuisineContext">
              <h3 className="subheading">7. Ravioli</h3>
              <p>
                The word ravioli denotes various kinds of pasta made by placing
                a filling between two thin layers of dough. The pasta used is
                typically wheat flour and egg based, and it acts as an enclosure
                while also binding with the sauce or broth the ravioli is cooked
                or served in.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  Ravioli are usually served boiled with a sauce as a first
                  course, or boiled and served in broth as a traditional winter
                  dish. Ravioli fillings include diverse varieties of meat,
                  cheese, and vegetables, and they vary from region to region.
                  There are also sweet ravioli, which are usually deep-fried.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Risotto} alt="Risotto " />
            <div className="cuisineContext">
              <h3 className="subheading">8. Risotto</h3>
              <p>
                This widely popular and extremely versatile group of dishes
                consists of a base of rice and stock. Butter, saffron, and
                parmesan are some of the ingredients most often combined with
                the base to make a variety of flavorful risottos. The history of
                the dish is rife with conflicting theories about its origins,
                however, it is certain that rice was first introduced to Italy
                by the Arabs during the Middle Ages.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  Since the Mediterranean climate was perfect for growing
                  short-grain rice, huge amounts of it started to be sold -
                  primarily in Venice, Genoa, and the surrounding areas. As rice
                  gained in popularity, it became a staple food of the Po
                  valley, Lombardy, Piedmont, Veneto, and the city of Milan.{" "}
                  <br></br>
                  <br></br>It was only a matter of time before rice was combined
                  with saffron, which the Milan region was famous for, and the
                  legendary risotto alla Milanese was invented. Even today,
                  risotto is still usually prepared using the same key
                  components: rice, stock, butter, wine, parmesan, saffron, and
                  onions.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Tiramisù} alt=" Tiramisù " />
            <div className="cuisineContext">
              <h3 className="subheading">9. Tiramisù </h3>
              <p>
                Even though tiramisù is actually a fairly recent invention, this
                dessert of coffee-soaked ladyfingers layered with mascarpone
                cream enjoys an iconic status among Italian desserts. Its name
                stems from the phrase tirami sù, an Italian expression which
                literally means pick me up, a reference to the uplifting effects
                of sugar, liquor, and coffee.
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br> The origins of tiramisù are heavily disputed between
                  Veneto and Friuli-Venezia Giulia regions, but it is often
                  suggested that the first was made in Veneto in the early
                  1960s. The earliest documented recipe for tiramisù
                  (interestingly, without alcohol!) was printed in the 1981
                  spring edition of Vin Veneto magazine in an article on
                  coffee-based desserts by Giuseppe Maffioli, a renowned food
                  critic and member of the Italian Academy of Cuisine.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Bruschetta} alt="Bruschetta" />
            <div className="cuisineContext">
              <h3 className="subheading">10. Fried Rice</h3>
              <p>
                Bruschetta is a traditional Italian appetizer that's nowadays
                popular throughout the world. In its simplest form known as
                fettunta, this classic appetizer consists of a grilled slice of
                bread rubbed with garlic and drizzled with extra virgin olive
                oil.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  <br></br>
                  According to Marcella Hazan, a cookery writer and one of the
                  foremost authorities on Italian cuisine, the history of
                  bruschetta dates back to ancient Rome – its name stems from
                  the old Latin bruscare (meaning “to roast over coals”).{" "}
                  <br></br>
                  <br></br> Once merely a snack of Italian farmers and olive
                  pickers, the versatile bruschetta has grown into one of the
                  most delicious antipasti Italian cuisine has to offer.
                  Nowadays, bruschetta comes in virtually infinite varieties:
                  spread with bell pepper, mushroom, eggplant, or zucchini
                  pâtés, and topped with small chunks of eggplant, figs,
                  scamorza cheese, mozzarella, or even anchovies, prosciutto, or
                  various types of salami.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Italian;
