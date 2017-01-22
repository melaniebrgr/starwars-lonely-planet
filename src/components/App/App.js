import React, { Component } from 'react';
import $ from 'jquery';

import PlanetCards from '../PlanetCards/PlanetCards';
import Header from '../Header/Header';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    }
  }

  getAll_SWAPI(stateName) {
    // response from SWAPI API is multi-part pages
    // this function calls itself recursively to get all pages
    // then finally sets the state will all data
    // TODO: right now the stateName argument must exist on the state object and must also be the API attribute requested; this should probably be more flexible

    let data = [];
    const that = this;
    (function get(url) {
      let nextUrl = arguments.length ? url : `http://swapi.co/api/${stateName}/`;
      $.get(nextUrl).then(response => {
        data = data.concat(response.results);
        that.setState({ [stateName]: data })
        if (response.next) get(response.next);
      });
    })();
  }

  componentDidMount() {
    this.getAll_SWAPI('planets');
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.planets.map( planet => <PlanetCards planet={planet} />)}
      </div>
    );
  }
}
