import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listContinents } from '../../redux/country/countryReducer';
import Country from './Country';
import './ListCountries.css';

function ListCountries() {
  const indexCurrentContinents = useSelector((state) => state.countryReducer.indexCurrentContinents)
  const listCountry = useSelector((state) => state.countryReducer.listCountries);

  let listFiltered = []
  if(listCountry){
    if(listContinents[indexCurrentContinents].name === "World"){
      listFiltered = [...listCountry]
    }else if (listContinents[indexCurrentContinents].name === "Rest of World"){
      listFiltered = listCountry.filter(country=> 
        (country.region !== "Africa"
        && country.region !== "Americas"
        && country.region !== "Asia"
        && country.region !== "Europe"
        && country.region !== "Oceania"
        ))
    }else {
      listFiltered = listCountry.filter(country=> 
        (listContinents[indexCurrentContinents].name === country.region))
    }
  }
  return (
    <div className="max-width">
      <ul className="max-width no-styling row list-country">
        {listCountry
          ? listFiltered.map((country) => (
            <li key={country.numericCode}>
              <Link to={`/${country.numericCode}`} className="no-style">
                <Country country={country} detailed={false}/>
              </Link>
            </li>
          ))
          : <p className="max-width flex-center">Empty List</p>}
      </ul>
    </div>
  );
}

export default ListCountries;
