import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';

export const testListCountry = [
  {
    name: 'test country 1',
    population: 1000,
    flags: {
      svg: 'test image url',
    },
    numericCode: 'test1',
  },
  {
    name: 'test country 2',
    population: 2000,
    flags: {
      svg: 'test image url',
    },
    numericCode: 'test2',
  },
];

export const fetchDataMock = () => {
  fetchMock.getOnce('https://restcountries.com/v2/all', {
    headers: { 'content-type': 'application/json' },
    body: testListCountry,
  });
};
