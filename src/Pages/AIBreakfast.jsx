import React, { useState } from "react";
import NavBar from "../components/NavBar";
import newsLetter from "../assets/images/newsLetter2.jpg";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "../components/AIBreakfastComponents/Header";
import MainContent from "../components/AIBreakfastComponents/MainContent";
import { NewsletterModal } from "../components/AIBreakfastComponents/NewsletterModal";
import { theme } from "../theme";
const AIBreakfast = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
      <div className="page-transition">
        <div className="layer" />
      </div>
      <nav className="site-navigation">
        <div className="layer" />
        <div className="inner">
          <ul data-splitting="">
            <li>
              <a href="index.html">HOME</a>
              <i className="fas fa-caret-down" /> <small>First page</small>
              <ul>
                <li>
                  <a href="index.html">HOME SLIDER</a>
                </li>
                <li>
                  <a href="index-video.html">HOME VIDEO</a>
                </li>
                <li>
                  <a href="index-carousel.html">HOME CAROUSEL</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="studio.html">STUDIO</a> <small>All About Us</small>{" "}
            </li>
            <li>
              <a href="showcases.html">SHOWCASES</a>{" "}
              <small>Our all projects</small>{" "}
            </li>
            <li>
              <a href="blog.html">BLOG</a> <small>Recent posts</small>{" "}
            </li>
            <li>
              <a href="contact.html">CONTACT</a> <small>Say hello</small>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <div className="social-media">
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
        {/* end layer */}
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
        {/* end inner */}
      </div>
      <main>
        <NavBar />
        <header
          className="page-header"
          style={{
            backgroundImage: `url(${newsLetter})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* end video-bg */}
          <div className="inner">
            <div className="container">
              <h1>GenStree AI bulletin</h1>
              <p>
                Experience a free day with GenVoice and explore the benefits of
                the digital world.
              </p>
            </div>
            {/* end container */}
          </div>
          {/* end inner */}
        </header>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header onNewsletterClick={() => setIsNewsletterOpen(true)} />
          <MainContent />
          <NewsletterModal
            isOpen={isNewsletterOpen}
            onClose={() => setIsNewsletterOpen(false)}
          />
        </ThemeProvider>
      </main>
    </>
  );
};

export default AIBreakfast;
