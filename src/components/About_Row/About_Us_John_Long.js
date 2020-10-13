import React from 'react';
import Pic from '../../asset/image/John_Long.png';

const About_Us_Yoonha = () => {
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
        <h3>John Long</h3>
        <h4>Communication and Marketing Coordinator</h4>
        <h6>Auburn University '21 </h6>
        <h6> Public Relations major</h6>

        <h6> jdl0047@auburn.edu </h6>
      </div>
    </div>
  );
};

export default About_Us_Yoonha;
