import React from 'react';

import PlanetCard from '../components/PlanetCard/PlanetCard';

export default function PlanetCardContainer({
  planets, 
  params,
}) {
  const planetName = params.name.toLowerCase();
  const isPlanets = planets => planets.length > 0;
  const isPlanetInPlanets = (name, planets) => planets.find(planet => planet.name.toLowerCase() === name);

  return (
    <main className="col-md-10">
      { isPlanets(planets) && (isPlanetInPlanets(planetName, planets) && <PlanetCard planet={isPlanetInPlanets(planetName, planets)} />) }
    </main>
  );
}