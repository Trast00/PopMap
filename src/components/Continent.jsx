import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { listContinents, updateCurrentContinentIndex } from '../redux/country/countryReducer';
import Country from './ListContry/Country';

const Continent = () => {
  const dispatch = useDispatch();
  const indexCurrentContinents = useSelector(
    (state) => state.countryReducer.indexCurrentContinents,
  );
  const handleClick = (newIndex) => {
    if (newIndex >= 0 && newIndex < listContinents.length) {
      dispatch(updateCurrentContinentIndex(newIndex));
    }
  };
  return (
    <div className="max-width flex-center continent">
      {(indexCurrentContinents > 0)
        && (
        <FaArrowCircleLeft
          className="icons filter-back"
          onClick={() => { handleClick(indexCurrentContinents - 1); }}
        />
        )}

      <Country country={listContinents[indexCurrentContinents]} detailed />
      {(indexCurrentContinents < listContinents.length - 1)
        && (
        <FaArrowCircleRight
          className="icons filter-next"
          onClick={() => { handleClick(indexCurrentContinents + 1); }}
        />
        )}
    </div>
  );
};

export default Continent;
