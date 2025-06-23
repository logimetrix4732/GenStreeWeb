import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import video02 from "../assets/videos/video02.mp4";

const GenVoice = () => {
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
            <video src={video02} loop autoPlay playsInline />
          </div>
          {/* end video-bg */}
          <div className="inner">
            <div className="container">
              <h1>GenVoice</h1>
              <p>
                Experience a free day with GenVoice and explore the benefits of
                the digital world.
              </p>
            </div>
            {/* end container */}
          </div>
          {/* end inner */}
        </header>
        {/* end page-header */}
        <section className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="post">
                  <figure className="post-image">
                    <img src="images/works01.jpg" alt="Image" />
                  </figure>
                  <div className="post-content">
                    <small className="post-date">01, September 2022</small>
                    <h3 className="post-title">
                      <a href="/SingleBlog">
                        Legally recognized as the only person who is authorized
                      </a>
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
                    <Link to="/SingleBlog" className="post-link">
                      READ MORE
                    </Link>
                  </div>
                  {/* end post-content */}
                </div>
                {/* end post */}
                <div className="post">
                  <figure className="post-image">
                    <img src="images/works02.jpg" alt="Image" />
                  </figure>
                  <div className="post-content">
                    <small className="post-date">01, September 2022</small>
                    <h3 className="post-title">
                      <a href="#">
                        Business is the activity of making one's living
                      </a>
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
                    <a href="blog-single.html" className="post-link">
                      READ MORE
                    </a>
                  </div>
                  {/* end post-content */}
                </div>

                {/* end post */}
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" tabIndex={-1}>
                      PREV
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      NEXT
                    </a>
                  </li>
                </ul>
              </div>

              {/* end col-4 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end blog */}
      </main>
      {/* end main */}

      {/* end footer */}
      {/* JS FILES */}
    </>
  );
};

export default GenVoice;
