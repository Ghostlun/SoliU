import React from 'react';

import FirstProfile from './About_Us_Joonha';
import SecondProfile from './About_Us_Haegang';
import ThirdProfile from './About_Us_Junsang';
import FourthProfile from './About_Us_Jonghyun';
import FifthProfile from './About_Us_Jenny';
import SixthProfile from './About_Us_Byeongjun';
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
          <ThirdProfile />
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
        <div>
          <FifthProfile />
        </div>
        <div>
          <SixthProfile />
        </div> 
      </div>


    </div>

  );
};

export default About_Us;
