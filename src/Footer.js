import FooterIcon2 from "./FooterPhoto/Footer-icon2.js";
import FooterIcon3 from "./FooterPhoto/Footer-icon3.js";
import FooterIcon4 from "./FooterPhoto/Footer-icon4.png";
import FooterIcon5 from "./FooterPhoto/Footer-icon5.png";
import FooterIcon6 from "./FooterPhoto/Footer-icon6.png";

const Footer = () => {
  return (
    <div style={{ height: "120px" }}>
      <div style={{ marginTop: "40px" }}>
        <div className="social-icon">
          {/* <a href="#">
                  <img src={navIcon1} alt="" />
                </a> */}
          <a href="/" className="Footer-a">
            {/* <img
            src={FooterIcon2}
            alt=""
            style={{ width: "100%", height: "100%" }}
          /> */}
            <FooterIcon2 />
          </a>
          <a href="/" className="Footer-a">
            {/* <img
            src={FooterIcon3}
            alt=""
            style={{ width: "100%", height: "100%" }}
          /> */}
            <FooterIcon3 />
          </a>
          <a href="/" className="Footer-a">
            <img src={FooterIcon4} alt="foot4" />
          </a>
          <a href="/" className="Footer-a">
            <img src={FooterIcon5} alt="foot5" />
          </a>
          <a href="/" className="Footer-a">
            <img src={FooterIcon6} alt="foot6" />
          </a>
          <div
            style={{
              fontSize: "8px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <p style={{ marginRight: "10px" }}>Advertise</p>

            <p style={{ marginRight: "10px" }}> AdChoices</p>
            <p style={{ marginRight: "10px" }}>Privacy Notice</p>
            <p style={{ marginRight: "1000px" }}>Visitor Agreement </p>
            <p>Do Not Sell or Share My Personal Information</p>
          </div>
        </div>
        <hr className="style-two"></hr>
      </div>
      <p style={{ display: "flex", justifyContent: "center" }}>
        © 2023 FoodGuy。FoodGuy Logo Design By Donald。
      </p>
    </div>
  );
};

export default Footer;
