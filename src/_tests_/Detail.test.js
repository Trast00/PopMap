import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore.js';
import Detail from '../pages/Detail.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={configureStore}>
          <MemoryRouter initialEntries={['/test1']}>
            <Detail />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})