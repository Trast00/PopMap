import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Continent from '../components/Continent';
import configureStore from '../redux/configureStore';

describe('test render', () => {
  test('Conutry should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={configureStore}>
          <Continent />
        </Provider>
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
