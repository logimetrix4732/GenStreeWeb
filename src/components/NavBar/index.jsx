import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isEqualizerPaused, setIsEqualizerPaused] = useState(false);
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
    document.body.classList.toggle("no-scroll");
  };

  const toggleEqualizer = () => {
    setIsEqualizerPaused(!isEqualizerPaused);
  };

  const toggleSocialMedia = () => {
    setIsSocialMediaOpen(!isSocialMediaOpen);
    document.body.classList.toggle("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  useEffect(() => {
    if (isNavigationOpen || isSocialMediaOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavigationOpen, isSocialMediaOpen]);
  return (
    <React.Fragment>
      <div className={`social-media ${isSocialMediaOpen ? "active" : ""}`}>
        <div className="layer"> </div>
        {/* end layer */}
        <div className="inner">
          <h5>Social Share </h5>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="all-cases">
        <div className="layer"> </div>
        <div className="inner">
          <ul>
            <li>
              <a href="#">Darkness</a>
            </li>
            <li>
              <a href="#">Goddes</a>
            </li>
            <li>
              <a href="#">Employee</a>
            </li>
            <li>
              <a href="#">Berry</a>
            </li>
            <li>
              <a href="#">Roosters</a>
            </li>
            <li>
              <a href="#">Primero</a>
            </li>
          </ul>
        </div>
      </div>
      <nav className={`site-navigation ${isNavigationOpen ? "active" : ""}`}>
        <div className="layer" />
        {/* end layer */}
        <div className="inner">
          <ul data-splitting="">
            <li>
              <a href="/studio">About Us</a>
              <small>Who we are</small>
            </li>
            <li>
              <a href="/studio">What We Do</a>
              <small>Explore our expertise</small>
            </li>
            <li>
              <a href="/showCase">Newsletter</a>
              <small>Latest insights & updates</small>
            </li>
            <li>
              <a href="/blog">BLOG</a>
              <small>Thoughts & stories</small>
            </li>
            <li>
              <a href="/contactUs">CONTACT</a>
              <small>Get in touch with us</small>
            </li>
          </ul>
        </div>

        {/* end inner */}
      </nav>
      <aside className="left-side">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Image" />
          </a>
        </div>
        {/* end logo */}
        <div
          className={`hamburger ${isNavigationOpen ? "active" : ""}`}
          onClick={toggleNavigation}
        >
          <div className="hamburger__line hamburger__line--01">
            <div className="hamburger__line-in hamburger__line-in--01" />
          </div>
          <div className="hamburger__line hamburger__line--02">
            <div className="hamburger__line-in hamburger__line-in--02" />
          </div>
          <div className="hamburger__line hamburger__line--03">
            <div className="hamburger__line-in hamburger__line-in--03" />
          </div>
          <div className="hamburger__line hamburger__line--cross01">
            <div className="hamburger__line-in hamburger__line-in--cross01" />
          </div>
          <div className="hamburger__line hamburger__line--cross02">
            <div className="hamburger__line-in hamburger__line-in--cross02" />
          </div>
        </div>
        {/* end hamburger */}
        <div className="follow-us" onClick={toggleSocialMedia}>
          {" "}
          FOLLOW US{" "}
        </div>
        {/* end follow-us */}
        <div
          className={`equalizer ${isEqualizerPaused ? "paused" : ""}`}
          onClick={toggleEqualizer}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* end equalizer */}
      </aside>
    </React.Fragment>
  );
};

export default NavBar;
