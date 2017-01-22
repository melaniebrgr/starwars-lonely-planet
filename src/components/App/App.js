import React from 'react';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PlanetCardsContainer from '../../containers/PlanetCards-container';
import PlanetCardContainer from '../../containers/PlanetCard-container';

import './App.css';

export default function App(props) {
  const childrenWithProps = props.children && React.Children.map(props.children,
    child => {
      if (child.type === PlanetCardsContainer || child.type === PlanetCardContainer) {
        return React.cloneElement(child, { planets: props.planets });
      }
      else 
        return child;
    }
  );

  return (
    <div className="App">
      <Header />
      <Nav planets={props.planets}/>
      {childrenWithProps}
    </div>
  );  
}