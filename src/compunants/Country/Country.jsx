import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.flags.flags.png)
    
// console.log(handleVisitedCountries);
    const handleVisited = () =>{
        // toggle system
        /**
         * 1 st system*/ 
        // setVisited(visited ? false : true);
        /**
         * 2nd system
         * if(visited){setVisited(false)}
         else{setVisited(true)}* */ 
         setVisited(!visited)
         handleVisitedCountries(country);

    }
    return (
        <div className={`country ${visited && `country-visited`}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Areas: {country.area.area} {country.area.area>300000 ?  "Big Country" : "Small Country"}</p>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
            <button onClick={() =>{handleVisitedFlag(country?.flags?.flags?.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;