import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { country, detailed } = props;
  const { name, population, flags } = country;
  return (
    <div className={!detailed? "flex-center column country"
    :"flex-center column country detail-country"}>
      <img src={flags.svg} alt={`${name}Country Images`} />
      <div className="column detail-wrapper">
        <h4>{name}</h4>
        <p>
          {detailed && 'Citizens: '}
          {' '}
          {population}
        </p>
      </div>
    </div>
  );
};

Country.defaultProps = {
  country: {},
  detailed: false,
};

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.number,
    flags: PropTypes.shape({
      svg: PropTypes.string,
    }),
  }),
  detailed: PropTypes.bool,
};

export default Country;
