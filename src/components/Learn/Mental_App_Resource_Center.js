import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '100%'
};
class Mental_App_Resource_Center extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 32.620892,
          lng: -85.405405
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFneOCvlRsIReloFlD3MnndPnfBQ_dI_8'
})(Mental_App_Resource_Center);
