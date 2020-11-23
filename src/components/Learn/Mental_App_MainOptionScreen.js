import React, { Fragment } from 'react';
import BrainImg from '../../asset/image/main2n.png';
import { Link } from 'react-router-dom';
import Loading from '../../components/Learn/Mental_App_LoadingScreen'

const MainOptionScreen = () => {




  return (

    <Fragment>
      <center>
        <div>
          <br></br>
          <br></br>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop : '50'
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
              width: '500px',
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
