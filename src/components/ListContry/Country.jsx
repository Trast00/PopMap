import React from 'react'

const Country = (props) => {
  const {country, detailed} = props
  const {name, population, flags} = country
  return (
    <div className='flex-center column country'>
      <img src={flags.svg} alt={name + `Country Images`} />
      <div className="column detail-wrapper">
        <h4>{name}</h4>
        <p>{detailed && 'Citizens: '} {population}</p>
      </div>
    </div>
  )
}

export default Country
