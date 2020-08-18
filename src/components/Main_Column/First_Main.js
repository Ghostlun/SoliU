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
        <div> nicd</div>
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
        We are a research group daifaoisdfjf oisadfjf io oidffd afjofadijd
        dsoaifjfaoidsfjfaiodjfi sdoifjoiadfjioadsfjaiod sdo djfaosi sdoifjoai
        dsofijaoi dfjaoi dsifjaoidfj sdfijao idfffasf fdfdf
        rjafdasifojfadosifjfadiofjdisaofjf disfjaodsffjodf
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
