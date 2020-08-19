import React from 'react';
import FirstProfile from './About_Us_First';
import SecondProfile from './About_Us_Second';
import ThridProfile from './About_Us_Third';

const About_Us = () => {
  return (
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
  );
};

export default About_Us;
