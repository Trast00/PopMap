import React from 'react';
import PropTypes from 'prop-types';
import { IoChevronBackOutline } from 'react-icons/io5';
import { BsFillMicFill } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Header(props) {
  const { name, canBack } = props;
  return (
    <header className="flex-center header">
      {canBack ? (
        <Link to="/">
          <IoChevronBackOutline className="icons" />
        </Link>
      ) : <div />}
      <p>{name}</p>
      <div>
        <BsFillMicFill className="icons" />
        <IoIosSettings className="icons" />
      </div>
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
