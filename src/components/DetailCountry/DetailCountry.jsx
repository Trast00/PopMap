import React from 'react';
import './DetailCountry.css';
import PropTypes from 'prop-types';
import Country from '../ListContry/Country';

function DetailCountry(props) {
  const { country } = props;

  const listDetail = [];
  Object.keys(country).map((key) => {
    if ((typeof country[key] === 'string'
      || typeof country[key] === 'number')
      && (key !== 'alpha2Code'
        && key !== 'alpha3Code'
        && key !== 'flag'
      )) {
      return (
        listDetail.push({ key, value: country[key] })
      );
    }
    return '';
  });
  return (
    <div className="max-width column detail">
      <Country country={country} detailed />
      <div className="sub-detail">COUNTRY DETAILS: </div>
      <ul className="list-details">
        {listDetail.map((detail) => (
          <li key={detail.key} className="row details">
            <span className="values">{detail.value}</span>
            <span className="keys">{detail.key}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

DetailCountry.defaultProps = {
  country: {},
};

DetailCountry.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.number,
    flags: PropTypes.shape({
      svg: PropTypes.string,
    }),
  }),
};

export default DetailCountry;
