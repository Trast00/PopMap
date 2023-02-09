import React from 'react';
import Header from '../components/Header';
import ListCountries from '../components/ListContry/ListCountries';
import Continent from '../components/Continent';

const Home = () => (
  <div className="max-width">
    <Header name="Home" canBack={false} />
    <Continent />
    <ListCountries />
  </div>
);

export default Home;
