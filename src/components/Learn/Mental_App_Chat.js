import React from 'react';
import { Link } from 'react-router-dom';
import '../../asset/css/style.css';
import MentalChat from './Mental_Comp_chat';

//Page for Mental
const Mental_App_Chat = () => {
  return (
    <center>
      <div className='container_for_Mental_Main'>
        <MentalChat />{' '}
      </div>
    </center>
  );
};

export default Mental_App_Chat;
