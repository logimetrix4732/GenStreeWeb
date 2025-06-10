import React, { useEffect } from "react";
import "./AboutSolution1.css";
import WOW from "wowjs";
import Splitting from "splitting";
const AboutSolution1 = () => {
  useEffect(() => {
    new WOW.WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <p className="text-blk headingText">About Css3transition</p>
                <h2 className="text-blk subHeadingText wow" data-splitting="">
                  We are Creative Tech Enthusiast working since 2015
                </h2>
              </div>
              <div className="text-blk description wow" data-splitting="">
                I am Rahul Yaduvanshi works at Css3 Transition since last 3
                years. We are here to provide touch notch solution for your
                website or web application that helps you to make your website
                look attractive &amp; efficient in handling by creating usefull
                plugins thats you need.
              </div>
              <div className="text-blk description wow" data-splitting="">
                We are here to serve you next level tutorial that currently in
                trend to match you with your expertise. Css3 transition is a
                learning website. where you can find many good quality content
                related to web development and tutorials about plugins. here we
                are using html, html5, css, css3, jquery &amp; javascript along
                with inspirational UI design layout by professionals by using
                Photoshop and adobe allustrator.
              </div>
              <div className="btn-box">
                <a href="#" className="theme-btn btn-style-one">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <div className="author-desc">
                <h2>Rahul Kumar Yadav</h2>
                <span>Web Developer</span>
              </div>
              <figure className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img
                    title="Rahul Kumar Yadav"
                    src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                    alt=""
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolution1;
