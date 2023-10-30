import "./cuisine.css";
import China from "./Chinese-Cuisine-Images/China.jpg";
import RoastedDuck from "./Chinese-Cuisine-Images/RoastedDuck.png";
import HotPot from "./Chinese-Cuisine-Images/HotPot.png";
import xiaolongbao from "./Chinese-Cuisine-Images/xiaolongbao.webp";
import CharSiu from "./Chinese-Cuisine-Images/CharSiu.webp";
import DimSum from "./Chinese-Cuisine-Images/DimSum.webp";
import KungPaoChicken from "./Chinese-Cuisine-Images/KungPaoChicken.webp";
import SweetAndSourPork from "./Chinese-Cuisine-Images/SweetAndSourPork.webp";
import MaPoTofu from "./Chinese-Cuisine-Images/MaPoTofu.webp";
import Dumplings from "./Chinese-Cuisine-Images/Dumplings.webp";
import FriedRice from "./Chinese-Cuisine-Images/FriedRice.webp";
import ChineseVid from "./Chinese-Cuisine-Images/ChineseVid.mp4";
import React, { useState, useEffect } from "react";
import MuiNavbar from "../MuiNavbar";
import Footer from "../Footer";

const Chinese = () => {
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
          <video src={ChineseVid} autoPlay loop muted />
          <div className="postConetent">
            <h1 className="title">Chinese Cuisine</h1>
            <a href="#chinesePost">↓↓ Tap here to view the post ↓↓</a>
            <div className="overlay"></div>
          </div>
        </div>

        <div
          className="cuisineContent"
          id="chinesePost"
          style={{ backgroundImage: `url(${China})` }}
        >
          <h1>
            Food in China: 10 Popular Chinese Dishes You Need To Try Next Visit
          </h1>
          <span className="shortIntro">
            According to the cooking styles and regional flavors, Chinese
            cuisines can be divided into eight Chinse cuisines, which include
            Sichuan Cuisine, Hunan Cuisine, Shandong Cuisine, Zhejiang Cuisine,
            Fujian Cuisine, Anhui Cuisine, Cantonese Cuisine, and Jiangsu
            Cuisine. Each cuisine has its popular dishes.
          </span>
          <ReadMoreButton></ReadMoreButton>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={RoastedDuck}
              alt="Roasted Duck"
            />
            <div className="cuisineContext">
              <h3 className="subheading">1. Peking Roasted Duck</h3>
              <p>
                Peking duck is a famous dish from Beijing, enjoying world fame,
                and considered as one of China national dishes. Peking duck is
                savored for its thin and crispy skin. Sliced Peking duck is
                often eaten with pancakes, sweet bean sauce, or soy sauce with
                mashed garlic. It is a must-taste dish in Beijing!
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  As "the first dish to taste in China", Beijing Roast Duck used
                  to be a royal dish in medieval China. It has been a "national
                  dish of diplomacy" since the 1970s, when it was first used for
                  the reception of foreign guests by Premier Zhou Enlai (the
                  first Premier of the People's Republic of China). It is highly
                  praised by heads of state, government officials, and domestic
                  and foreign tourists.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={HotPot} alt="HotPot" />
            <div className="cuisineContext">
              <h3 className="subheading">2. Hot Pot</h3>
              <p>
                Hot pot, or hotpot, is one of the most popular dishes in China,
                especially in Sichuan Province or Chongqing. People cook in and
                eat from a simmering pot of soup stock (broth) on a
                gas/induction hob in the middle of the dining table with
                foodstuffs and condiments around the pot.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  People can add and cook whatever they like in the broth. The
                  secret of whether a hot pot is good or not lies in the broth,
                  which all the meat slices and vegetables take their flavor
                  from. Chinese people are very fond of hot pot. In the past hot
                  pot used to be favored only in winter, but nowadays hot pot
                  has been appearing on tables all year round. It is a great way
                  to socialize with friends and relatives. People gather around
                  the pot to eat while chatting, eating, drinking, and having
                  fun.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={xiaolongbao} alt="xiaolongbao" />
            <div className="cuisineContext">
              <h3 className="subheading">3. Xiaolongbao</h3>
              <p>
                XiaoLongBao are a kind of baozi (Chinese steamed bun). They are
                popular in Jiangsu and Shanghai. Xiaolongbao are traditionally
                cooked in a small bamboo basket, which gives them their name.
                The most common xiaolongbao filling is pork.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  Other ingredients can include beef, crab meat, shrimp,
                  seafood, and vegetable fillings. There is a special way to eat
                  the broth-filled Shanghai steamed-pork xiaolongbao (Shanghai
                  soup buns): you can nibble off a small corner of dough and
                  suck out the delicious soup. Or you can use a straw to suck
                  the soup then eat the fillings and dough.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={CharSiu} alt="CharSiu" />
            <div className="cuisineContext">
              <h3 className="subheading">4. Char Siu</h3>
              <p>
                In Cantonese, char means 'fork' and siu means 'to roast', so
                char sui means "fork roasted". It is a kind of Cantonese roast
                pork. It is eaten with rice or noodles. It is also used as a
                filling in baozi (a kind of steamed stuffed bun).
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={DimSum} alt="DimSum" />
            <div className="cuisineContext">
              <h3 className="subheading">5. Dim Sum</h3>
              <p>
                Dim sum is a popular Cantonese cuisine dish with a variety of
                small dishes, including dumplings, rolls, cakes, and meat,
                seafood, dessert, and vegetable preparations. It originated in
                Guangzhou city and is often eaten during tea parties for
                breakfast and lunch.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={KungPaoChicken}
              alt="KungPaoChickent"
            />
            <div className="cuisineContext">
              <h3 className="subheading">6. Kung Pao Chinken</h3>
              <p>
                Peking duck is a famous dish from Beijing, enjoying world fame,
                and considered as one of China national dishes. Peking duck is
                savored for its thin and crispy skin. Sliced Peking duck is
                often eaten with pancakes, sweet bean sauce, or soy sauce with
                mashed garlic.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  It is a must-taste dish in Beijing! As "the first dish to
                  taste in China", Beijing Roast Duck used to be a royal dish in
                  medieval China. It has been a "national dish of diplomacy"
                  since the 1970s, when it was first used for the reception of
                  foreign guests by Premier Zhou Enlai (the first Premier of the
                  People's Republic of China). It is highly praised by heads of
                  state, government officials, and domestic and foreign
                  tourists.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img
              className="cuisineImage"
              src={SweetAndSourPork}
              alt="SweetAndSourPork"
            />
            <div className="cuisineContext">
              <h3 className="subheading">7. SweetAndSourPork</h3>
              <p>
                Sweet and sour pork has a bright orange-red color, and a
                delicious sweet and sour taste. At the very beginning there was
                only sweet and sour pork, but to meet demands, there have been
                some developments on this dish. Now, the pork can be substituted
                with other ingredients like chicken, beef, or pork ribs.
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={MaPoTofu} alt="MaPoTofu" />
            <div className="cuisineContext">
              <h3 className="subheading">8. Ma Po Tofu</h3>
              <p>
                Ma Po tofu is one of the most famous dishes in Chuan Cuisine
                (Sichuan food) with a history of more than 100 years. It
                consists of beancurd along with some minced meat (pork or beef)
                in a spicy sauce. The sauce is made from fermented black beans
                and chili paste (douban/douchi).{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  The inventor of Ma Po tofu was from Chengdu, Sichuan province.
                  She was a grandma whose surname was Chen. It is said that
                  Chen's face was very pockmarked. In Chinese, ma means
                  'pockmarked' and 'po' means grandma, and so people called the
                  dish she made Ma Po ('Pockmarked Granny') tofu. Her spicy and
                  fragrant dish later became a highly popular item. It was
                  introduced to Japan and also became a popular dish there.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={Dumplings} alt="Dumplings" />
            <div className="cuisineContext">
              <h3 className="subheading">9. Dumplings</h3>
              <p>
                Dumplings are a traditional food type that is widely popular,
                especially in North China. Chinese dumplings consist of minced
                meat and/or chopped vegetables wrapped in a thin dough skin.
                Popular fillings are minced pork, diced shrimp, ground chicken,
                beef, and vegetables. Dumplings can be cooked by boiling,
                steaming, or frying.
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  {" "}
                  Dumplings are also a traditional dish eaten on Chinese New
                  Year's Eve. As they look like Chinese silver ingots (Chinese
                  money in old times), it is believed that the more dumplings
                  you eat during the New Year celebrations, the more money you
                  will make in the New Year. Making dumplings is a good way to
                  interact with your friends and relatives. You will see a busy
                  kitchens with Chinese families making dumplings during Chinese
                  New Year.
                </span>
              </p>
            </div>
          </div>
          <div className="cuisine">
            <img className="cuisineImage" src={FriedRice} alt="FriedRice" />
            <div className="cuisineContext">
              <h3 className="subheading">10. Fried Rice</h3>
              <p>
                Fried rice is a dish made from fried cooked rice and other
                ingredients, often including eggs, vegetables, seafood, or meat.
                Fried rice is one of the most common Chinese foods. It is easy
                to make fried rice at home using leftover rice and other meat or
                vegetables from the last meal.{" "}
                <span
                  className="moreText"
                  style={{ display: showMore ? "block" : "none" }}
                >
                  It was said that an important diplomatic official in the late
                  Qing Dynasty (1644–1912), Li Hongzhang, ordered his chef to
                  cook a dish that both Chinese people and foreigners would
                  like. The chef made fried rice, which was enjoyed by both the
                  foreign guests and officials. The most famous fried rice in
                  China is Yangzhou fried rice. Typical Yangzhou fried rice
                  ingredients include shrimp, eggs, and barbecued pork.
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

export default Chinese;
