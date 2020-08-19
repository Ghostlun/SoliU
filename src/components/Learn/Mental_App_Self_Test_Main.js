import React from 'react';
import SelfPic from '../../asset/image/selftest.png';
const Mental_App_Self_Test_Main = () => {
  return (
    <div>
      <center>
        <h1>SelfTest</h1>
        <h5>
          This is a questionaire test for diagnosing, monitoring, and measuring
          the severity of depression.
        </h5>
        <img
          src={SelfPic}
          alt='SelfPic'
          style={{
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      </center>
    </div>
  );
};

export default Mental_App_Self_Test_Main;
