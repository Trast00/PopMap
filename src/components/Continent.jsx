import React from 'react'
import { useSelector } from 'react-redux'
import { listContinents } from '../redux/country/countryReducer'
import Country from './ListContry/Country'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


const Continent = () => {
  const indexCurrentContinents = useSelector(state => state.countryReducer.indexCurrentContinents)
  return (
    <div className='max-width flex-center continent'>
      <FaArrowCircleLeft className='icons filter-back' />
      {(indexCurrentContinents!==1) 
      && <Country country={listContinents[0]} detailed={true} />
      }  
      <FaArrowCircleRight className='icons filter-next' />
    </div>
  )
}

export default Continent
