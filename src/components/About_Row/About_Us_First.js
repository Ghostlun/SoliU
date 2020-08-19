import React from 'react';
import Pic from '../../asset/image/yoonkim.png';
const About_Us_First = () => {
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
          src={Pic}
          alt='Pic'
          style={{
            width: '300px'
          }}
        />
      </div>
      <div>
        <h3>Yoonha Kim</h3>
        <h4>Web/App Developer</h4>
        <h6>Auburn University 23’ </h6>
        <h6> Computer Science major</h6>

        <h6> yzk0062@auburn.edu </h6>
        <h6> 334) 306-0847</h6>
      </div>
    </div>
  );
};

export default About_Us_First;
