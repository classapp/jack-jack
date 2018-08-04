import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Task from '../components/Task';

const styles = StyleSheet.create({

});

export default class Main extends React.Component {
  state = {
    tasks: [
      { id: 1, title: 'Tarefa 1www', value: 3},
      { id: 2, title: 'Tarefa 2ww', value: 4},
    ]
  }

  onPressRating = (index, value) => {
    const tasks = this.state.tasks;
    
    tasks[index].value = value;

    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>Minhas Tarefas</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewTask')}
        >
          <Text>Novo task</Text>
        </TouchableOpacity>
        <FlatList
          extraData={this.state}
          data={this.state.tasks}
          renderItem={({ item, index }) => (
            <Task
              index={index}
              title={item.title} 
              ratValue={item.value} 
              onPressRating={this.onPressRating} />
          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}