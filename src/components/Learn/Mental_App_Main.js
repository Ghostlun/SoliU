import React, { Component } from 'react';
import '../../asset/css/style.css';
import LoadingScreen from './../Learn/Mental_App_LoadingScreen';
import MainOptionScreen from './../Learn/Mental_App_MainOptionScreen';
import Cookies from "js-cookie"

class Mental_App_Main extends Component {
  constructor(props) {
    super(props)
    this.state = { 
    }
  }

  state = { loading: true }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 1500)

    Cookies.set("Page", "1", { expires: 1 })
    
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
