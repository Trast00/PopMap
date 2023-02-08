import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const middleware = [thunk]
export const smockStore = configureStore(middleware)

export const fetchDataMock = () => {
  fetchMock.getOnce('popmap/country/GET_DATA', {
    headers: { 'content-type': 'application/json' },
    body: [
      {
        name: "test country 1",
        population: 1000,
        flags: {
          svg: "test image url",
        },
      },
      {
        name: "test country 2",
        population: 2000,
        flags: {
          svg: "test image url",
        },
      }
    ],
  })
}