import React from 'react';

import PlanetCardFacts from './PlanetCardFacts';
import PlanetCardDescription from './PlanetCardDescription';

export default function PlanetCard({
  planet,
}) {
  return (
    <article className="PlanetCard">
      <header>
        <h3>{planet.name}</h3>
      </header>
      <section>
        <PlanetCardFacts planet={planet} />
        <PlanetCardDescription planet={planet} />
      </section>
    </article>
  );
}