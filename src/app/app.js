import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { Main, Content, OtherLink, About, Contact } from "./routes";
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/" component={ Main } />
              <Route path="/Content" component={ Content } />
              <Route path="/Other" component={ OtherLink } />
              <Route path="/About" component={ About } />
              <Route path="/Contact" component={ Contact } />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}
