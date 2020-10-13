import React from 'react';
import Pic from '../../asset/image/joonha_Kim.png';
import { Link } from 'react-router-dom';

const About_Us_Joonha = () => {
  return (
    <div>
      <div>
        <img
          src={Pic}
          alt='Pic'
          style={{
            width: '250px',
          }}
        />
      </div>
      <div>
        <h3>Joonha Kim</h3>
        <h4>Developer</h4>
        <h6>Auburn University '21 </h6>
        <h6>Software Engineering major</h6>

        <h6> jzk0121@auburn.edu </h6>
        <h6> 334) 235-5728</h6>
        <Link to='research/others/joonha'>More Info</Link>
      </div>
    </div>
  );
};

export default About_Us_Joonha;
