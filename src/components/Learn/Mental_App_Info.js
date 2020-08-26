import React from 'react';
import { Link } from 'react-router-dom';
import '../../asset/css/style.css';
import MentalInfo from './Mental_Comp_info';

const Mental_App_Info = () => {
  // Call Mental info information
  return (
    <center>
      <div className='container_for_Mental_Main'>
        <MentalInfo />
      </div>
    </center>
  );
};

export default Mental_App_Info;
