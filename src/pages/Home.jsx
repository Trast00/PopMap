import React from 'react'
import Header from '../components/Header'
import ListCountries from '../components/ListContry/ListCountries'

const Home = () => {
  return (
    <div className='max-width'>
      <Header name="Home" canBack={false} />
      <ListCountries />
    </div>
  )
}

export default Home