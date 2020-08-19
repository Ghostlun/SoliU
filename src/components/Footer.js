import React from 'react';
import '../asset/css/style.css';
import Auburn_logo from '../asset/image/auburn_logo.png';
import Auburn_logo2 from '../asset/image/auburn_logo_2.png';
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
      <img
        src={Auburn_logo2}
        alt='Auburn_logo2'
        style={{ width: '80px', marginLeft: '3em' }}
      />
    </div>
  );
};

export default Footer;
