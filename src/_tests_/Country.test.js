import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { testListCountry } from './setupTests.js';
import Country from '../components/ListContry/Country.jsx';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
          <Country country={testListCountry[0]} />
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})