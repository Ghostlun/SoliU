import React from 'react';
import Brain from '../../asset/image/brain.png';
const Mental_App_Brain = () => {
  return (
    <div>
      <img
        src={Brain}
        alt='brain'
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
