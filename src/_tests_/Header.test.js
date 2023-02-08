import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import Header from '../components/Header.jsx';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Header name="Home" canBack={false} />
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})