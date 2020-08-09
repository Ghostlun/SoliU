import React from 'react';
import '../asset/css/style.css';
import Auburn_logo from '../asset/image/auburn_logo.png';
const Footer = () => {
  return (
    <div
      className='main-footer '
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src={Auburn_logo} alt='Auburn_logo' style={{ width: '150px' }} />
    </div>
  );
};

export default Footer;
