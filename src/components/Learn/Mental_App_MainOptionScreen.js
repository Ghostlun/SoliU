import React, { Fragment } from 'react';
import BrainImg from '../../asset/image/main2.png';
import { Link } from 'react-router-dom';
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

      <div style = {{marginTop : '30px'}}>
          <Link to='/research/mental_app/information'> 
            <button className='btn-mental-main' >
                LEARN
            </button>
          </Link>

      
          <Link to='/research/mental_app/self_test'>
            <button className='btn-mental-main'>
              Self-Test
            </button>
          </Link>

         

          <Link to='/research/mental_app/resource_center'>
            <button className='btn-mental-main'>
              Resource Center
            </button>
          </Link>

          </div>
      </div>
      
  );
};
export default MainOptionScreen;
