import React from 'react';
import Header from '../components/Header';
import ListCountries from '../components/ListContry/ListCountries';
import worldSvg from '../assets/world.svg';

const Home = () => (
  <div className="max-width">
    <Header name="Home" canBack={false} />
    <Continent />
    <ListCountries />
  </div>
);

export default Home;
