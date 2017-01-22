import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';

class App extends Component {
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

  diameterAdjective(planetDiameter) {
    const earthDiameter = 12742;
    const diameterDiff = planetDiameter - earthDiameter;
    if ( diameterDiff > 1000 ) return 'larger than';
    if ( diameterDiff < -1000 ) return 'smaller than';
    return 'about the same size as'
  }

  diameterProportion(planetDiameter) {
    const earthDiameter = 12742;
    return (planetDiameter/earthDiameter).toFixed(2);
  }

  populationAdjective(planetPopulation) {
    if (planetPopulation === 'unknown' || undefined) return 'impossible to compare with';
    const earthPopulation = 7479035400;
    const populationDiff = planetPopulation - earthPopulation;
    if ( populationDiff > 100000 ) return 'greater than';
    if ( populationDiff < -100000 ) return 'smaller than';
    return 'comparable to';
  }

  numberWithCommas(n) {
    if (n === 'unknown' || undefined) return 'a currently unknown number of';
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  componentDidMount() {
    this.getAll_SWAPI('planets');
  }
  
  render() {
    const planetCards = (planet, i) => (
      <article key={i}>
        <header>
          <h3>{planet.name}</h3>
        </header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Population:</td>
                <td>{this.numberWithCommas(planet.population)}</td>
              </tr>
              <tr>
                <td>Terrain:</td>
                <td>{planet.terrain}</td>
              </tr>
            </tbody>
          </table>
          <h4>Description</h4>
          <p>{`The planet ${planet.name} has a ${planet.climate.toLowerCase()} climate. It's ${this.diameterAdjective(planet.diameter)} Earth, with ${this.diameterProportion(planet.diameter)} it's diameter. ${planet.name}'s population is ${this.populationAdjective(planet.population)} Earth's with ${this.numberWithCommas(planet.population)} sentient lifeforms, which is supported by ${planet.surface_water} % surface water coverage.`}</p>
        </section>
      </article>
    );
    

    return (
      <div className="App">
        <div className="App-header">
          <h1>{`The Lonely Planets' guide to Star Wars`}</h1>
        </div>
        <p className="App-intro">
          Advice and information for the Star Wars universe traveller.
        </p>
        {this.state.planets.map(planetCards)}
      </div>
    );
  }
}

export default App;
