import React from 'react';
import Pic from '../../asset/image/dahae_Kim.png';
import { Link } from 'react-router-dom';

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
        <Link to='research/others/dahye'>More Info</Link>
      </div>
    </div>
  );
};

export default About_Us_Dahye;
