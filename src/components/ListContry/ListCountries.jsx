import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../../redux/country/countryReducer'
import Country from './Country'
import "./ListCountries.css"

function ListCountries() {
  const listCountry = useSelector(state => state.countryReducer.listCountries)

  return (
    <div className='max-width'>
      <ul className='max-width no-styling row list-country'>
        {listCountry?
        listCountry.map(country => {
          return (
            <li key={country.numericCode}>
              <Link to={'/'+country.numericCode} className="no-style">
                <Country country={country} />
              </Link>
            </li>)
        })
        : <p className='max-width flex-center'>Empty List</p>}
      </ul>
    </div>
  )
}

export default ListCountries
