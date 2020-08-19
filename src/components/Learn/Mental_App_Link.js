import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Mental_App_Link = () => {
  return (
    <Fragment>
      <div className='play-button-container'>
        <ul>
          <Link to='research/mental_app'>Mental Health</Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default Mental_App_Link;
