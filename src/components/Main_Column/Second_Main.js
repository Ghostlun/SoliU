import React from 'react';
import Brain_Logo from '../../asset/image/icon_main.png';
const Second_Main = () => {
  return (
    <div>
      <div>
        Recently, because of COVID-19 we have focused our research efforts
        toward mental health issues and developed the app "How Are U?" to help
        students with anxiety or depression by decreasing stigma and increasing
        accessibility for approaching necessary resources.
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={Brain_Logo} alt='logo' style={{ width: '200px' }} />
      </div>
      <div>
        The members of SoliU developed the mental health app "How Are U?" to
        provide some information to explain mental disorders. The app also has a
        self-depression test, easy ways to virtually contact experts, and the
        location for mental health resources that will help individuals in need.
      </div>
    </div>
  );
};

export default Second_Main;
