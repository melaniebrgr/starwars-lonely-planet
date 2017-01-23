import React from 'react';

import { numberWithCommas } from './PlanetCardCalculations';

export default function PlanetCardFacts({
  planet,
}) {
  return (
    <table className="PlanetCard__Facts table">
      <tbody>
        <tr>
          <td>Population:</td>
          <td>{numberWithCommas(planet.population)}</td>
        </tr>
        <tr>
          <td>Terrain:</td>
          <td>{planet.terrain}</td>
        </tr>
      </tbody>
    </table>
  );
}