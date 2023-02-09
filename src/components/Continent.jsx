import React from 'react'
import { useSelector } from 'react-redux'
import Country from './ListContry/Country'

const Continent = () => {
  const listContinents = useSelector(state => state.countryReducer.listContinents)
  const indexCurrentContinents = useSelector(state => state.countryReducer.indexCurrentContinents)
  return (
    <div className='max-width'>
      <Country country={listContinents[indexCurrentContinents]} detailed={true} />
      
    </div>
  )
}

export default Continent
