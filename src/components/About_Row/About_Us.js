import React from 'react';
import FirstProfile from './About_Us_Yoonha';
import SecondProfile from './About_Us_Jungpyo';
import ThridProfile from './About_Us_Minjoo';
import FourthProfile from './About_Us_Dahae';
import FifthhProfile from './About_Us_Yeonseo';
import SixthProfile from './About_Us_Joonha';
const About_Us = () => {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 20,
          padding: 30
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
          padding: 30
        }}
      >
        <div>
          <FourthProfile />
        </div>
        <div>
          <FifthhProfile />
        </div>
        <div>
          <SixthProfile />
        </div>
      </div>
    </div>
  );
};

export default About_Us;
