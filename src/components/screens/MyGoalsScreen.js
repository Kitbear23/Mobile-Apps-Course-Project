import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
//import MyAdventuresList from '../lists/MyAdventuresList';
import { getGoals, deleteGoal, } from '../../actions/goals';


export class MyGoalsScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  componentDidMount() {
    this.props.getGoals();
  }

  render() {
    if (this.props.goals.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome!</H1>
          <Text>You haven't created any goals yet, click the "Plus" button at the top to create a new goal!</Text>
        </Container>
      )
    }

    return (
      <Container>
        <FlatList
          data={this.props.goals}
          renderItem={({item}) => (
            <GoalsList goal={item} deleteGoal={() => this.props.deleteGoal(item.id)} navigation={this.props.navigation}/>
          )}
          keyExtractor={item => `goal_${item.id}`}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    goals: storeState.goals,
  }
};

export default connect(select, { getGoals, deleteGoal })(MyGoalsScreen);