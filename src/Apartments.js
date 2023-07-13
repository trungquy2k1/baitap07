
// import React, { Component } from 'react';
// import { View } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// class MyMap extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <MapView
//           style={{ flex: 1 }}
//           region={{
//             latitude: 37.46,
//             longitude: -122.26,
//             latitudeDelta: 0.5,
//             longitudeDelta: 0.1,
//           }}
//         >
//           <Marker
//             coordinate={{ latitude: 37.46, longitude: -122.26 }}
//             title="San Francisco"
//             description="This is the city that I love"
//           />
//         </MapView>
//       </View>
//     );
//   }
// }

// export default MyMap;
import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MyMap extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.46,
            longitude: -122.26,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          minZoomLevel={10}
          maxZoomLevel={15}
          zoomEnabled={true}
          zoomControlEnabled={true}
        >
          <Marker
            coordinate={{ latitude: 37.46, longitude: -122.26 }}
            title="San Francisco"
            description="This is the city that I love"
          />
        </MapView>
      </View>
    );
  }
}

export default MyMap;