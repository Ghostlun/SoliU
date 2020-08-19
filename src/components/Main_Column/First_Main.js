import React from 'react';
import Logo from '../../asset/image/soliU_main_2.png';
import '../../asset/css/style.css';
import Split from '../../asset/image/guideline.png';
import Phone1 from '../../asset/image/phone_1.png';
import Phone2 from '../../asset/image/phone_2.png';
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
            width: '300px',
            marginTop: '5em'
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
        <img src={Split} alt='split' style={{ width: '300px' }} />
      </div>
      <div>
        Currently, we have focused mental health issues in the time of COVID-19
        and developed an app (How Are U?) to help students who have anxiety or
        depression by decreasing stigma and increase accessibility to approach
        health resources.
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: 10,
          padding: 40
        }}
      >
        <div>
          <img src={Phone1} alt='Phone1' style={{ width: '100px' }} />
        </div>
        <div>
          <img src={Phone2} alt='Phone2' style={{ width: '100px' }} />
        </div>
      </div>
    </div>
  );
};

export default First_Main;
