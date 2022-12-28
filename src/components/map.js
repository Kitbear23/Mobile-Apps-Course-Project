import React from 'react';
import { Provider, connect } from 'react-redux';
import { Text, StyleSheet, Image, Button, SafeAreaView, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';
import { createMarker, getMarkers } from '../actions/markers';


class Map extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    }
  })


  state = {
    currentPosition: null,
    markers: [],
    coordinates: [],
  }

  async componentDidMount() {
      //Get markers from storage
      this.props.getMarkers();
    await this.requestLocationPermission();
    Geolocation.watchPosition(
      ({ coords }) => {
        this.setState((state) => ({
          currentPosition: {
            ...coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          coordinates: [
            ...state.coordinates,
            { latitude: coords.latitude, longitude: coords.longitude }
          ],
        }))
      },
      console.log,
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      }
    );
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Location Permission',
          'message': 'This App needs access to your location ' +
                     'so we can know where you are.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use locations ")
      } else {
        console.log("Location permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  onMapPress = (e) => {
    const { coordinate } = e.nativeEvent; 

    //Create marker with given coordinates
    this.props.createMarker(
      coordinate,
    );
  }

  render() {
    if (!this.state.currentPosition) return null;
    //console.log(this.state.currentPosition)
    return (
        <MapView
          style={this.styles.flex}
          initialRegion={this.state.currentPosition}
          onPress={this.onMapPress}
        >
          <Polyline
            coordinates={this.state.coordinates}
            strokeWidth={5}
            strokeColor="red"
          />
          <Marker
            onPress={e => e.stopPropagation()}
            coordinate={this.state.currentPosition}
            title="Our Current Location"
            description="We did this during our online lecture because the COVID 19 virus made the world go really crazy"
          >
            <Callout>
              <Image
                style={{
                  width: 100,
                  height: 100
                }}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png' }}
              />
              <Button title="Edit" onPress={() => console.log('Hello, world!')} />
            </Callout>
          </Marker>
          {
            this.props.markers.map(marker => (
              // <Circle
              //   onPress={e => e.stopPropagation()}
              //   key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
              //   center={marker.coordinate}
              //   strokeColor="green"
              //   strokeWidth={5}
              //   radius={100}
              //
              // />
              <Marker
                draggable
                onDragEnd={() => console.log("I drag ended")}
                onPress={e => e.stopPropagation()}
                key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
                { ...marker}
              />
            ))
          }
        </MapView>
    );
  }
}

//Allow rest of app to get markers from storage
const select = (storeState, props) => {
    return {
        markers: storeState.markers
    }
  };

//Connect createMarker and getMarker from redux
const mapPropsToDispatch = {
  createMarker,
  getMarkers,
};

//Connect storage to rest of app
export default connect(select, mapPropsToDispatch)(Map);