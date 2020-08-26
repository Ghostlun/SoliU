import React from 'react';
import Pic from '../../asset/image/dahae_Kim.png';
const About_Us_Dahye = () => {
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
        <h3>Dahye Kim</h3>
        <h4>Developer</h4>
        <h6>Auburn University 21’ </h6>
        <h6>Computer Science major</h6>

        <h6> dzk0059@auburn.edu </h6>
        <h6> 580) 458-2199</h6>
      </div>
    </div>
  );
};

export default About_Us_Dahye;
