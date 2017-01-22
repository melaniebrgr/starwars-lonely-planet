import React from 'react';

import { diameterAdjective, diameterProportion, populationAdjective, numberWithCommas } from './PlanetCardCalculations';

export default function PlanetCardDescription({planet}) {
  return (
    <div className="PlanetCard__Description">
      <h4>Description</h4>
      <p>{`The planet ${planet.name} has a ${planet.climate.toLowerCase()} climate. It's ${diameterAdjective(planet.diameter)} Earth, with ${diameterProportion(planet.diameter)} it's diameter. ${planet.name}'s population is ${populationAdjective(planet.population)} Earth's with ${numberWithCommas(planet.population)} sentient lifeforms, which is supported by ${planet.surface_water} % surface water coverage.`}</p>
    </div>
  );
}