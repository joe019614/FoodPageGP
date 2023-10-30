import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Machaca from "../CuisinePosts/Mexican-Cuisine-Images/Machaca.jpeg";
import Chilaquiles from "../CuisinePosts/Mexican-Cuisine-Images/Chilaquiles.webp";
import HuevosRancheros from "../CuisinePosts/Mexican-Cuisine-Images/HuevosRancheros.jpeg";

import "animate.css";

const Context = () => {
  const chineseContent = [
    {
      heading: "Chilaquiles",
      text: "Peking duck is a famous dish from Beijing, enjoying world fame,and considered as one of China national dishes. Peking duck issavored for its thin and crispy skin. Sliced Peking duck is often eaten with pancakes, sweet bean sauce, or soy sauce withmashed garlic. It is a must-taste dish in Beijing!",
      imageUrl: Chilaquiles,
    },
    {
      heading: "Huevos Rancheros",
      text: "Hot pot, or hotpot, is one of the most popular dishes in China,especially in Sichuan Province or Chongqing. People cook in andeat from a simmering pot of soup stock (broth) on agas/induction hob in the middle of the dining table with foodstuffs and condiments around the pot.",
      imageUrl: HuevosRancheros,
    },
    {
      heading: "Machaca",
      text: "XiaoLongBao are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name.The most common xiaolongbao filling is pork.",
      imageUrl: Machaca,
    },
  ];
  const randomIndex = Math.floor(Math.random() * chineseContent.length);
  const selectedContent = chineseContent[randomIndex];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contextElement = document.getElementById("context2");
      const contextPosition = contextElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (contextPosition < windowHeight) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="context2"
      className={animate ? "animate__animated animate__bounceInLeft" : ""}
    >
      <div className={styles.posts}>
        {/* <a href="inactive">Show All Posts</a> */}
      </div>
      <div className={styles.cuisineHP}>
        <div className={styles.cuisineContextHP}>
          <h2 className={styles.cuisineSubheading}>
            {selectedContent.heading}
          </h2>

          {/* <p className={styles.cuisineTextHP}>{selectedContent.text}</p> */}
        </div>

        <img
          className={styles.cuisineImageHP}
          src={selectedContent.imageUrl}
          alt="890"
        />
      </div>
    </div>
  );
};

export default Context;

// {/* <Chinese></Chinese>
//       <American></American>
//       <Indian></Indian>
//       <Italian></Italian>
//       <Spanish></Spanish>
//       <Mexican></Mexican>
//       <Japanese></Japanese> */}
