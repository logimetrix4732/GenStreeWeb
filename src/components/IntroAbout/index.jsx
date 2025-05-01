import React from "react";

const IntroAbout = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 wow" data-splitting="">
            <h3 className="section-title">
              EMPOWERING WOMEN IN <br />
              STEM & BEYOND
            </h3>
            <a href="mailto:connect@genstree.com">connect@genstree.com</a>
          </div>
          {/* end col-5 */}
          <div className="col-lg-7 wow" data-splitting="">
            <p>
              At Genstree AI LLP, we believe inclusive innovation starts with
              opportunity. We are dedicated to reshaping traditional hierarchies
              by placing women at the forefront of STEM — creating a future
              where empathy, mentorship, and collaboration thrive.
            </p>
            <h6>Genstree AI LLP</h6>
            <small>Women-Led | Future-Focused</small> <b>2021</b>
            <h4>
              BUILDING A LEGACY OF
              <br />
              INCLUSIVE LEADERSHIP
            </h4>
          </div>
          {/* end col-7 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default IntroAbout;
