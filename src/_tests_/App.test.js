import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import configureStore from '../redux/configureStore'
import { fetchDataMock, testListCountry } from './setupTests.js';
import { fetchData } from '../redux/country/countryReducer';
import Home from '../pages/Home';
import { render, screen } from '@testing-library/react';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const store = configureStore;
fetchDataMock()

describe('test render', () => {
  test('App should match snapshoot', () => {
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

  test('Test App render correctly after a mocked request', async () => { 
    await act(async () => {
      store.dispatch(fetchData);
    });

    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/test2']}>
            <App />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    );

    await act(async () => {
      store.dispatch(fetchData);
    });

    const listCountry = store.getState().countryReducer.listCountries
    expect(listCountry).toMatchObject(testListCountry)

    expect(tree).toMatchSnapshot();
  })
});

jest.mock('../pages/Home')
jest.mock('../pages/Detail')
jest.mock('../pages/NotFound')

describe('test routes render', () => {
  test('should render home', () => { 
    Home.mockImplementation(()=> (<h1>Home page rendered</h1>))
    render(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    )

    const pageTitle = screen.getByRole('heading')
    expect(pageTitle.textContent).toBe('Home page rendered')
  })

  test('should render detail', () => { 
    Detail.mockImplementation(()=> (<h1>Detail page rendered</h1>))
    render(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/test1']}>
            <App />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    )

    const pageTitle = screen.getByRole('heading')
    expect(pageTitle.textContent).toBe('Detail page rendered')
  })
  test('should render detail', () => {
    Detail.mockImplementation(()=> (<NotFound />))
    NotFound.mockImplementation(()=>(<h1>Not found 404 rendred</h1>))
    render(
      <React.StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/test1020202']}>
            <App />
          </MemoryRouter>
        </Provider>
      </React.StrictMode>,
    )

    const pageTitle = screen.getByRole('heading')
    expect(pageTitle.textContent).toBe('Not found 404 rendred')
  })
})