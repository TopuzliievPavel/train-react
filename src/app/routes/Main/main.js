import React, { Component } from "react";
import PageContact from "../../components/Layout/page-contact";
import PageAbout from "../../components/Layout/page-about";
import Visual from "../../components/Layout/visual";

// const users = [];

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Visual />
        <PageAbout />
        <PageContact />
      </main>
    );
  };
}