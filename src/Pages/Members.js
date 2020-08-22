import React from 'react';
import First from '../components/About_Row/About_Professor';
import Second from '../components/About_Row/About_Guide';
import Third from '../components/About_Row/About_Us';

const About = () => {
  return (
    <div>
      <div className='mt-5'>
        <First />
      </div>
      <div>
        <Second />
      </div>
      <div>
        <Third />
      </div>
    </div>
  );
};

export default About;
