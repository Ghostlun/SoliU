import React, { Fragment } from 'react';
import BrainImg from '../../asset/image/main2.png';
import { Link } from 'react-router-dom';
import Loading from '../../components/Learn/Mental_App_LoadingScreen'
import '../../asset/css/style.css'


const MainOptionScreen = () => {

  

  return (

      <div>
          <h1  style = {{fontFamily: 'sans-serif' , fontWeight: "bold", letterSpacing : '10', fontSize : '300%', letterSpacing : '5px'}}>
            How Are U
          </h1>
        
        <div>
          <img
            src={BrainImg}
            alt='brain'
            style={{
              width: '500px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30px',
            }}
          />
        </div>

      
          <Link to='/research/mental_app/information'> 
            <button className='btn-mental-main'>
                LEARN
            </button>
          </Link>

      
          <Link to='/research/mental_app/self_test'>
            <button className='btn-mental-main'>
              <text style={{ color: 'white' }}>SELF TEST</text>
            </button>
          </Link>

          <Link to='/research/mental_app/chat'>
            <button className='btn-mental-main'>
              <text style={{ color: 'white' }}>CHAT</text>
            </button>
          </Link>

          <Link to='/research/mental_app/resource_center'>
            <button className='btn-mental-main'>
              <text style={{ color: 'white' }}>RESOURCE CENTER</text>
            </button>
          </Link>


      </div>
      
  );
};
export default MainOptionScreen;
