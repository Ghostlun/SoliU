import React from 'react';
import Professor from '../../asset/image/Dr_Chon.png';

const About_Professor = () => {
  return (
    <div className='row'>
      <div>
        <img
          src={Professor}
          alt='Professor'
          style={{
            width: '250px'
          }}
        />
      </div>
      <div className='column ml-5'>
        <h3>Myoung-Gi Chon, Ph.D.</h3>
        <h4>Assistant Professor</h4>
        <h4>School of Communication and Journalism at Auburn University</h4>
        <br></br>
    <a href="https://cla.auburn.edu/cmjn/public-relations/faculty/myoung-gi-chon/">More information</a>

      </div>
    </div>
  );
};

export default About_Professor;
