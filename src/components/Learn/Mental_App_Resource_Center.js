import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '100%'
};
class Mental_App_Resource_Center extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: 32.620892,
          lng: -85.405405
        }}
      >
        <Marker position={{ lat: 32.620892, lng: -85.405405 }}></Marker>
        <Marker
          position={{ lat: 32.62727, lng: -85.461105 }}
          label='hidddddddd'
        ></Marker>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFneOCvlRsIReloFlD3MnndPnfBQ_dI_8'
})(Mental_App_Resource_Center);
