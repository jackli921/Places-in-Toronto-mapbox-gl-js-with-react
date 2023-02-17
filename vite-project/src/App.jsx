import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Marker} from 'react-map-gl'


export default function App() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamFja2xpOTIxIiwiYSI6ImNsZTh4MXo1czAzY28zdnBhbGcyZ3Nqa2kifQ.XJu3d6iTqkELeKfFPBu3xQ';

  const [lng, setLng] = useState(-79.347015);
  const [lat, setLat] = useState(43.651070);
  const [zoom, setZoom] = useState(9);

  // const [viewState, setViewState] = useState({
  //   latitude:37.8,
  //   longtitude:-122.4,
  //   zoom:14
  // })

  return (
    <div className="App">
      <h1>Fun in Toronto</h1>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiamFja2xpOTIxIiwiYSI6ImNsZTh4MXo1czAzY28zdnBhbGcyZ3Nqa2kifQ.XJu3d6iTqkELeKfFPBu3xQ"
        
        style={
          {
            width:"100vw",
            height:"100vh",
          }}
          
        initialViewState={{
            longitude:lng,
            latitude:lat,
            zoom:12
          }}
        
          mapStyle="mapbox://styles/mapbox/streets-v12"
      />
    </div>
  );

}