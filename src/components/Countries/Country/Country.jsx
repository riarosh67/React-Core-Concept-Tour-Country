import { useState } from 'react';
import './Country.css'
/* import CountryDetails from '../CountryDetails/CountryDetails'; */
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,capital,population, area,cca3} = country;

    const[visited,setVisited]=useState(false);
    const handleVisited =()=>{
        setVisited(!visited) // text
    }



    return (
        <div className= {`country ${visited && 'visited'}`} >
            <h2> {name?.common} </h2>
            <h5>Capital:- {capital}</h5>
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <img src= {flags?.png} alt="" />
            <p>Code:{cca3} </p>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going To'}</button> {/* btn text change 'visited' 'going' */}
            {visited ? 'i am visited this country': 'Going to Country'}
            <hr />
            {/* <CountryDetails>
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            </CountryDetails> */}
        </div>
    );
};

export default Country;