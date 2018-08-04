import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Rating from './Rating';

export default class Task extends React.Component {
  render() {
    const { index, task } = this.props;

    return (
      <View>
        <Text>{task.title}</Text>
        <Text>{task.description}</Text>
        <Rating
          taskIndex={index}
          ratValue={task.rating}
          onPressRating={(index, value) => this.props.onPressRating(index, value)} />
      </View>
    );
  }
}