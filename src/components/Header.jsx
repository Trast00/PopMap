import React from 'react';
import PropTypes from 'prop-types';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Header(props) {
  const { name, canBack } = props;
  return (
    <header className="flex-center">
      {canBack && (
        <Link to="/">
          <IoChevronBackOutline className="iconBack" />
        </Link>
      )}
      <p>{name}</p>
      <div />
    </header>
  );
}

Header.defaultProps = {
  name: 'Home',
  canBack: false,
};

Header.propTypes = {
  name: PropTypes.string,
  canBack: PropTypes.bool,
};

export default Header;
