import React from 'react';
import Pic from '../../asset/image/minjoo_Jo.png';
const About_Us_First = () => {
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
        <h3>Minju Jo</h3>
        <h4>Web/App Designer</h4>
        <h6>Auburn University 21’ </h6>
        <h6> Environmental design major Psychology major</h6>

        <h6> mzj0038@auburn.edu </h6>
        <h6> 334) 306-0891</h6>
      </div>
    </div>
  );
};

export default About_Us_First;
