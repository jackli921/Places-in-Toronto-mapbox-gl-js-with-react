import React, { useEffect } from "react";

type placeType = {
    name: string;   
    long: number;
    lat: number;
};

interface propTypes {
  filteredData: placeType[];
  setUserInput: Function;
  userInput: string;
  setIsSidebarVisible: Function;
  updateSearch: Function;
};

export default function SearchResult(props: propTypes){

  const {
    filteredData,
    setUserInput,
    userInput,
    setIsSidebarVisible,
    updateSearch,
  } = props;

  function handleClick(e:React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement
    if(target && typeof target.innerText === 'string'){
        setUserInput(target.innerText);
    }
    setIsSidebarVisible(false);
  }

  const results = filteredData.map((place: placeType, index:number) => {
  
    return (
      <div className="result-text-card" key={index}>
        <p
          className="result-text"
          onClick={(e) => handleClick(e)}
        >
          {place.name}
        </p>
        <hr />
      </div>
    );
  });

  return <>{results}</>;
}
