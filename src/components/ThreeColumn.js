import React from 'react';
import First from '../components/Main_Column/First_Main';
import Second from '../components/Main_Column/Second_Main';
import Third from '../components/Main_Column/Third_Main';
const ThreeColumn = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: 20,
        padding: 30
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
  );
};

export default ThreeColumn;
