import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/country/countryReducer'
import Country from './Country'
import "./ListCountries.css"

function ListCountries() {
  const listCountry = useSelector(state => state.countryReducer.listCountries)

  const dispatch = useDispatch()
  useEffect(()=> {
    if(!listCountry){
      dispatch(fetchData())
    }
  }, [dispatch])

  console.log(listCountry)

  return (
    <div className='max-width'>
      <ul className='max-width no-styling row list-country'>
        {listCountry?
        listCountry.map(country => {
          return <li key={country.numericCode}><Country country={country} /></li>
        })
        : <p>Empty List</p>}
      </ul>
    </div>
  )
}

export default ListCountries
