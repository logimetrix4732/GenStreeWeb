import introImg from "../../assets/images/introImg3.png";
import introImg2 from "../../assets/images/introImg2.gif";
const IntroImage = () => {
  return (
    <section className="intro-image">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="office-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ position: "relative" }}>
                  <figure
                    className="reveal-effect masker wow"
                    style={{ margin: 0 }}
                  >
                    <img
                      src={introImg}
                      alt="Image"
                      style={{ width: "100%", display: "block" }}
                    />

                    <figcaption
                      style={{
                        position: "absolute",
                        bottom: "15px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "black",
                        textAlign: "center",
                        width: "100%",
                        padding: "0 20px",
                      }}
                    >
                      <h1
                        style={{
                          margin: 0,
                          padding: 0,
                          fontSize: "4.5vw",
                        }}
                      >
                        Celebrating GenStree
                      </h1>
                    </figcaption>
                    <figcaption>
                      <img
                        src={introImg2}
                        alt=""
                        style={{ height: "115px", width: "115px" }}
                      />
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroImage;
