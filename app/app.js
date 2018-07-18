// EXTERNAL
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, Alert } from 'react-native';
// INTERNAL
import Task from './components/Task';
// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 0,
    paddingTop: 20
  },
  list: {
    flex: 6,
    padding: 5,
    marginTop: 10,
    backgroundColor: '#ffffff'
    
  },
  topBar: {
    flex: 1,  
    justifyContent : 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.5

  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ff8724',
    margin: 10,
  }
});
// INITIAL PAGE
export default class App extends Component {

  constructor(props){
    super(props);
  }

  // FUNCTION TO CALL NEW PAGE 
  new_task = () => {
    Alert.alert("Mensagem ClassApp","Aqui vai abrir outra tela ?", [
      {text: 'Yes', onPress: () => console.log('Yes Pressed')},
      {text: 'No', onPress: () => console.log('No Pressed')},
    ],
    { cancelable: true });
  } 

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.topBar}>
            <Text style={{flex: 6, ...styles.title}} >Minhas Tarefas</Text>
            <Text style={{flex: 1, ...styles.title}} onPress={this.new_task}>+</Text>
          </View>
          <View style={styles.list}>  
            <ScrollView>
              <FlatList
                data={[{title: 'Item 1', value: 3}, {title: 'Item 2', value: 4}]}
                renderItem={({item}) => <Task title={item.title} ratValue={item.value} />}
              />
            </ScrollView>
          </View>
      </View>
    );
  }
}