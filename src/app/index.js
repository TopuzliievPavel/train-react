import React, { Component } from 'react';
import './app.scss';
import { Layout } from "./components/Layout/layout";


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Main />
        <Layout />
      </div>
    );
  }
}