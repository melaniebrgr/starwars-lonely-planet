import React from 'react';

import Header from '../Header/Header';
import NavContainer from '../../containers/Nav-container';
import PlanetCardsContainer from '../../containers/PlanetCards-container';
import PlanetCardContainer from '../../containers/PlanetCard-container';

import './App.css';

export default function App({
  children, 
  planets,
}) {
  const childrenWithProps = children && React.Children.map(children,
    child => {
      if (child.type === PlanetCardsContainer || child.type === PlanetCardContainer) {
        return React.cloneElement(child, { planets: planets });
      }
      else 
        return child;
    }
  );

  const namesList = planets => planets.map(planet => planet.name);

  return (
    <div className="App container-fluid">
      <Header />
      <div className="App__main row">
        <NavContainer names={namesList(planets)}/>
        {childrenWithProps}
      </div>
    </div>
  );  
}