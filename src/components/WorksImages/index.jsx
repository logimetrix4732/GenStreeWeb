import React from "react";
import works01 from "../../assets/images/works01.jpg";
import works02 from "../../assets/images/works02.jpg";
import works03 from "../../assets/images/works03.jpg";
import works04 from "../../assets/images/works04.jpg";
import works05 from "../../assets/images/works05.jpg";
import works06 from "../../assets/images/works06.jpg";
const WorksImages = () => {
  return (
    <section className="works">
      <ul>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works01.jpg" data-fancybox="">
              <img src={works01} alt="Image" />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>Darkness Vehicle</h3>
            <small>DIGITAL, PRINT, DEVELOPMENT</small>{" "}
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works02.jpg" data-fancybox="">
              <img src={works02} alt="Image" />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>Goddes Cover Art</h3>
            <small>PRINT, DIGITAL, DEVELOPMENT</small>
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works03.jpg" data-fancybox="">
              <img src={works03} alt="Image" />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>Hard Employee</h3>
            <small>WEB, DIGITAL, DEVELOPMENT</small>{" "}
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works04.jpg" data-fancybox="">
              <img src={works04} alt="Image" />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>Sweet Berry Pie</h3>
            <small>DIGITAL, PRINT, DEVELOPMENT</small>{" "}
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works05.jpg" data-fancybox="">
              <img src={works05} alt="Image" />
            </a>{" "}
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>King of Roosters</h3>
            <small>PRINT, DIGITAL, DEVELOPMENT</small>{" "}
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="images/works06.jpg" data-fancybox="">
              <img src={works06} alt="Image" />{" "}
            </a>
          </figure>
          <div className="caption wow" data-splitting="">
            <h3>Primero Car</h3>
            <small>WEB, DIGITAL, DEVELOPMENT</small>{" "}
          </div>
          {/* end caption */}
        </li>
      </ul>
    </section>
  );
};

export default WorksImages;
