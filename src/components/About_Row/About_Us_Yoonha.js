import React from 'react';
import Pic from '../../asset/image/yoonha_Kim.png';
const About_Us_Yoonha = () => {
  return (
    <div>
      <div>
        <img
          src={Pic}
          alt='Pic'
          style={{
            width: '250px'
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

export default About_Us_Yoonha;
