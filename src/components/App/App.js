import React from 'react';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PlanetCardContainer from '../../containers/PlanetCard-container';

import './App.css';

export default function App({planets, children}) {
  const childrenWithProps = React.Children.map(children,
    child => {
      if (child.type === PlanetCardContainer) {
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