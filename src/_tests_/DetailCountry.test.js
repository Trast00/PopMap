import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import { testListCountry } from './setupTests';
import DetailCountry from '../components/DetailCountry/DetailCountry';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <DetailCountry country={testListCountry[0]} />
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
