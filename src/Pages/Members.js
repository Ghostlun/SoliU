import React from 'react';
import Professor from '../components/About_Row/About_Professor';
import Members from '../components/About_Row/About_Us_Members';
import MembersPic from '../components/About_Row/About_Us_Member_Line';
import Alumni from '../components/About_Row/About_Us_Alumni';
import AlumniPic from '../components/About_Row/About_Us_Alumni_Line';

const About = () => {
  return (
    <div>
      <div className='mt-5'>
        <Professor/>
      </div>
      <div>
        <Members/>
      </div>
      <div>
        <MembersPic/>
      </div>

      <div>
        <Alumni/>
      </div>
      <div>
        <AlumniPic/>
      </div>




    </div>
  );
};

export default About;
