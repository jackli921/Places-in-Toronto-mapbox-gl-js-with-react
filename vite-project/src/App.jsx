import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { MapProvider, Marker, Popup } from "react-map-gl";
import data from "./data.jsx";
import Markers from './Markers.jsx'
import SearchBar from './SearchBar.jsx'
import SearchResult from "./SearchResult.jsx";
export default function App() {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiamFja2xpOTIxIiwiYSI6ImNsZTh4MXo1czAzY28zdnBhbGcyZ3Nqa2kifQ.XJu3d6iTqkELeKfFPBu3xQ";
  
  const [viewState, setViewState] = useState({
    longitude: -79.34015,
    latitude: 43.65107,
    zoom: 11,
  });

  const [markerData, setMarkerData] = useState(data)
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  return (
    <div className="container">
      <h1>Places in Toronto</h1>
      <div className="sidebar">
        <h3>Places</h3>
        <SearchBar
          userInput={userInput}
          setUserInput={setUserInput}
          markerData={markerData}
          setMarkerData={setMarkerData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
        <SearchResult filteredData={filteredData} />
      </div>

      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        className="map"
      >
        <Markers
          markerData={markerData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </Map>
    </div>
  );
};
