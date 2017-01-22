import React from 'react';

import PlanetCard from '../components/PlanetCard/PlanetCard';

export default function PlanetCardsContainer({planets}) {
  return (
    <main>
      {planets.map( (planet, i) => <PlanetCard planet={planet} key={i} />)}
    </main>
  );
}