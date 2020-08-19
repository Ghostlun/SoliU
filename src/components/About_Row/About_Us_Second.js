import React from 'react';
import Pic from '../../asset/image/jungpyo.png';
const About_Us_Second = () => {
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
            width: '250px'
          }}
        />
      </div>
      <div>
        <h3>Jungpyo Hong</h3>
        <h4>Web/App Developer</h4>
        <h6>Auburn University 23’ </h6>
        <h6>Software Engineering major</h6>

        <h6> jzh0169@auburn.edu </h6>
        <h6> 334) 414-1243</h6>
      </div>
    </div>
  );
};

export default About_Us_Second;
