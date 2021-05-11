import React from 'react';
import GuideLine from '../../asset/image/guideline.png';
const About_Guide = () => {
  return (
    <div>
      <div
        className='Margin_Bottom_FOR_MAIN'
        style={{
          display: 'flex',
          color: '#21385e'
        }}
      >
        ALUMNI
      </div>
      <div>
        <img
          src={GuideLine}
          alt='GuidLine'
          style={{
            width: '300px'
          }}
        />
      </div>

      
    </div>

    
  );
};

export default About_Guide;