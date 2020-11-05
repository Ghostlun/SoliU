import React, { Fragment } from 'react';
import BrainImg from '../../asset/image/brain.png';
import { Link } from 'react-router-dom';

const MainOptionScreen = () => {
  return (
    <Fragment>
      <center>
        <div>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            How Are U?
          </h1>
        </div>

        <div>
          <img
            src={BrainImg}
            alt='brain'
            style={{
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '50px',
            }}
          />
        </div>

        <div style={{ marginTop: '30px' }}>
          <Link to='/research/mental_app/information'>
            <button className='btn-mental-main'>
              <text style={{ color: 'white' }}>LEARN</text>
            </button>
          </Link>
        </div>
        <div style={{ marginTop: '30px' }}>
          <Link to='/research/mental_app/self_test'>
            <button className='btn-mental-main'>
              <text style={{ color: 'white' }}>SELF TEST</text>
            </button>
          </Link>
        </div>
        <div style={{ marginTop: '30px' }}>
          <Link to='/research/mental_app/chat'>
            <button className='btn-mental-main'>
              <text style={{ color: 'white' }}>CHAT</text>
            </button>
          </Link>
        </div>
        <div style={{ marginTop: '30px' }}>
          <Link to='/research/mental_app/resource_center'>
            <button className='btn-mental-main'>
              <text style={{ color: 'white' }}>RESOURCE CENTER</text>
            </button>
          </Link>
        </div>
      </center>
    </Fragment>
  );
};
export default MainOptionScreen;
