import React from 'react';
import Brain_Logo from '../../asset/image/icon_main.png';
const Second_Main = () => {
  return (
    <div>
      <div>
      SoliU is a research group consisting of students from various fields within Auburn University. With the guidance of Dr. Chon, Assistant Professor in the School of Communication and Journalism, the members of this research group aim to identify social problems and find solutions through the knowledge of social and computer science.
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
      The members of SoliU developed the mental health app "How Are U?" to provide some information to explain mental disorders. The app also has a self-depression test, easy ways to virtually contact experts, and the location for mental health resources that will help individuals in need. 
      </div>
    </div>
  );
};

export default Second_Main;
