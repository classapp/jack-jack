import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TaskDetails extends React.Component {
  render () {
    const task = this.props.navigation.getParam('task', {});


    return (
      <View>
        <Text>Task Details</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 30 }}>{task.title}</Text>
      </View>
    )
  }
}