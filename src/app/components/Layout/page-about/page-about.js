import React from "react";
import service from "../../../../utils/img/service01.png";
import illustrate from "../../../../utils/img/service02.png";
import video from "../../../../utils/img/service03.png";
import animate from "../../../../utils/img/service04.png";


const PageAbout = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title">Some title</h2>

        <div className="about__list">
          <div className="about-info">
            <div className="about-info__img">
              <img src={service} alt="service" />
            </div>
            <h4 className="about-info__title">Foto bewerking</h4>
            <div className="about-info__text">
              <p>
                Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin
                consequat lectus sed felis vulputate varius
              </p>
            </div>
            <a href="/" className="link about-info__link">
              Meer informatie
            </a>
          </div>
          <div className="about-info">
            <div className="about-info__img">
              <img src={illustrate} alt="service" />
            </div>
            <h4 className="about-info__title">Illustratie</h4>
            <div className="about-info__text">
              <p>
                Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin
                consequat lectus sed felis vulputate varius
              </p>
            </div>
            <a href="/" className="link about-info__link">
              Meer informatie
            </a>
          </div>
          <div className="about-info">
            <div className="about-info__img">
              <img src={video} alt="service" />
            </div>
            <h4 className="about-info__title">Video & animatie</h4>
            <div className="about-info__text">
              <p>Lorem ipsum dolor sit amet, con sectetur apidiscing elit.</p>
            </div>
            <a href="/" className="link about-info__link">
              Meer informatie
            </a>
          </div>
          <div className="about-info">
            <div className="about-info__img">
              <img src={animate} alt="service" />
            </div>
            <h4 className="about-info__title">3d animatie</h4>
            <div className="about-info__text">
              <p>
                Lorem ipsum dolor sit amet, con sectetur apidiscing elit. Proin
                consequat lectus sed felis vulputate varius
              </p>
            </div>
            <a href="/" className="link about-info__link">
              Meer informatie
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PageAbout;

