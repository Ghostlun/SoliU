import React from 'react';

import FirstProfile from './About_Us_Joonha';
import SecondProfile from './About_Us_John_Long';
const About_Us = () => {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 20,
          padding: 30,
        }}
      >
        <div>
          <FirstProfile />
        </div>
        <div>
          <SecondProfile />
        </div>
        {/* <div>
          <ThridProfile />
        </div> */}
      </div>

      

      
    </div>
  );
};

export default About_Us;
