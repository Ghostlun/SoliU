import React from 'react';
import Pic from '../../asset/image/face_no.jpg';
import { Link } from 'react-router-dom';

const About_Us_Byeongjun = () => {
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
        <h3>Byeongjun Ha</h3>
        <h6> bzh0079@auburn.edu </h6>
        <h6> 334) 332-5361</h6>
      </div>
    </div>
  );
};

export default About_Us_Byeongjun;
