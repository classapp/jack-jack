import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Rating from './Rating';

export default class Task extends React.Component {
  open_task = () => {
    console.warn('tarefa aberta');
  }

  render() {
    const { index, title, desc, ratValue } = this.props;

    return (
      <TouchableOpacity
        onPress={this.open_task}
      >
        <View>
          <Text>{title}</Text>
        </View>
        <Rating
          taskIndex={index}
          ratValue={ratValue}
          onPressRating={(index, value) => this.props.onPressRating(index, value)} />
      </TouchableOpacity>
    );
  }
}