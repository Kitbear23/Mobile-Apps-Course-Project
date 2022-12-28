import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyAdventuresScreen from './src/components/screens/MyAdventuresScreen';
import MyGoalsScreen from './src/components/screens/MyGoalsScreen';
import NewGoalScreen from './src/components/screens/NewGoalScreen';
import store from './src/store/store';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AdventuresStack = createStackNavigator();

function AdventuresStackScreen() {
  return (
    <AdventuresStack.Navigator>
      <AdventuresStack.Screen name="Adventures" component={MyAdventuresScreen} />
    </AdventuresStack.Navigator>
  );
}

const GoalsStack = createStackNavigator();

function GoalsStackScreen() {
  return (
    <GoalsStack.Navigator>
      <GoalsStack.Screen 
        name="Goals" 
        component={MyGoalsScreen} 
        options={
          ({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity>
              <Button transparent style={{padding: 5}} onPress={() => navigation.navigate('New Goal')}>
                <Icon name="plus" size={20} color="blue"/>
              </Button>
            </TouchableOpacity>
          )
         })
        }
      />
      <GoalsStack.Screen name="New Goal" component={NewGoalScreen} />
    </GoalsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>        
          <Tab.Navigator
            initialRouteName="Adventures"
            tabBarOptions={{
              activeTintColor: 'green',
              inactiveTintColor: 'black',
            }}
          >
            <Tab.Screen 
              name="Adventures" 
              component={AdventuresStackScreen} 
              options={{
                tabBarLabel: 'Adventures',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="map" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen 
              name="Goals" 
              component={GoalsStackScreen} 
              options={{
                tabBarLabel: 'Goals',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="trophy" size={20} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}