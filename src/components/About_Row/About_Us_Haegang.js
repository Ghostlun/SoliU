import React from 'react';
import Pic from '../../asset/image/haegang_Yang.jpg';
import { Link } from 'react-router-dom';

const About_Us_Haegang = () => {
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
        <h3>Haegang Yang</h3>
        <h4>Developer</h4>
        <h6>Auburn University '21 </h6>


      </div>
    </div>
  );
};

export default About_Us_Haegang;
