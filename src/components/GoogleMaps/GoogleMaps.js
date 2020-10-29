// function markMap() {
//     var Main = { lat: 32.5933574, lng: -85.497355};
//     var HC1 = { lat: 32.6037519 , lng: -85.4485803};

//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: Main,
//     });
//     new google.maps.Marker({
//         position: HC1,
//         title: "Auburn Middle School",
//     });

// }

import React from 'react';

const GoogleMaps = () => {
  return (      
<iframe
    width="500"
    height="400"
    frameborder="0" styles="border:0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCg8pjs6twx_dBBvdTCC5iNs7dg2bG0P_Y
    &language=en&q=Auburn+University" 

    allowfullscreen>
</iframe>
  );
};

export default GoogleMaps;


// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: AIzaSyCg8pjs6twx_dBBvdTCC5iNs7dg2bG0P_Y }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;