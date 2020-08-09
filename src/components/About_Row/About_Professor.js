import React from 'react';
import Professor from '../../asset/image/Dr_Chon.jpg';

const About_Professor = () => {
  return (
    <div>
      <div className='left'>
        <img
          src={Professor}
          alt='Professor'
          style={{
            width: '250px'
          }}
        />
      </div>
    </div>
  );
};

export default About_Professor;
