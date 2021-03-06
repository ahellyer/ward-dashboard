import React from 'react';
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  Polygon
} from 'react-leaflet';

import { formatCoordinates } from '../utils';
import { polygonData } from '../city-wards-data';

class Map extends React.Component {
  render() {
    // console.log(polygonData);
    //loop through polygonData and create polygons
    //polygonData.features

    // name is polygonData.features[i].properties.AREA_NAME
    //coords is polygonData.features[i].geometry.coordinates

    const accessToken =
      'pk.eyJ1IjoiYWhlbGx5ZXIiLCJhIjoiY2sxY2hxdnhyMGVmajNtcXRtdTBwZzl4ciJ9.WhS2xRhiU841htW8Jmkiaw';
    const id = 'dark-v10';
    const darkMap = `https://api.mapbox.com/styles/v1/mapbox/${id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`;

    return (
      <LeafletMap
        center={[43.7, -79.4]}
        zoom={10}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={false}
        easeLinearity={0.35}
        viewport={[43.6, 79.4]}
      >
        <TileLayer url={darkMap} />
        {/* map through ward coordinates and render a polygon for each one */}
        {polygonData.features.map(ward => {
          //   console.log(ward.properties.AREA_NAME);
          //   console.log(`original coords are ${ward.geometry.coordinates[0]}`);
          let coords = ward.geometry.coordinates[0];
          //   let newCoords = formatCoordinates(ward.geometry.coordinates[0]);
          const newCoords = formatCoordinates(coords);
          let color = '#BBCDE5';
          //if ward.properties.AREA_NAME is equal to hovered ward card, render that polygon in a different color
          if (ward.properties.AREA_NAME === 'Humber River-Black Creek') {
            color = 'red';
          }
          return (
            <Polygon
              key={ward.properties.AREA_NAME}
              color="#BBCDE5"
              positions={newCoords}
              weight="1.5"
              opacity=".7"
            />
          );
        })}

        {/* <Polygon color="yellow" positions={polygon} /> */}
      </LeafletMap>
    );
  }
}

export default Map;
