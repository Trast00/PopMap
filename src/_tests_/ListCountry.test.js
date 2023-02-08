import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { testListCountry } from './setupTests.js';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore.js';
import ListCountries from '../components/ListContry/ListCountries.jsx';

describe('test render', () => {
  test('List Country should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={configureStore}>
          <ListCountries country={testListCountry[0]} />
        </Provider>
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})