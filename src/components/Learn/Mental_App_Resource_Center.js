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
        <Marker
          position={{ lat: 32.620892, lng: -85.405405 }}
          label='East Alabama Mental Health'
        ></Marker>
        <Marker
          position={{ lat: 32.62727, lng: -85.461105 }}
          label='Alabama Center for Trauma Therapy'
        ></Marker>
        <Marker
          position={{ lat: 32.589056, lng: -85.326372 }}
          label='East Al Mental Health'
        ></Marker>
        <Marker
          position={{ lat: 32.582156, lng: -85.440807 }}
          label='Dunn Psychological Services, LLC'
        ></Marker>
        <Marker
          position={{ lat: 32.6047, lng: -85.489834 }}
          label='Auburn University Psychological'
        ></Marker>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFneOCvlRsIReloFlD3MnndPnfBQ_dI_8'
})(Mental_App_Resource_Center);
