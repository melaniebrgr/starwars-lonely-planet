import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    }
    this.getAll_SWAPI = this.getAll_SWAPI.bind(this);
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
        response.next ? get(response.next) : that.setState({ [stateName]: data });
      });
    })();
  }

  componentDidMount() {
    this.getAll_SWAPI('planets');
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>{`The Lonely Planets' guide to Star Wars`}</h1>
        </div>
        <p className="App-intro">
          Advice and information for the Star Wars universe traveller.
        </p>
        <ul>
          {this.state.planets.map(planet => <li>{planet.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
