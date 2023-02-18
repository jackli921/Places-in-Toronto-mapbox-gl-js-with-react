import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { MapProvider, Marker, Popup } from "react-map-gl";
import data from "./data.jsx";
import Markers from "./Markers.jsx";

export default function App() {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiamFja2xpOTIxIiwiYSI6ImNsZTh4MXo1czAzY28zdnBhbGcyZ3Nqa2kifQ.XJu3d6iTqkELeKfFPBu3xQ";

  const [viewState, setViewState] = useState({
    longitude: -79.34015,
    latitude: 43.65107,
    zoom: 11,
  });

  const [selectedPlace, setSelectedPlace] = useState(null)

  return (
    <div>
      <h1>Places in Toronto</h1>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        className="map"
      >
        {data.map((place, index) => {
          
          const { long, lat, name } = place;
          return (
            <>
              <Marker
                key={`marker-${index}`}
                longitude={long}
                latitude={lat}
                onClick={()=>{setSelectedPlace(place)}}
              >
              
              </Marker>
              {selectedPlace && (
                <Popup
                  longitude={selectedPlace.long}
                  latitude={selectedPlace.lat}
                >
                  <p>{selectedPlace.name}</p>
                </Popup>
              )}
            </>
          );
        })}
      </Map>
    </div>
  );
};
