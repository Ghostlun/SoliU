import React from 'react';
import Professor from '../../asset/image/Dr_Chon.png';

const About_Professor = () => {
  return (
    <div className='row'>
      <div>
        <img
          src={Professor}
          alt='Professor'
          style={{
            width: '250px'
          }}
        />
      </div>
      <div className='column ml-5'>
        <h3>Myoung-Gi Chon</h3>
        <h3>(Group Leader)</h3>
        <h3>more info here</h3>
      </div>
    </div>
  );
};

export default About_Professor;
