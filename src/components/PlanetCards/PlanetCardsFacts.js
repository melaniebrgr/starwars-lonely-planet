import React from 'react';

import { numberWithCommas } from './PlanetCardsCalculations';

export default function PlanetCardsFacts({planet}) {
  return (
    <table className="PlanetCards__Facts">
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