import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import video02 from "../assets/videos/video02.mp4";
import WOW from "wowjs";
import Splitting from "splitting";
import "odometer/themes/odometer-theme-default.css";
import aboutImg from "../assets/images/aboutImg.png";
import logo from "../assets/images/logo.jpg";
import logo01 from "../assets/images/logo01.jpg";
import AboutSolution2 from "../components/SolutionStoriesComponents/AboutSolution2";
const Studio = () => {
  const sectionRef = useRef(null);
  const odometers = useRef([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      { threshold: 0.5 } // 50% visible then trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
    Splitting();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <>
      <div className="preloader">
        <div className="layer" />
        {/* end layer */}
        <div className="inner">
          <figure>
            {" "}
            <img src="images/preloader.gif" alt="Image" />{" "}
          </figure>
          <span>Site Loading</span>{" "}
        </div>
        {/* end inner */}
      </div>
      {/* end preloader */}
      <div className="page-transition">
        <div className="layer" />
        {/* end layer */}
      </div>
      {/* end page-transition */}
      <nav className="site-navigation">
        <div className="layer" />
      </nav>
      {/* end site-navigation */}
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
      {/* end social-media */}
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
      {/* end all-cases */}
      <main>
        <NavBar />
        {/* end left-side */}
        <div className="all-cases-link">
          {" "}
          <span>ALL CASES</span> <b>+</b>{" "}
        </div>
        {/* end all-cases-link */}
        <header className="page-header">
          <div className="video-bg">
            <video src={video02} loop autoPlay playsInline />
          </div>

          {/* end video-bg */}
          <div className="inner">
            <div className="container">
              <h1>ABOUT US</h1>
              <p>
                Genstree AI LLP is dedicated to empowering women in
                tech—building inclusive
                <br />
                spaces, fostering innovation, and driving social change through
                <br /> purposeful leadership.
              </p>
            </div>
            {/* end container */}
          </div>
          {/* end inner */}
        </header>
        {/* end page-header */}
        <section className="text-content-block">
          <div className="container">
            <div className="row">
              <div className="col-12 wow" data-splitting="">
                <h3 className="section-title">Building Tech with Purpose</h3>
              </div>
              {/* end col-12 */}
              <div className="col-12 wow" data-splitting="">
                <h5>
                  GenStree AI LLP is built on the belief that inclusive
                  technology leads to scalable, sustainable impact. We empower
                  women to lead with vision — not just in labs or boardrooms,
                  but across every community we serve.
                </h5>
              </div>
              <AboutSolution2 />
              {/* end col-12	 */}
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>01</small>
                <h6>DISCOVER</h6>
                <p>
                  Real challenges in education, governance, and infrastructure
                </p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>02</small>
                <h6>IDEATE</h6>
                <p>Collaboratively design tech-forward ideas</p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>03</small>
                <h6>DESIGN</h6>
                <p>Scalable digital systems with empathy at the core</p>
              </div>
              <div className="col-lg-3 col-md-6 wow" data-splitting="">
                <small>04</small>
                <h6>BUILD</h6>
                <p>Smart, deployable tools that create measurable change</p>
              </div>
            </div>
          </div>
        </section>

        {/* end text-content-block */}
        <section className="intro-image light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="office-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <figure className="reveal-effect masker wow">
                        {" "}
                        <img src={aboutImg} alt="Image" />
                        <figcaption>
                          <h6> HEADQUARTOR OF TOUROG</h6>
                        </figcaption>
                      </figure>
                    </div>
                    {/* end swiper-slide */}
                    <div className="swiper-slide">
                      <figure>
                        {" "}
                        <img src="images/office02.jpg" alt="Image" />
                        <figcaption>
                          <h6> TORONTO OFFICE</h6>
                        </figcaption>
                      </figure>
                    </div>
                    {/* end swiper-slide */}
                    <div className="swiper-slide">
                      <figure>
                        {" "}
                        <img src="images/office03.jpg" alt="Image" />
                        <figcaption>
                          <h6> HEADQUARTOR OF TOUROG</h6>
                        </figcaption>
                      </figure>
                    </div>
                    {/* end swiper-slide */}
                  </div>
                  {/* end swiper-wrapper */}
                  <div className="swiper-pagination" />
                  {/* end swiper-pagination */}
                </div>
                {/* end office-slider */}
              </div>
              {/* end col-12 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end intro-image */}

        {/* end process */}

        {/* end icon-content-block */}
        <section className="testimonials">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="testimonials-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial wow" data-splitting="">
                        <blockquote>
                          {" "}
                          GenStree was a game-changer. They helped us build a
                          tech-first model that was not only scalable — but
                          sensitive to real social contexts. It’s rare to find a
                          team so tuned into both innovation and inclusion.
                        </blockquote>
                        <div className="reviewer">
                          {" "}
                          <img src="images/team02.jpg" alt="Image" />
                          <div className="reviewer-infos">
                            <h6>Richa Rai, Policy Researcher</h6>
                            <small>Founder, WIT Collective</small>{" "}
                          </div>
                          {/* end reviewer-infos */}
                        </div>
                        {/* end reviewers */}
                      </div>
                      {/* end testimonial */}
                    </div>
                    {/* end swiper-slide */}
                  </div>
                  {/* end swiper-wrapper */}
                  <div className="swiper-pagination" />
                  {/* end swiper-pagination */}
                </div>
                {/* end testimonials-slider */}
              </div>
              {/* end col-6 */}
              <div className="col-lg-6 wow" data-splitting="">
                <h3 className="section-title">
                  GENSTREE BUILDS
                  <br />
                  TECH TO EMPOWER
                  <br />
                  CHANGE
                </h3>
                <a href="#" />{" "}
              </div>
              {/* end col-6 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end testimonials */}
        <section className="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow" data-splitting="">
                <h3 className="section-title">
                  ALL ABOUT
                  <br />
                  THE OUR TEAM
                </h3>
              </div>
              {/* end col-8 */}
              <div className="col-lg-6 wow" data-splitting="">
                <h5>
                  We work closely with your development team. markettting
                  profissionals and stakeholder to design and develop UX and UI
                  that make your website. application or software a joy to use,
                </h5>
              </div>
              {/* end col-4 */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team01.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Alexander O'neil</h6> <small>EXECUTIVE CHIEF</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team02.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Jessica Tanana</h6> <small>SENIOR ENGINEER</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team03.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Steven Mc'Laren</h6> <small>CREATIVE HEAD CHIEF</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team04.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Dasha Avdeieva</h6> <small>ACCOUNT MANAGER</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
              <div className="col">
                <figure className="reveal-effect masker wow">
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
                  </ul>
                  <img src="images/team05.jpg" alt="Image" />
                  <figcaption className="wow" data-splitting="">
                    {" "}
                    <h6>Dmitry Samohin</h6> <small>DIGITAL PRODUCER</small>{" "}
                  </figcaption>
                </figure>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end team */}
        <section className="clients">
          <div className="container">
            <div className="row">
              {" "}
              <div className="col-lg-5 wow" data-splitting="">
                <h3 className="section-title">
                  AGENSY PROUD
                  <br />
                  IS QUALITY OF
                  <br />
                  PARTNERS
                </h3>
              </div>
              {/* end col-5 */}
              <div className="col-lg-7">
                <ul>
                  <li className="reveal-effect masker wow">
                    <img src="" alt="Image" />
                  </li>
                  <li className="reveal-effect masker wow">
                    <img src={logo01} alt="Image" />
                  </li>
                  <li className="reveal-effect masker wow">
                    <img src={logo} alt="Image" />
                  </li>
                </ul>
              </div>
              {/* end col-7 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end clients */}
      </main>
      {/* end main */}

      {/* end footer */}
      {/* JS FILES */}
    </>
  );
};

export default Studio;
