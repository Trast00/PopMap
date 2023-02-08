import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import React from 'react';
import configureStore from '../redux/configureStore';
import App from '../App';

const store = configureStore;
describe('test render', () => {
  test('List Rocket should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
