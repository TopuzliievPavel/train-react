import React, { Component } from "react";
import IndexContact from "../../components/Layout/index-contact";
import IndexAbout from "../../components/Layout/index-about";
import Visual from "../../components/Layout/visual";

// const users = [];

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Visual />
        <IndexAbout />
        <IndexContact />
      </main>
    );
  };
}