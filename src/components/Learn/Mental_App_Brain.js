import React from 'react';
import Main_image from '../../asset/image/main_pic.png';
const Mental_App_Brain = () => {
  return (
    <div>
      <img
        src={Main_image}
        alt='Main_image'
        style={{
          width: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
      <div></div>
    </div>
  );
};

export default Mental_App_Brain;
