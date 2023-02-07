import React from 'react'
import Country from '../ListContry/Country'
import './DetailCountry.css'

function DetailCountry(props) {
  const {country} = props

  const listDetail = []
  Object.keys(country).map(key=>{
    if((typeof country[key] === 'string'
      || typeof country[key] === 'number')
      && (key != "alpha2Code" 
        && key != "alpha3Code"
        && key != "flag"
      )){
      return (
        listDetail.push({key, value: country[key]})
      )
    }
  })
  return (
    <div className='max-width column detail'>
      <Country country={country} detailed={true}/>
      <div className="sub-detail">COUNTRY DETAILS: </div>
      <ul className="list-details">
        {listDetail.map(detail => 
          (<li key={detail.key} className='row details'>
            <span className='values'>{detail.value}</span>
            <span className='keys'>{detail.key}</span>
          </li>)
        )}
      </ul>
    </div>
  )
}

export default DetailCountry