import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import China from "./CountryPhoto/China.jpg";
import American from "./CountryPhoto/American.jpg";
import Indian from "./CountryPhoto/Indian.jpg";
import Italian from "./CountryPhoto/Italian.jpg";
import Japanese from "./CountryPhoto/Japanese.jpg";
import Mexican from "./CountryPhoto/Mexican.jpeg";
import Spanish from "./CountryPhoto/Spanish.jpg";
import { useEffect, useRef, useState } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

export default function Carousel() {
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const img = [
    { id: "Chinese", name: "Chinese", src: China },
    { id: "American", name: "American", src: American },
    { id: "Indian", name: "Indian", src: Indian },
    { id: "Italian", name: "Italian", src: Italian },
    { id: "Japanese", name: "Japanese", src: Japanese },
    { id: "Mexican", name: "Mexican", src: Mexican },
    { id: "Spanish", name: "Spanish", src: Spanish },
  ];

  // const [currentSlide, setCurrentSlide] = useState(0);

  const flickityOptions = {
    initialIndex: 7,
    autoPlay: 2000,
    pauseOnHover: true,
  };
  const flickityRef = useRef(null);

  // const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let autoplayTimer;

    const startAutoplay = () => {
      if (flickityRef.current && !isAutoplayPaused) {
        flickityRef.current.next();
      }
    };

    autoplayTimer = setInterval(startAutoplay, 2000);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [isAutoplayPaused]);

  return (
    <div
      style={{
        backgroundColor: "Gray",
      }}
    >
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={true} // default false
        reloadOnUpdate={true} // default false
        static
        onMouseEnter={() => setIsAutoplayPaused(true)}
        onMouseLeave={() => setIsAutoplayPaused(false)}
      >
        {img.map((img) => (
          <div key={img.name} className="img-area">
            <Link to={"./Country/" + img.id}>
              <img
                src={process.env.PUBLIC_URL + img.src}
                alt={img.name}
                style={{ width: "900px", height: "600px" }}
                // onMouseEnter={() => setCurrentSlide(index)}
                // onMouseLeave={() => setIsHovered(false)}
              />
            </Link>
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "100px",
                color: "white",
                textAlign: "center",
                margin: "10px",
              }}
            >
              {img.name}
            </p>
          </div>
        ))}
      </Flickity>
    </div>
  );
}
