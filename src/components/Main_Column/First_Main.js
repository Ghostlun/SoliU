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
          alignItems: 'center',
        }}
      >
        <img
          src={Logo}
          alt='logo'
          style={{
            width: '300px',
            marginTop: '5em',
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
          fontWeight: 'bold',
        }}
      >
        MENTAL HEALTHCARE APP
      </div>
      <div>
        <img src={Split} alt='split' style={{ width: '300px' }} />
      </div>
      <div>
        SoliU is a research group consisting of students from various fields
        within Auburn University. With the guidance of Dr. Chon, Assistant
        Professor in the School of Communication and Journalism, the members of
        this research group aim to identify social problems and find solutions
        through the knowledge of social and computer science.
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: 10,
          padding: 40,
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
