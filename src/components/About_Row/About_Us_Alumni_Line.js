import React from 'react';
import FirstProfile from './About_Us_Yoonha';
import SecondProfile from './About_Us_Jungpyo';
import ThridProfile from './About_Us_Dahye';
import FourthProfile from './About_Us_Minjoo';

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
        <div>
          <ThridProfile />
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 20,
          padding: 30,
        }}
      >
        <div>
          <FourthProfile />
        </div>
        {/* <div>
          <SixthProfile />
        </div>
        <div>
          <SeventhProfile />
        </div> */}
      </div>

      
    </div>
  );
};

export default About_Us;
