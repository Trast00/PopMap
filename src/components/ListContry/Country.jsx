import React from 'react'

const Country = (props) => {
  const {country} = props
  const {name, population, flags} = country
  return (
    <div className='flex-center column country'>
      <img src={flags.svg} alt={name + `Country Images`} />
      <div className="column detail">
        <h4>{name}</h4>
        <p>{population}</p>
      </div>
    </div>
  )
}

export default Country
