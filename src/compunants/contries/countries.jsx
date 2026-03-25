import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries =(country)=>{
        console.log('handle Visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlag =(flag)=>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
        // console.log('flag need to be added',flag)
    }
    // const [visitedCountries,setVisitedCountries]= useState ([]);
// const handleVisitedCountries =() =>{
//     console.log('handle visited country cliccked');
// }

    const countriesData = use(countriesPromise)
    const countries= countriesData.countries;
    
    return (
        <div >
           <h1>in the Countries: {countries.length}</h1>
           <h3>Total Country Visited: {visitedCountries.length}</h3>
           <h3>Total Visited Flags: {visitedFlags.length}</h3>
           <ol>
            {
                visitedCountries.map(country =><li>{country.name.common}</li>)
            }

           </ol>
           <div className='visited-flag-container'>
            {
                visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
            }
           </div>

          <div className='countries'>
             {
            countries.map(country => <Country 
                key={country.cca3.cca3}

                country={country}
                handleVisitedCountries ={handleVisitedCountries}
                handleVisitedFlag={handleVisitedFlag}
                ></Country>)
           }
          </div>
        </div>
    );
};

export default Countries;