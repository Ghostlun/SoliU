import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../../asset/css/style.css';
import Map from '../GoogleMaps/GoogleMaps';

// const mapStyles = {
//   width: '35%',
//   height: '63%',
//   marginLeft: '1%',
// };

class Mental_App_Resource_Center extends Component {
  render() {
    return (
      <center>
          <div className='container_for_Mental_Main' >
          <div style = {{fontWeight : "bold" , fontSize : "200%"}}>Resource Center</div>
          <br></br>
          <br></br>

          <br></br>

          <br></br>

          <br></br>

          <br></br>


          <Map/>

     
        </div> 
      </center>
    );
  }
}

 export default Mental_App_Resource_Center
// ({
//   apiKey: 'AIzaSyDFneOCvlRsIReloFlD3MnndPnfBQ_dI_8',
// })(Mental_App_Resource_Center);
