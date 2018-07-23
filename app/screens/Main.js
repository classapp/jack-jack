// EXTERNAL
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, FlatList
} from 'react-native';
// INTERNAL
import Task from '../components/Task';
import MyStorage from '../libs/Storage';

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 0,
    paddingTop: 20,
  },
  list: {
    flex: 6,
    padding: 5,
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  topBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,

  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ff8724',
    margin: 10,
  },
});
// INITIAL PAGE
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };

  }

  // BEFORE RENDER METHOD
  async componentWillMount() {
    const storage = await new MyStorage().load();
    this.setState({ data: storage });
  }

  // FUNCTION TO UPDATE PAGE
  updatePage = (newData) => {
    this.setState({ data: newData });
  }
  // FUNCTION TO CALL NEWTASK PAGE
  newTask = () => {
    this.props.navigation.navigate('NewTask', { onComplete: this.updatePage.bind(this)});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={{ flex: 6, ...styles.title }}>
            Minhas Tarefas
          </Text>
          <Text style={{ flex: 1, ...styles.title }} onPress={this.newTask}>
            +
          </Text>
        </View>
        <View style={styles.list}>
          <ScrollView>
              <FlatList
                ListEmptyComponent={(<View style={{ alignItems: 'center' }}>
                  <Text>Nenhuma tarefa para mostar.</Text>
                </View>)}
                data={this.state.data}
                renderItem={({ item }) => <Task key={item.uid} onComplete={this.updatePage.bind(this)} data={item} navigation={this.props.navigation} />}
              />
       
          </ScrollView>
        </View>
      </View>
    );
  }
}
