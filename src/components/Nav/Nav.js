import React from 'react';

import NavList from './NavList';

export default function Nav({planets}) {
  return (
    <ul>
      {planets.map(planet => <NavList planet={planet}/>)}
    </ul>
  );
}