import React from 'react';
import GitHub from '../../asset/image/github.png';
import LinkIn from '../../asset/image/linkedin.png';
const Intro_jungpyo = () => {
  return (
    <div>
      <h4>Hello this is Jungpyo Hong Nice to meet you</h4>

      <h5>
        If you like more information about me, please click to LinkedIn and
        Github
      </h5>
      <div>
        <a href='https://www.linkedin.com/in/jungpyo-hong-2987891a1/?locale=en_US'>
          <img src={LinkIn} alt='LinkIn' style={{ width: '100px' }} />
        </a>

        <a href='https://github.com/jphong1111'>
          <img src={GitHub} alt='github' style={{ width: '100px' }} />
        </a>
      </div>
    </div>
  );
};

export default Intro_jungpyo;
