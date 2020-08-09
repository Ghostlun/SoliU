import React from 'react';
import Pic from '../asset/image/main_img.png';
const Main_Image = () => {
  return (
    <div>
      <img src={Pic} alt='pic' style={{ width: '1100px' }} />
    </div>
  );
};

export default Main_Image;
