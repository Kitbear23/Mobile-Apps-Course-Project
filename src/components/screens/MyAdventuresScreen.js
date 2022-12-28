import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
//import MyAdventuresList from '../lists/MyAdventuresList';
import { getAdventures, deleteAdventure, } from '../../actions/adventures';


export class MyAdventuresScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  componentDidMount() {
    this.props.getAdventures();
  }

  render() {
    if (this.props.adventures.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome!</H1>
          <Text>You haven't gone on any adventures yet, click the "Plus" button at the top to start a new adventure!</Text>
        </Container>
      )
    }

    
    return (
      <Container>
        <FlatList
          data={this.props.adventures}
          renderItem={({item}) => (
            <MyAdventuresList adventure={item} deleteAdventure={() => this.props.deleteAdventure(item.id)} navigation={this.props.navigation}/>
          )}
          keyExtractor={item => `adventure_${item.id}`}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    adventures: storeState.adventures,
  }
};

export default connect(select, { getAdventures, deleteAdventure })(MyAdventuresScreen);