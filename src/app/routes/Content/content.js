import React, { Component } from "react";
import trainImg from "../../../utils/img/image.jpg";

export class Content extends Component {
  render() {
    return (
      <main className="Content software container">
        <article className="software__article">
          <div className="software__box">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
              maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
              quam</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum libero
              maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis quam omnis
              quam</p>

            <figure className="software__figure">
              <img src={ trainImg } alt="Funny train" />
                <figcaption>Tussencop</figcaption>
            </figure>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi aspernatur consequatur deserunt
              dolores, dolorum fugiat harum inventore iste, laboriosam modi quam quisquam reiciendis vitae. Consequuntur
              delectus dicta distinctio error illo iste magni maxime molestias nostrum officia quas, quasi quibusdam quos,
              ratione repellat sed voluptatum. Corporis cum facere fuga necessitatibus optio perferendis perspiciatis
              sint, sit. Ab animi architecto asperiores, doloribus facere facilis laborum odio repellendus sequi sint
              tempore vel?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea eligendi laborum
              libero maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et molestiae omnis
              quam, similique tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate ea
              eligendi laborum libero maxime nihil numquam placeat totam ullam! Beatae, explicabo, minima! Assumenda et
              molestiae omnis quam, similique tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              cupiditate ea eligendi laborum libero maxime nihil numquam placeat totam ullam!</p>
          </div>
        </article>
        <aside className="aside">
          <div className="aside_widget">
            <h3 className="aside__title">Some title</h3>
            <blockquote className="aside__text">
              <div className="aside__text-wrap">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore ea incidunt praesentium
                  quidem quos tempora. Ab aliquid distinctio, ducimus eius magnam obcaecati odio praesentium quae.
                  Doloribus magnam nemo nihil?</p>
              </div>
              <cite className="aside__author">Leonardo da Vinci</cite>
            </blockquote>
          </div>
        </aside>
      </main>
    );
  };
}

