import React, { Component } from "react";
import "./visual.scss";

export default class Visual extends Component {
  render() {
    return (
      <section className="visual">
        <div className="visual__inner">
          <h1 className="visual__title">Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad, aliquam amet assumenda
            atque autem cumque debitis, earum est ipsa labore non praesentium quidem repudiandae tempore voluptates?
            Molestias, tempore, voluptatem.
          </p>
          <button className="btn visual__btn btn_active">Download</button>
          <a href="/" className="link">Meer informatie</a>
        </div>
      </section>
    );
  };
}