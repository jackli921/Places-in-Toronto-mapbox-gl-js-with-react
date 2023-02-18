import React, { useState } from "react";
import data from "./data.jsx";
import mapboxgl from "mapbox-gl";
import Map, { MapProvider, Marker, Popup } from "react-map-gl";

export default function Markers(props) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((place, index) => {
          const { long, lat, name } = place;
          return (
            <React.Fragment key={index}>
              <Marker
                key={index}
                longitude={long}
                latitude={lat}
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setSelectedPlace(place);
                }}
              ></Marker>
              {selectedPlace && (
                <Popup
                  longitude={selectedPlace.long}
                  latitude={selectedPlace.lat}
                  onClose={() => {
                    setSelectedPlace(null);
                  }}
                  offset={40}
                >
                  <p>{selectedPlace.name}</p>
                </Popup>
           
              )}
            </ React.Fragment>
          );
        })}
    </>
  );
}
