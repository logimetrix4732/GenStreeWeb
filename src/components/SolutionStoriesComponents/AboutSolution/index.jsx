import React, { useEffect } from "react";
import "./AboutSolution.css";
import WOW from "wowjs";
import Splitting from "splitting";
const AboutSolution = () => {
  useEffect(() => {
    new WOW.WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="ultimateImg">
          <img
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg"
          />
          <div className="purpleBox">
            <p className="purpleText wow" data-splitting="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              purus lectus viverra in semper nec pretium mus.
            </p>
            <img
              className="stars"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
            />
          </div>
        </div>
        <div className="allText bottomText">
          <p className="text-blk headingText">Solution & Stories</p>
          <h3 className="text-blk subHeadingText wow" data-splitting="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className="text-blk description wow" data-splitting="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.
          </p>
          <a className="explore">View Services</a>
        </div>
      </div>
    </div>
  );
};

export default AboutSolution;
