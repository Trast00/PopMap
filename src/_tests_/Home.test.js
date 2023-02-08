import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { testListCountry } from './setupTests.js';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore.js';
import ListCountries from '../components/ListContry/ListCountries.jsx';
import Home from '../pages/Home.jsx';

describe('test render', () => {
  test('Home should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={configureStore}>
          <Home />
        </Provider>
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})