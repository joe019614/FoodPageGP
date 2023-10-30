import { useState, useEffect } from "react";
import RoastedDuck from "../CuisinePosts/Chinese-Cuisine-Images/RoastedDuck.png";
import styles from "./style.module.css";
import HotPot from "../CuisinePosts/Chinese-Cuisine-Images/HotPot.png";
import xiaolongbao from "../CuisinePosts/Chinese-Cuisine-Images/xiaolongbao.webp";
import CharSiu from "../CuisinePosts/Chinese-Cuisine-Images/CharSiu.webp";
import DimSum from "../CuisinePosts/Chinese-Cuisine-Images/DimSum.webp";
import "animate.css";

const Context = () => {
  const chineseContent = [
    {
      heading: "Peking Roasted Duck",
      text: "Peking duck is a famous dish from Beijing, enjoying world fame,and considered as one of China national dishes. Peking duck issavored for its thin and crispy skin. Sliced Peking duck is often eaten with pancakes, sweet bean sauce, or soy sauce withmashed garlic. It is a must-taste dish in Beijing!",
      imageUrl: RoastedDuck,
    },
    {
      heading: "Hot Pot",
      text: "Hot pot, or hotpot, is one of the most popular dishes in China,especially in Sichuan Province or Chongqing. People cook in andeat from a simmering pot of soup stock (broth) on agas/induction hob in the middle of the dining table with foodstuffs and condiments around the pot.",
      imageUrl: HotPot,
    },
    {
      heading: "Xiaolongbao",
      text: "XiaoLongBao are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name.The most common xiaolongbao filling is pork.",
      imageUrl: xiaolongbao,
    },
    {
      heading: "Char Siu",
      text: "XiaoLongBao are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name.The most common xiaolongbao filling is pork.",
      imageUrl: CharSiu,
    },
    {
      heading: "Dim Sum",
      text: "XiaoLongBao are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name.The most common xiaolongbao filling is pork.",
      imageUrl: DimSum,
    },
  ];
  const randomIndex = Math.floor(Math.random() * chineseContent.length);
  const selectedContent = chineseContent[randomIndex];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contextElement = document.getElementById("context");
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
      id="context"
      className={animate ? "animate__animated animate__bounceInLeft" : ""}
    >
      <div className={styles.posts} style={{ marginTop: "40px" }}>
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
