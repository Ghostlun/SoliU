import React from 'react';
import Logo from '../../asset/image/logo.png';
import '../../asset/css/style.css';
const First_Main = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={Logo}
          alt='logo'
          style={{
            width: '300px'
          }}
        />
      </div>
      <div
        className='Margin_Bottom_FOR_MAIN'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#21385e',
          fontWeight: 'bold'
        }}
      >
        MENTAL HEALTHCARE APP
      </div>
      <div>
        Currently, we have focused mental health issues in the time of COVID-19
        and developed an app (How Are U?) to help students who have anxiety or
        depression by decreasing stigma and increase accessibility to approach
        health resources.
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={Logo}
          alt='logo'
          style={{
            width: '300px'
          }}
        />
      </div>
    </div>
  );
};

export default First_Main;
