import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { MapProvider, Marker, Popup } from "react-map-gl";
import data from "./data.jsx";
import Markers from './Markers.jsx'
import SearchBar from './SearchBar.jsx'
import SearchResult from "./SearchResult.tsx";
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  function updateSearch(){
      if (userInput.length > 0) {
        const lowercaseUserInput = userInput.toLowerCase();
        const filteredDataArr = markerData.filter((place) => {
          place.lowercaseName = place.name.toLowerCase();
          return (
            place.lowercaseName.indexOf(lowercaseUserInput) >= 0
          );
        });
        setFilteredData(filteredDataArr);
      }


  }


  useEffect(() => {
    updateSearch();
  }, [userInput]);

  useEffect(()=>{
    if (filteredData.length === 1) {
      setViewState({
        longitude: filteredData[0].long,
        latitude: filteredData[0].lat,
        zoom: 14,
      });
    }
  },[filteredData])
  
  return (
    <div className="container">
      <div className="user-input-container">
        <div className="menu-icon">
          <i
            className="fa-solid fa-bars"
            onClick={() => {
              setIsSidebarVisible(!isSidebarVisible);
            }}
          ></i>
        </div>

        <SearchBar
          userInput={userInput}
          setUserInput={setUserInput}
          markerData={markerData}
          setMarkerData={setMarkerData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          setIsSidebarVisible={setIsSidebarVisible}
        />
      </div>

      {isSidebarVisible && (
        <div className="sidebar">
          <SearchResult
            filteredData={filteredData}
            userInput={userInput}
            setUserInput={setUserInput}
            setIsSidebarVisible={setIsSidebarVisible}
            updateSearch={updateSearch}
          />
        </div>
      )}

      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "95%" }}
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

        <ul class="footer__social-links">
          <li class="footer__social-link-item">
            <a href="https://www.linkedin.com/in/jackli0707/">
              <img
                src="/images/linkedin.svg"
                title="Link to Linkedin Profile"
                class="footer__social-image"
                alt="Linkedin"
              />
            </a>
          </li>

          <li class="footer__social-link-item">
            <a
              href="https://github.com/jackli921"
              title="Link to Github Profile"
            >
              <img
                src="/images/github.svg"
                class="footer__social-image"
                alt="Github"
              />
            </a>
          </li>

          <li class="footer__social-link-item">
            <a
              href="https://twitter.com/li_jack0707"
              title="Link to Twitter Profile"
            >
              <img
                src="/images/twitter.svg"
                class="footer__social-image"
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
    </div>
  );
};
