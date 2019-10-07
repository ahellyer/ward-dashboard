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

function isMarkerInsidePolygon(marker, poly) {
  var polyPoints = poly.getLatLngs();
  var x = marker.getLatLng().lat,
    y = marker.getLatLng().lng;

  var inside = false;
  for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
    var xi = polyPoints[i].lat,
      yi = polyPoints[i].lng;
    var xj = polyPoints[j].lat,
      yj = polyPoints[j].lng;

    var intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}

const mapOptions = {
  waterColour: `https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png`,
  basicGrey: `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`
};
