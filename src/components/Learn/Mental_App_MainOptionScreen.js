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
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/information'>
              <text style={{ color: 'white' }}>LEARN</text>
            </Link>
          </button>
        </div>
        <div style={{ marginTop: '30px' }}>
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/self_test'>
              <text style={{ color: 'white' }}>SELF TEST</text>
            </Link>
          </button>
        </div>
        <div style={{ marginTop: '30px' }}>
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/chat'>
              <text style={{ color: 'white' }}>CHAT</text>
            </Link>
          </button>
        </div>
        <div style={{ marginTop: '30px' }}>
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/resource_center'>
              <text style={{ color: 'white' }}>RESOURCE CENTER</text>
            </Link>
          </button>
        </div>
      </center>
    </Fragment>
  );
};
export default MainOptionScreen;
