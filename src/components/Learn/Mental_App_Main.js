import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Brain from './Mental_App_Brain';

import '../../asset/css/style.css';

const Mental_App_Main = () => {

  // Function Add 가능한 부분
  // 
  // 
  // 
  // 

  return (

    // Center 안의 부분은 Mental app 관련 전체부분//
    <center>



      <div>
         {/* 사진 디스플레이 되는 부분  */}



      </div>
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
