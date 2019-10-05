export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function formatCoordinates(polygon) {
  // console.log('inside format coords');
  const newCoords = polygon.map(coordinates => {
    let a = coordinates[0];
    let b = coordinates[1];
    // coordinates[0] = b;
    // coordinates[1] = a;
    // console.log(coordinates);
    return [b, a];
  });
  // console.log(`new coords are ${newCoords}`);
  return newCoords;
}
