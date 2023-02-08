import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';

export const testListCountry = [
  {
    name: "test country 1",
    population: 1000,
    flags: {
      svg: "test image url",
    },
    numericCode: "test1"
  },
  {
    name: "test country 2",
    population: 2000,
    flags: {
      svg: "test image url",
    },
    numericCode: "test2"
  }
]

const middleware = [thunk]
export const smockStore = createMockStore(middleware)

export const fetchDataMock = () => {
  fetchMock.getOnce('https://restcountries.com/v2/all', {
    headers: { 'content-type': 'application/json' },
    body: testListCountry,
  })
}