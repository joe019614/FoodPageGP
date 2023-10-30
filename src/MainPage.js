import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MuiNavbar from "./MuiNavbar";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Context1 from "./part3/Context1";
import Context2 from "./part3/Context2";
import Context from "./part3/Context";
import WheelPart from "./WheelPart";
import Logo from "./Logo";

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <Header />
      <MuiNavbar />
      <WheelPart />
      <Carousel />
      <Context />
      <Context1 />
      <Context2 />
      <Footer />
    </>
  );
}
