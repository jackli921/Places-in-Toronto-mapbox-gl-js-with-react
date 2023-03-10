import React, { useState, useEffect, useRef } from "react";

export default function SearchBar(props) {
  const {
    userInput,
    setUserInput,
    markerData,
    setMarkerData,
    filteredData,
    setFilteredData,
    setIsSidebarVisible,
  } = props;
  
  const inputRef = useRef(null);

  //create a state to store initial data
  //create another state to store filtered data, the data should mirror initial data
  //on load, pass filtered data arr to markers component for rendering
  //always have the full data stored in state

  //every time user changes the input, it should always run a filter function on the original array
  //the function should return a filtered array saved in an new variable
  //update the filtered array state with the variable above

  function handleChange(e) {
    setIsSidebarVisible(true);
    setUserInput(e.target.value);

    if (userInput.length > 0) {
      const filteredDataArr = markerData.filter((place) => {
        place.lowercaseName = place.name.toLowerCase();
        return place.lowercaseName.indexOf(userInput.toLowerCase()) >= 0;
      });
      setFilteredData(filteredDataArr);
    }

    inputRef.current.focus;
  }

  useEffect(() => {
    //if user input is empty, then replace filtered data with all marker data
    if (!userInput) {
      setFilteredData(markerData);
    }
  }, [userInput]);

  return (
    <input
      placeholder="Search a place in Toronto"
      className="search-bar"
      ref={inputRef}
      type="search"
      value={userInput}
      onChange={(e) => handleChange(e)}
    />
  );
}
