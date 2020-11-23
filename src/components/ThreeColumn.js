import React from 'react';
import First from '../components/Main_Column/First_Main';
import Second from '../components/Main_Column/Second_Main';
import Third from '../components/Main_Column/Third_Main';
const ThreeColumn = () => {
  return (
    <div>
      <div
        style={{
          color: '#3975ab',
          marginTop: '2em'
        }}
      >
        <center>
          <h1>"We address, communicate and solve social issues"</h1>
        </center>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 20,
          padding: 10,
          marginTop: '-4em'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <First />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Second />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Third />
        </div>
      </div>
    </div>
  );
};

export default ThreeColumn;
