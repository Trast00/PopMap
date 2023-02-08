import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailCountry from '../components/DetailCountry/DetailCountry';
import Header from '../components/Header';
import NotFound from './NotFound';

function Detail() {
  const { topLevelDomain } = useParams();

  const listCountry = useSelector((state) => state.countryReducer.listCountries);
  let name = topLevelDomain;
  let detailContent = '';
  if (listCountry) {
    const country = listCountry.filter((country) => (
      country.numericCode.toString() === topLevelDomain
    ))[0];
    if (country) {
      console.log('country is not null')
      name = country.name;
      detailContent = (<DetailCountry country={country} />);
    } else {
      // 404
      name = 'Error';
      detailContent = (<NotFound />);
    }
  }
  return (
    <div>
      <Header name={name} canBack />
      {listCountry && (detailContent)}
    </div>
  );
}

export default Detail;
