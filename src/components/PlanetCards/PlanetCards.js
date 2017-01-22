import React from 'react';

import PlanetCardsFacts from './PlanetCardsFacts';
import PlanetCardsDescription from './PlanetCardsDescription';

export default function PlanetCards({planet}) {
  return (
    <article className="PlanetCards">
      <header>
        <h3>{planet.name}</h3>
      </header>
      <section>
        <PlanetCardsFacts planet={planet} />
        <PlanetCardsDescription planet={planet} />
      </section>
    </article>
  );
}