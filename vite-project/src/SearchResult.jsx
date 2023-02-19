import React, {useEffect}from 'react'


export default function SearchResult(props){
    
    const { filteredData, setUserInput, userInput, setIsSidebarVisible, updateSearch} =
      props;

    function handleClick(e) {
        setUserInput(e.target.innerText);
        setIsSidebarVisible(false)
    }

    
    
    const results = filteredData.map((place,index) => {
        return (
            <div 
                className='result-text-card'
                key={index}>
                <p 
                    className="result-text"
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