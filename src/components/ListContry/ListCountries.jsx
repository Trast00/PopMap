import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Country from './Country';
import './ListCountries.css';

function ListCountries() {
  const listCountry = useSelector((state) => state.countryReducer.listCountries);

  return (
    <div className="max-width">
      <ul className="max-width no-styling row list-country">
        {listCountry
          ? listCountry.map((country) => (
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
