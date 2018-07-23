// EXTERNAL
import React, { Component } from 'react';
import {
  View, Text, Alert, ScrollView
} from 'react-native';

// INTERNAL
import Rating from '../components/Rating';

//STORAGE
import MyStorage from '../libs/Storage';

// STYLES
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 0,
    paddingTop: 5
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  desc: {
    flex: 6,
    padding: 20,
    fontWeight: 'bold',
    flexDirection: 'column'
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  }
};

// SCREEN FOR CREATE NEW TASK
export default class TaskDetails extends Component {
  constructor(props) {
    super(props);

    this.onComplete = props.navigation.getParam('onComplete'); // CALLBACK FUNCTION TO UPDATE THE MAIN PAGE

    const data = props.navigation.getParam('data');

    this.state = {
      uid: data.uid,
      title: data.title,
      text: data.text,
      rating: data.rating
    };
  }

    deleteTask = () => {
      Alert.alert('Confirmação', 'Deseja realmente deletar esta tarefa ?', [
        {
          text: 'Sim',
          onPress: () => {
            new MyStorage().delete(this.state.uid).then((data) => {
              console.log('Deleting task...');
              this.onComplete(data); // CALLBACK FUNCTION TO UPDATE THE MAIN PAGE
              this.props.navigation.navigate('Main');
            });
          }
        },
        {
          text: 'Não',
          onPress: () => {
            console.log('Canceling deletation of task...');
          }
        }
      ]);
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Text style={{ flex: 3, color: '#ff8724', ...styles.title }} onPress={() => this.props.navigation.goBack()}>
                Voltar
            </Text>
            <Text style={{ flex: 6, color: '#000000', ...styles.title }}>
              {this.state.title}
            </Text>
            <Text style={{ flex: 4, color: '#006bff', ...styles.title }} onPress={() => this.deleteTask()}>
                DELETE
            </Text>
          </View>
          <View style={styles.desc}>
            <ScrollView>
              <View style={{ margin: 4 }}>
                <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
                    Conteúdo
                </Text>
                <Text style={{ fontSize: 28, color: '#666464' }}>
                  {this.state.text}
                </Text>
              </View>
              <View style={{ margin: 4 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Prioridade
                </Text>
                <View style={{ alignItems: 'center' }}>
                  <Rating
                    value={this.state.rating}
                    type="star"
                    big
                    color="#232323"
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>);
    }
}
