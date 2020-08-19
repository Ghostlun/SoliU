import React from 'react';
import Brain_Logo from '../../asset/image/icon_main.png';
const Second_Main = () => {
  return (
    <div>
      <div>
        We are a research group consists of Auburn University students in
        various fields of study working together with professor Chon. The
        purpose of this research group is to identify social problems and find
        solutions through the knowledge of social science and computer science.
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img src={Brain_Logo} alt='logo' style={{ width: '200px' }} />
      </div>
      <div>
        The app contains some knowledge explaining the mental disorders, self
        depression test, a simple way to provide virtual contact with the
        experts and the location information of the centers that might give you
        a help.
      </div>
    </div>
  );
};

export default Second_Main;
