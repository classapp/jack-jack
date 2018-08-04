import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Task from '../components/Task';
import MyStorage from '../libs/Storage';

const styles = StyleSheet.create({

});

export default class Main extends React.Component {
  state = {
    tasks: []
  }

  async componentWillMount() {
    const tasks = await new MyStorage().load();
    this.setState({ tasks: tasks });
  }

  onPressRating = (index, value) => {
    const tasks = this.state.tasks;
    
    tasks[index].value = value;

    this.setState({ tasks: tasks });
  }

  appendToTasks = (task) => {
    const tasks = this.state.tasks;
    tasks.push(task);

    this.setState({ tasks });
  }

  updateTasks = (tasks) => {
    this.setState({ tasks });
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>Minhas Tarefas</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewTask', {
            appendToTasks: this.appendToTasks
          })}
        >
          <Text>Novo task</Text>
        </TouchableOpacity>
        <FlatList
          extraData={this.state}
          data={this.state.tasks}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TaskDetails', {
                task: item,
                updateTasks: this.updateTasks
              })}
            >
              <Task
                index={index}
                task={item}
                onPressRating={this.onPressRating} />
            </TouchableOpacity>

          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}