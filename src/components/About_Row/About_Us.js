import React from 'react';
import FirstProfile from './About_Us_First';
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
        <FirstProfile />
      </div>
      <div>
        <FirstProfile />
      </div>
    </div>
  );
};

export default About_Us;
