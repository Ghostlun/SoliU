import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pic from '../../asset/image/joonha_Kim.png';




export default class  Intro_joonha extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      MouseClicked: 'false'
    }
  }

  render () {
  return (
    <div>
      <center>

        {/* Container */}
      <div className='container_for_Indiv_Info'>
        
        <div>

          {/* Hi Text */}
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Hi, I'm Joonha Kim!
          </h1>
        </div>

            {/* Inside Container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px'
          }}>
        <div>

      {/* What Image */}
      <img
        src={Pic}
        style={{
          width: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}/>

        {/* Buttons */}
        <div className = 'btn-grid-Indiv_Info'>


        
        </div>
      </div>
          
    

        </div>
        </div>
    </center>
    </div>
     
  );
};

}

