import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Brain from './Mental_App_Brain';
import '../../asset/css/style.css';
const Mental_App_Main = () => {
  return (
    <div className='background_For_phone'>
      <div>
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          How Are U?
        </h1>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          We are here to help you
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Brain />
      </div>
      <div
        className='play-button-container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <table>
          <tr className='table'>
            <Link to='/learn/mental_app/information'>LEARN</Link>

            <Link to='/learn/mental_app/self_test'>SELF TEST</Link>
          </tr>
          <tr className='spacer'>
            <Link to='/learn/mental_app/chat'>CHAT</Link>

            <Link to='/learn/mental_app/resource_center'>RESOURCE CENTER</Link>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Mental_App_Main;
