import React from 'react';

import PlanetCard from '../components/PlanetCard/PlanetCard';

export default function PlanetCardContainer({planets}) {
  return (
    <main>
      {planets.map( planet => <PlanetCard planet={planet} />)}
    </main>
  );
}