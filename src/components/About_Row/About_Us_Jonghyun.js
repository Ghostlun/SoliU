import React from 'react';
import Pic from '../../asset/image/face_no.jpg';
import { Link } from 'react-router-dom';

const About_Us_Jonghyun = () => {
  return (
    <div>
      <div>
        <img
          src={Pic}
          alt='Pic'
          style={{
            width: '250px',
            height: '250px'
          }}
        />
      </div>
      <div>
        <h3>Jounghyun Jung</h3>
        <h6> hyun831@gmail.com </h6>
        <h6> 334) 439 - 9442</h6>
      </div>
    </div>
  );
};

export default About_Us_Jonghyun;
