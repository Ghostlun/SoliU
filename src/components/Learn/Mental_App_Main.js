import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Brain from './Mental_App_Brain';

import '../../asset/css/style.css';

const Mental_App_Main = () => {
  return (
    <center>
      <div className='container_for_Mental_Main'>
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
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px'
          }}
        >
          <Brain />
        </div>
        <div className='btn-grid'>
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/information'>
              <text style={{ color: 'white' }}>LEARN</text>
            </Link>
          </button>

          <button className='btn-mental-main'>
            <Link to='/research/mental_app/self_test'>
              <text style={{ color: 'white' }}>SELF TEST</text>
            </Link>
          </button>

          <button className='btn-mental-main'>
            <Link to='/research/mental_app/chat'>
              <text style={{ color: 'white' }}>CHAT</text>
            </Link>
          </button>
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/resource_center'>
              <text style={{ color: 'white' }}>RESOURCE CENTER</text>
            </Link>
          </button>
        </div>
      </div>
    </center>
  );
};

export default Mental_App_Main;
