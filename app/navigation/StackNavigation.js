// EXTERNAL
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
// INTERANAL
import Main from '../screens/Main';
import NewTask from '../screens/NewTask';
import TaskDetails from '../screens/TaskDetails';

export default class MainStackNavigation extends Component {
  constructor(props) {
    super(props);
  }

    onChangePage = (c) => {
      console.log('The stack has been updated...\nCurrent stack state: ');
      console.log(c);
    }

    createStackNavigator = () => createStackNavigator({
      Main: {
        screen: ({ navigation }) => (<Main navigation={navigation} />),
      },
      NewTask: {
        screen: ({ navigation }) => (<NewTask navigation={navigation} />),
      },
      TaskDetails: {
        screen: ({ navigation }) => (<TaskDetails navigation={navigation} />),
      },
    }, {
      navigationOptions: {
        header: null,
      },
      initialRouteName: 'Main',
    });

    render() {
      console.log('Loading stack...');
      const MainStackNavigation = this.createStackNavigator();
      return <MainStackNavigation onNavigationStateChange={c => this.onChangePage(c)} />;
    }
}