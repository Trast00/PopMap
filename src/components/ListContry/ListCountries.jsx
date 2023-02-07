import React from 'react'
import Country from './Country'
import "./ListCountries.css"

function ListCountries() {
  return (
    <div className='max-width'>
      <ul className='max-width no-styling row list-country'>
        <Country />
        <Country />
        <Country />
      </ul>
    </div>
  )
}

export default ListCountries
