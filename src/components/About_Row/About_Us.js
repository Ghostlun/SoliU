import React from 'react';
import First_Profile from './About_Us_First';
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
        <First_Profile />
      </div>
      <div>
        <First_Profile />
      </div>
      <div>
        <First_Profile />
      </div>
    </div>
  );
};

export default About_Us;
