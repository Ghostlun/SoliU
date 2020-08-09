import React from 'react';
import Covid_Pic from '../../asset/image/covid_19.png';
import GuideLine from '../../asset/image/guideline.png';
import Apple from '../../asset/image/app_store.png';
import Google from '../../asset/image/google_play_store.png';
import '../../asset/css/style.css';

const Third_Main = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'>
          <img src={Covid_Pic} alt='Covid_Pic' style={{ width: '300px' }} />
        </a>
      </div>
      <div
        className='Margin_Bottom_FOR_MAIN'
        style={{
          display: 'flex',
          color: '#21385e'
        }}
      >
        DOWNLOAD
      </div>

      <div>
        <img
          src={GuideLine}
          alt='GuidLine'
          style={{
            width: '300px'
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <a href='https://play.google.com/store/apps'>
          <img src={Google} alt='Google' style={{ width: '200px' }} />
        </a>
      </div>

      <div
        className='margin_top'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <a href='https://www.apple.com/ios/app-store/'>
          <img src={Apple} alt='Apple' style={{ width: '200px' }} />
        </a>
      </div>
    </div>
  );
};

export default Third_Main;
