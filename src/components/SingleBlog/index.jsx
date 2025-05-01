import React from "react";
import NavBar from "../NavBar";

const SingleBlog = () => {
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
        {/* end layer */}
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
        {/* end inner */}
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
            <video src="videos/video02.mp4" muted="" loop="" autoPlay="" />
          </div>
          {/* end video-bg */}
          <div className="inner">
            <div className="container">
              <h1>BLOG</h1>
              <p>
                We provide a free day to experience our benefits of digital
                world
              </p>
            </div>
            {/* end container */}
          </div>
          {/* end inner */}
        </header>
        {/* end page-header */}
        <section className="blog">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="post single">
                  <figure className="post-image">
                    <img src="images/slide01.jpg" alt="Image" />
                  </figure>
                  <div className="post-content">
                    <small className="post-date">01, September 2022</small>
                    <h3 className="post-title">
                      Legally recognized as the only person who is authorized
                    </h3>
                    <div className="post-author">
                      <img src="images/avatar01.jpg" alt="Image" />
                      <span>
                        by <a href="#">Marcus Aurelio</a>
                      </span>
                    </div>
                    {/* end post-author */}
                    <ul className="post-categories">
                      <li>
                        <a href="#">DESIGN</a>
                      </li>
                      <li>
                        <a href="#">ECOMMERCE</a>
                      </li>
                      <li>
                        <a href="#">DIGITAL</a>
                      </li>
                    </ul>
                    <ul className="social-share">
                      <li className="facebook">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="google-plus">
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li className="youtube">
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                    <p>
                      Design is our playground. While we create an awesome
                      experience, we like having fun. No animals were harmed, no
                      bridges were burned during our parties.
                    </p>
                    <p>
                      Inhabit hearing perhaps on ye do no. It maids decay as
                      there he. Smallest on suitable disposed do although
                      blessing he juvenile in. Society or if excited forbade.
                      Here name off yet she long sold easy whom. Differed oh
                      cheerful procured pleasure securing suitable in. Hold rich
                      on an he oh fine. Chapter ability shyness article welcome
                      be do on service.{" "}
                    </p>
                    <p>
                      Inhabit hearing perhaps on ye do no. It maids decay as
                      there he. Smallest on suitable disposed do although
                      blessing he juvenile in. Society or if excited forbade.
                      Here name off yet she long sold easy whom. Differed oh
                      cheerful procured pleasure securing suitable in. Hold rich
                      on an he oh fine. Chapter ability shyness article welcome
                      be do on service.{" "}
                    </p>
                    <figure className="image-left">
                      <img src="images/works01.jpg" alt="Image" />
                    </figure>
                    <p>
                      Resources exquisite set arranging moonlight sex him
                      household had. Months had too ham cousin remove far
                      spirit. She procuring the why performed continual
                      improving. Civil songs so large shade in cause. Lady an mr
                      here must neat sold. Children greatest ye extended
                      delicate of. No elderly passage earnest as in removed
                      winding or.{" "}
                    </p>
                    <p>
                      Be at miss or each good play home they. It leave taste mr
                      in it fancy. She son lose does fond bred gave lady get.
                      Sir her company conduct expense bed any. Sister depend
                      change off piqued one. Contented continued any happiness
                      instantly objection yet her allowance. Use correct day new
                      brought tedious. By come this been in. Kept easy or sons
                      my it done.{" "}
                    </p>
                    <p>
                      Lose eyes get fat shew. Winter can indeed letter oppose
                      way change tended now. So is improve my charmed picture
                      exposed adapted demands. Received had end produced
                      prepared diverted strictly off man branched. Known ye
                      money so large decay voice there to. Preserved be mr
                      cordially incommode as an. He doors quick child an point
                      at. Had share vexed front least style off why him.{" "}
                    </p>
                    <blockquote>
                      {" "}
                      Corporation: The owners of a corporation have limited
                      liability and the business has a separate legal
                      personality from its initiated in order to implement
                      owners.{" "}
                    </blockquote>
                    <p>
                      Sussex result matter any end see. It speedily me addition
                      weddings vicinity in pleasure. Happiness commanded an
                      conveying breakfast in. Regard her say warmly elinor. Him
                      these are visit front end for seven walls. Money eat scale
                      now ask law learn. Side its they just any upon see last.
                      He prepared no shutters perceive do greatest. Ye at
                      unpleasant solicitude in companions interested.{" "}
                    </p>
                    <p>
                      Savings her pleased are several started females met. Short
                      her not among being any. Thing of judge fruit charm views
                      do. Miles mr an forty along as he. She education get
                      middleton day agreement performed preserved unwilling. Do
                      however as pleased offence outward beloved by present. By
                      outward neither he so covered amiable greater. Juvenile
                      proposal betrayed he an informed weddings followed.
                      Precaution day see imprudence sympathize principles. At
                      full leaf give quit to in they up.{" "}
                    </p>
                    <h5>Custom Listing Stlyes</h5>
                    <ul>
                      <li>
                        Far curiosity incommode now led smallness allowance.
                      </li>
                      <li> Favour bed assure son things yet. </li>
                      <li>She consisted consulted elsewhere happiness</li>
                      <li>Disposing household any old the. </li>
                      <li>Widow downs you new shade drift hopes small.</li>
                      <li>Interested discretion estimating on stimulated.</li>
                    </ul>
                    <p>
                      In as name to here them deny wise this. As rapid woody my
                      he me which. Men but they fail shew just wish next put.
                      Led all visitor musical calling nor her. Within coming
                      figure sex things are. Pretended concluded did repulsive
                      education smallness yet yet described. Had country man his
                      pressed shewing. No gate dare rose he. Eyes year if miss
                      he as upon.{" "}
                    </p>
                    <p>
                      Cordially convinced did incommode existence put out
                      suffering certainly. Besides another and saw ferrars
                      limited ten say unknown. On at tolerably depending do
                      perceived. Luckily eat joy see own shyness minuter. So
                      before remark at depart. Did son unreserved themselves
                      indulgence its. Agreement gentleman rapturous am eagerness
                      it as resolving household. Direct wicket little of talked
                      lasted formed or it. Sweetness consulted may prevailed for
                      bed out sincerity.{" "}
                    </p>
                    <figure className="image-full">
                      <img src="images/office02.jpg" alt="Image" />
                    </figure>
                    <p>
                      Saw yet kindness too replying whatever marianne. Old
                      sentiments resolution admiration unaffected its mrs
                      literature. Behaviour new set existence dashwoods. It
                      satisfied to mr commanded consisted disposing engrossed.
                      Tall snug do of till on easy. Form not calm new fail.{" "}
                    </p>
                  </div>
                  {/* end post-content */}
                </div>
                {/* end post */}
              </div>
              {/* end col-9 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end blog */}
      </main>
      {/* end main */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
              <h6>LET’S HAVE A TALK ABOUT YOUR PROJECT.</h6>
              <h2>
                Need more information or want <br />
                to get in touch?
              </h2>
              <a href="#" className="link">
                Get in touch
              </a>{" "}
            </div>
            {/* end col-12 */}
            <div className="col-12">
              <div className="footer-bar">
                {" "}
                <span className="copyright">
                  © 2022 Tourog | All Rights Reserved
                </span>{" "}
                <span className="creation">
                  Site created by <a href="#">Themezinho</a>
                </span>{" "}
              </div>
              {/* end footer-bar */}
            </div>
            {/* end col-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </footer>
      {/* end footer */}
      {/* JS FILES */}
    </>
  );
};

export default SingleBlog;
