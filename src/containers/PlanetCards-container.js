import React from 'react';

import PlanetCards from '../components/PlanetCards/PlanetCards';

export default function PlanetCardsContainer({planets}) {
  return (
    <main>
      {planets.map( planet => <PlanetCards planet={planet} />)}
    </main>
  );
}