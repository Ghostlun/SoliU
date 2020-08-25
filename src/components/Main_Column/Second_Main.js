import React from 'react';
import Brain_Logo from '../../asset/image/icon_main.png';
const Second_Main = () => {
  return (
    <div>
      <div>
      SoliU is a research group which is consisted of students from various fields of Auburn University. With Dr. Chon, assistant professor in School of Communication and Journalism, members in this research group aims to identify social problems and find solutions through the knowledge of social science and computer science.
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
      Members in SoliU has been developing the mental health App (How Are U?). The App will provide some knowledge explaining the mental disorders, self-depression test, a simple way to provide virtual contact with the experts, and the location information of the centers that might give individuals a help.
      </div>
    </div>
  );
};

export default Second_Main;
