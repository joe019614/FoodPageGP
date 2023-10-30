import { useState, useEffect } from "react";
import styles from "./style.module.css";
import "animate.css";
import Pizza from "../CuisinePosts/Italian-Cuisine-Images/Pizza.jpeg";
import Classic from "../CuisinePosts/Italian-Cuisine-Images/Classic.jpeg";
import Gnocchi from "../CuisinePosts/Italian-Cuisine-Images/Gnocchi.jpeg";
import PizzaNapoletana from "../CuisinePosts/Italian-Cuisine-Images/PizzaNapoletana.jpeg";
import PastaCarbonara from "../CuisinePosts/Italian-Cuisine-Images/PastaCarbonara.jpeg";

const Context = () => {
  const chineseContent = [
    {
      heading: "Pizza",
      text: "Peking duck is a famous dish from Beijing, enjoying world fame,and considered as one of China national dishes. Peking duck issavored for its thin and crispy skin. Sliced Peking duck is often eaten with pancakes, sweet bean sauce, or soy sauce withmashed garlic. It is a must-taste dish in Beijing!",
      imageUrl: Pizza,
    },
    {
      heading: "Tagliatelle al ragù alla Bolognese",
      text: "Hot pot, or hotpot, is one of the most popular dishes in China,especially in Sichuan Province or Chongqing. People cook in andeat from a simmering pot of soup stock (broth) on agas/induction hob in the middle of the dining table with foodstuffs and condiments around the pot.",
      imageUrl: Classic,
    },
    {
      heading: "Gnocchi",
      text: "XiaoLongBao are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name.The most common xiaolongbao filling is pork.",
      imageUrl: Gnocchi,
    },
    {
      heading: "Pasta carbonara",
      text: "XiaoLongBao are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name.The most common xiaolongbao filling is pork.",
      imageUrl: PizzaNapoletana,
    },
    {
      heading: "Pizza Napoletana",
      text: "XiaoLongBao are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name.The most common xiaolongbao filling is pork.",
      imageUrl: PastaCarbonara,
    },
  ];
  const randomIndex = Math.floor(Math.random() * chineseContent.length);
  const selectedContent = chineseContent[randomIndex];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contextElement = document.getElementById("context1");
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
      id="context1"
      className={animate ? "animate__animated animate__bounceInRight" : ""}
    >
      <div className={styles.posts}>
        {/* <a href="inactive">Show All Posts</a> */}
      </div>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "900px", height: "500px" }}
          src={selectedContent.imageUrl}
          alt="890"
        />
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              marginRight: "150px",
              justifyContent: "center",
              marginLeft: "150px",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "60px",
                color: "white",
              }}
            >
              {selectedContent.heading}
            </h2>

            {/* <p className={styles.cuisineTextHP}>{selectedContent.text}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;
