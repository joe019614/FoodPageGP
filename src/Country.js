import React, { useState, useEffect } from "react";
import { CountryCard } from "./CountryCard";
import China from "./CountryPhoto/China.jpeg";
import American from "./CountryPhoto/American.jpeg";
import Indian from "./CountryPhoto/Indian.webp";
import Italian from "./CountryPhoto/Italian.jpeg";
import Japanese from "./CountryPhoto/Japanese.webp";
import Mexican from "./CountryPhoto/Mexican.jpeg";
import Spanish from "./CountryPhoto/Spanish.jpeg";
import { Link } from "react-router-dom";
import MuiNavbar from "./MuiNavbar";
import Footer from "./Footer";

export default function Country() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemData = [
    {
      id: "Chinese",
      country: "Chinese",
      imgUrl: China,
      description: "",
    },
    {
      id: "American",
      country: "American",
      imgUrl: American,
      description: "",
    },
    {
      id: "Indian",
      country: "Indian",
      imgUrl: Indian,
      description: "",
    },
    {
      id: "Italian",
      country: "Italian",
      imgUrl: Italian,
      description: "",
    },
    {
      id: "Japanese",
      country: "Japanese",
      imgUrl: Japanese,
      description: "",
    },
    {
      id: "Mexican",
      country: "Mexican",
      imgUrl: Mexican,
      description: "",
    },
    {
      id: "Spanish",
      country: "Spanish",
      imgUrl: Spanish,
      description: "",
    },
  ];
  return (
    <>
      <MuiNavbar />
      <div className="country-flex">
        {itemData.map((item) => (
          <div key={item.id} md={4} className="country-all">
            <Link to={"/MainPage/Country/" + item.id}>
              <CountryCard {...item} />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
