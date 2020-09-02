import React from 'react';
import Pic from '../../asset/image/yeonseo_Ju.png';
import {Link} from 'react-router-dom';
const About_Us_Yeonseo = () => {
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
        <h3>Yeonseo Ju</h3>
        <h4>Fullstack Developer</h4>
        <h6>Auburn University '21 </h6>
        <h6>Computer Science major</h6>

        <h6> yzj0044@auburn.edu </h6>
        <h6> 334)728-5790</h6>
        <Link to ='research/others/yj'>More Info</Link>
      </div>
    </div>
  );
};

export default About_Us_Yeonseo;
