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
          <h2>Empowering Women. Engineering Impact.</h2>
          <p>
            At GenStree, we believe technology isn’t just built — it’s lived,
            led, and shaped by women who dare to reimagine the world. Our
            mission is to create transformative tools that uplift communities,
            starting from India’s rural heartlands to its urban innovation hubs.
            <br />
            We are a research-driven, woman-led tech company redefining what's
            possible in agriculture, governance, education, and infrastructure.
            From AI-powered Smart Village systems to satellite-based disaster
            prediction and inclusive product ecosystems — we build with purpose
            and scale with empathy.
            <br />
            Let’s make digital India truly inclusive — and globally impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSolution2;
