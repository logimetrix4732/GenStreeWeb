import React from "react";

const Footer = () => {
  return (
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
            <h6>LET'S HAVE A TALK ABOUT YOUR PROJECT.</h6>
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
  );
};

export default Footer;
