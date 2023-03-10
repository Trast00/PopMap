import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import Header from '../components/Header';

describe('test render', () => {
  test('Header should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Header name="Home" canBack={false} />
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
