import React from 'react'


export default function SearchResult(props){
    
    const { filteredData, setUserInput, setIsSidebarVisible} =
      props;

    function handleClick(e) {
        setUserInput(e.target.innerText);
        setIsSidebarVisible(false)
    }
    
    const results = filteredData.map((place,index) => {
        return (
            <div key={index}>
                <p className="result-text"
                onClick={(e)=>{handleClick(e)}}>{place.name}
                    </p>
                <hr />
            </div>
        )
    })

    return (
        <>
        {results}
        </>
    )
}