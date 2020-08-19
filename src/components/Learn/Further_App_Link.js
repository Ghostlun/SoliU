import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Further_App_Link = () => {
  return (
    <Fragment>
      <div className='play-button-container'>
        <ul>
          <Link to='research/others'>other App</Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default Further_App_Link;
