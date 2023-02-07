import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailCountry from '../components/DetailCountry/DetailCountry'
import Header from '../components/Header'

function Detail(props) {
  const {topLevelDomain} = useParams()

  const listCountry = useSelector(state => state.countryReducer.listCountries)
  let name = topLevelDomain
  let detailContent = ''
  if(listCountry){
    const country = listCountry.filter(country=> (
      country.numericCode.toString() === topLevelDomain
    ))[0]
    name = country.name
    detailContent = (<DetailCountry country={country}/>)
  }
  return (
    <div>
      <Header name={name} canBack={true} />
      {listCountry && (detailContent)}
    </div>
  )
}

export default Detail
