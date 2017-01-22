export function diameterAdjective(planetDiameter) {
  const earthDiameter = 12742;
  const diameterDiff = planetDiameter - earthDiameter;
  if ( diameterDiff > 1000 ) return 'larger than';
  if ( diameterDiff < -1000 ) return 'smaller than';
  return 'about the same size as'
}

export function diameterProportion(planetDiameter) {
  const earthDiameter = 12742;
  return (planetDiameter/earthDiameter).toFixed(3);
}

export function populationAdjective(planetPopulation) {
  if (planetPopulation === 'unknown' || undefined) return 'impossible to compare with';
  const earthPopulation = 7479035400;
  const populationDiff = planetPopulation - earthPopulation;
  if ( populationDiff > 100000 ) return 'greater than';
  if ( populationDiff < -100000 ) return 'smaller than';
  return 'comparable to';
}

export function numberWithCommas(n) {
  if (n === 'unknown' || undefined) return 'a currently unknown number of';
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}