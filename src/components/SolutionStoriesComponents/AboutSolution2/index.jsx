import React from "react";
import "./AboutSolution2.css";
import AboutUsImg from "../../../assets/images/AboutUsImg6.png";
import AboutUsImg1 from "../../../assets/images/AboutUsImg1.png";
import AboutUsImg2 from "../../../assets/images/AboutUsImg4.png";
import AboutUsImg3 from "../../../assets/images/AboutUsImg5.png";
const AboutSolution2 = () => {
  return (
    <div className="aboutSolution2-container">
      <div className="aboutSolution2-contentLeft">
        <div className="aboutSolution2-row">
          <div className="aboutSolution2-imgWrapper">
            <img src={AboutUsImg} alt="" />
          </div>
          <div className="aboutSolution2-imgWrapper">
            <img src={AboutUsImg1} alt="" />
          </div>
          <div className="aboutSolution2-imgWrapper">
            <img src={AboutUsImg2} alt="" />
          </div>
          <div className="aboutSolution2-imgWrapper">
            <img src={AboutUsImg3} alt="" />
          </div>
        </div>
      </div>
      <div className="aboutSolution2-contentRight">
        <div className="aboutSolution2-content">
          <h4>Welcome To</h4>
          <h2>About Us Title...</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ullam
            saepe, totam dicta fuga provident. Fuga, labore porro? Dolorem unde,
            explicabo atque voluptatum laborum harum, quas velit voluptates sit
            rerum non ullam laboriosam iusto ad sequi hic soluta consequatur
            quaerat!
          </p>
          <a href="#">Read More...</a>
        </div>
      </div>
    </div>
  );
};

export default AboutSolution2;
