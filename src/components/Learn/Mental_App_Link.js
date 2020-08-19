import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Mental_App_Link = () => {
  return (
    <Fragment>
      <div className='play-button-container'>
        <ul>
          <li>
            <Link to='research/mental_app'>How Are You</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Mental_App_Link;
