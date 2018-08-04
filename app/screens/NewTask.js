import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

export default class NewTask extends React.Component {
  render () {
    return (
      <View>
        <Text>New Task</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}