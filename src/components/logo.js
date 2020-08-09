import React from 'react';
import logo from '../asset/image/logo.png';

const Logo = () => {
  return (
    <div className='logo_style'>
      <a href='/'>
        <img src={logo} alt='logo' style={{ width: '150px' }} />
      </a>
    </div>
  );
};

export default Logo;
