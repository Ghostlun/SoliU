import React from 'react';
import SelfPic from '../../asset/image/selftest.png';
import '../../asset/css/style.css';
const Mental_App_Self_Test_Main = () => {
  return (
    <center>
      <div className='container_for_Mental_Main'>
        <h1>Self-Test</h1>
        <h5>
          This is a questionaire test for diagnosing, monitoring, and measuring
          the severity of depression.
        </h5>
        <img
          src={SelfPic}
          alt='SelfPic'
          style={{
            width: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
        <div>
          <button className='btn_self_test'>
            <text style={{ color: 'white' }}>TAKE TEST</text>
          </button>
        </div>
      </div>
    </center>
  );
};

export default Mental_App_Self_Test_Main;
