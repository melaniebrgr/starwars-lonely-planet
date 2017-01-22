import React from 'react';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PlanetCardsContainer from '../../containers/PlanetCards-container';

import './App.css';

export default function App({planets, children}) {
  const childrenWithProps = React.Children.map(children,
    child => {
      if (child.type === PlanetCardsContainer) {
        return React.cloneElement(child, { planets: planets });
      }
      else 
        return child;
    }
  );

  return (
    <div className="App">
      <Header />
      <Nav planets={planets}/>
      {childrenWithProps}
    </div>
  );  
}