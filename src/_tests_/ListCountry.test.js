import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { testListCountry } from './setupTests';
import configureStore from '../redux/configureStore';
import ListCountries from '../components/ListContry/ListCountries';

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
});
