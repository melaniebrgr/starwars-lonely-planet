import React, { Component } from 'react';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PlanetCardsContainer from '../../containers/PlanetCards-container';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => {
        if (child.type === PlanetCardsContainer) {
          return React.cloneElement(child, { planets: this.props.planets });
        }
        else 
          return child;
      }
    );

    return (
      <div className="App">
        <Header />
        <Nav planets={this.props.planets}/>
        {childrenWithProps}
      </div>
    );
  }
}