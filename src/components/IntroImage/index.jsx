import React from "react";
import office01 from "../../assets/images/office01.jpg";
import office02 from "../../assets/images/office02.jpg";
import office03 from "../../assets/images/office03.jpg";
const IntroImage = () => {
  return (
    <section className="intro-image">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="office-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <figure className="reveal-effect masker wow">
                    <img src={office01} alt="Image" />
                    <figcaption>
                      <h6> HEADQUARTOR OF TOUROG</h6>
                    </figcaption>
                  </figure>
                </div>
                {/* end swiper-slide */}
                <div className="swiper-slide">
                  <figure>
                    <img src={office02} alt="Image" />
                    <figcaption>
                      <h6> TORONTO OFFICE</h6>
                    </figcaption>
                  </figure>
                </div>
                {/* end swiper-slide */}
                <div className="swiper-slide">
                  <figure>
                    <img src={office03} alt="Image" />
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
  );
};

export default IntroImage;
