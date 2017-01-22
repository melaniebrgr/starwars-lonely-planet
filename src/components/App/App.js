import React from 'react';
import $ from 'jquery';

import Header from '../Header/Header';
import PlanetCards from '../PlanetCards/PlanetCards';
import Nav from '../Nav/Nav';

import './App.css';

export default function App({planets}) {
  return (
    <div className="App">
      <Header />
      <Nav planets={planets}/>
    </div>
  );
}

// {planets.map( planet => <PlanetCards planet={planet} />)}