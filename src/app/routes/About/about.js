import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <main className="about-main">
        <section className="about-description">
         <div className="container">
           <h2 className="about__title">Who We Are</h2>
           <p>We are the people behind WPBeginner, OptinMonster, MonsterInsights, WPForms, SeedProd, and more. We believe in creating awesome user experiences. We are humbly considered thought leaders by many in our space because of our rapid growth and innovations. Whatever the market conditions or current trends, you will always find Awesome Motive leading the way to help our customers gain competitive business advantage and stay ahead of the curve.</p>
           <div className="about__img">
             <img src="https://awesomemotive.com/wp-content/themes/amthemenew/assets/images/about.svg" alt="people" />
           </div>
         </div>
        </section>
        <section className="about-story">
          <div className="container">
            <h2 className="about__title">Our Story</h2>
            <p>We started with a single goal: level the playing field for small businesses, so they can grow and compete with the big guys. We accomplish this goal by creating enterprise-level tools, team, and training for small business.</p>
            <div className="company-time">Company timeline</div>
          </div>
        </section>
        <section className="timeline">
          <div className="container">
            <div className="timeline__row">
              <div className="timeline__item">
                <time className="timeline__time">2009</time>
                <strong className="timeline__title">WPBeginner</strong>
                <p>Syed Balkhi launched WPBeginner, which is now the largest free WordPress resource site</p>
              </div>
            </div>
            <div className="timeline__row">
              <div className="timeline__item">
                <time className="timeline__time">2011</time>
                <strong className="timeline__title">List25</strong>
                <p>Syed Balkhi started List25, a fun side project that's now in the top 2000 YouTube channels.</p>
              </div>
            </div>
            <div className="timeline__row">
              <div className="timeline__item">
                <time className="timeline__time">2013</time>
                <strong className="timeline__title">OptinMonster</strong>
                <p className="timeline__text">Syed Balkhi and Thomas Griffin co-founded OptinMonster, the most powerful conversion optimization software.</p>
              </div>
            </div>
            <div className="timeline__row">
              <div className="timeline__item">
                <time className="timeline__time">2015</time>
                <strong className="timeline__title">Soliloquy & Envira</strong>
                <p>Envira Gallery and Soliloquy Slider plugin joins the Awesome Motive family through a merger deal and Thomas Griffin officially joins as the CTO.</p>
              </div>
            </div>
            <div className="timeline__row">
              <div className="timeline__item">
                <time className="timeline__time">2017</time>
                <strong className="timeline__title">WPForms</strong>
                <p>Syed Balkhi and Jared Atchison co-founded WPForms, a drag & drop WordPress form builder.</p>
              </div>
            </div>

            <div className="timeline__row">
              <div className="timeline__item">
                <time className="timeline__time">2018</time>
                <strong className="timeline__title">Sold Soliloquy & Envira</strong>
                <p>n December, we sold Envira Gallery and Soliloquy to better focus on our growth tools.</p>
              </div>
            </div>
            <div className="timeline__row">
              <div className="timeline__item">
                <time className="timeline__time">2019</time>
                <strong className="timeline__title">Sold List25</strong>
                <p>In October, we sold List25 to realign our company focus on software. At the time, List25 had over 2.3M subscribers and 550M video views on YouTube.</p>
              </div>
            </div>
          </div>

        </section>
      </main>
    );
  };
}