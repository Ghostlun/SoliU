import React, { Fragment, Component, Text } from 'react';
import { Link } from 'react-router-dom';
import BrainImg from '../../asset/image/brain.png';
import '../../asset/css/style.css';
import Pic from '../../asset/image/loader.gif';



export default class Mental_App_Main extends Component {
  state = {
    loading: true
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 3000)
  }


  render() {
    return (
      <center>

{
      this.state.loading ? 
      <div class="loader">
      <img src={Pic}></img></div> 
      : 
      

      <div class='container_for_Mental_Main'>
        <div>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
          How Are U?
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px'
          }}
        >
          <div>
            <img
              src={BrainImg}
              alt='brain'
              style={{
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
              }}
            />
          </div>
        </div>

        <div className='btn-grid'>
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/information'>
              <text style={{ color: 'white' }}>LEARN</text>
            </Link>
          </button>

          <button className='btn-mental-main'>
            <Link to='/research/mental_app/self_test'>
              <text style={{ color: 'white' }}>SELF TEST</text>
            </Link>
          </button>

          <button className='btn-mental-main'>
            <Link to='/research/mental_app/chat'>
              <text style={{ color: 'white' }}>CHAT</text>
            </Link>
          </button> 
          
          <button className='btn-mental-main'>
            <Link to='/research/mental_app/resource_center'>
              <text style={{ color: 'white' }}>RESOURCE CENTER</text>
            </Link>
          </button>
        </div>
      </div>
  }
    </center>
    
            
    
    )
  }
  
}

  

// export default Mental_App_Main;