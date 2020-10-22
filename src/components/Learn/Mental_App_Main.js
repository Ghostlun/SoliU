import React, { Fragment, Component, Text } from 'react';
import '../../asset/css/style.css';
import LoadingScreen from './../Learn/Mental_App_LoadingScreen';
import MainOptionScreen from './../Learn/Mental_App_MainOptionScreen';

class Mental_App_Main extends Component {




  state = {
    loading: true
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 1500)
  }

  render() {
    return (
    
      this.state.loading ? 

        <center>
         <div class='container_for_Mental_Main'>
           <LoadingScreen></LoadingScreen> 
         </div>
        </center>
       :
        <center>
         <div class='container_for_Mental_Main'>
          <MainOptionScreen></MainOptionScreen> 
        </div>
        </center>
    
    ) 
  }
}
export default Mental_App_Main