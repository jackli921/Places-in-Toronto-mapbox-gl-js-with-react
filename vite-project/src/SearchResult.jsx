import React from 'react'


export default function SearchResult(props){
    
    const {filteredData} = props

    const results = filteredData.map((place,index) => {
        return (
            <div key={index}>
                <p className="result-text">{place.name}</p>
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