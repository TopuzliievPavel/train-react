import React, { Component } from 'react';
import './styles.scss';
import { Header } from './components/Layout/Header';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}