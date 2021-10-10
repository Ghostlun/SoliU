import React from 'react';
import Pic from '../../asset/image/face_no.jpg';
import { Link } from 'react-router-dom';

const About_Us_Junsang = () => {
  return (
    <div>
      <div>
        <img
          src={Pic}
          alt='Pic'
          style={{
            width: '250px',
            height: 'auto'
          }}
        />
      </div>
      <div>
        <h3>Junsang Lee</h3>
        <h4>Intern</h4>
        <h6> junsang2003lee@gmail.com </h6>
      </div>
    </div>
  );
};

export default About_Us_Junsang;
