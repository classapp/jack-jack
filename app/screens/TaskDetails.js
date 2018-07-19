// EXTERNAL
import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// INTERNAL
import Rating from '../components/Rating';

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
        justifyContent : 'center',
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
}

// SCREEN FOR CREATE NEW TASK
export default class TaskDetails extends Component{
    
     constructor(props){
        super(props);

        this.state = {
            uid: props.navigation.getParam('uid'),
            title: props.navigation.getParam('title'),
            text: props.navigation.getParam('text'),
            rating: props.navigation.getParam('rating')
         }

     }

     delete_task = () => {
         Alert.alert("Confirmação", "Deseja realmente deletar esta tarefa ?", [
             {text: "Sim", onPress: () => {console.log('delete task')}},
             {text: "Não", onPress: () => {console.log('cancel delete task')}}
         ]);
     }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
                    <View style={styles.topBar}>
                        <Text style={{flex: 3, color: '#ff8724', ...styles.title}} onPress={() => this.props.navigation.goBack()}>Voltar</Text>
                        <Text style={{flex: 6, color: '#ff8724', ...styles.title}} >{this.state.title}</Text>
                        <Text style={{flex: 4, color: '#006bff', ...styles.title}} onPress={() => this.delete_task()}>DELETE</Text>
                    </View>
                    <View style={styles.desc}>
                        <View style={{margin: 4}}>
                            <Text style={{ fontWeight: 'bold' }}>Conteúdo</Text>
                            <Text style={{margin: 5}}>{this.state.text}</Text>
                        </View>
                        <View style={{margin: 4}}>
                            <Text style={{ fontWeight: 'bold' }}>Prioridade</Text>
                            <View style={{ alignItems: 'center' }}>
                                <Rating 
                                    value={this.state.rating} 
                                    type="circle"
                                    big
                                    // onChangeRating={() => {}}
                                    // activedStyle={{
                                    //     backgroundColor: 'blue'
                                    // }}
                                    // disabledStyle={{
                                    //     backgroundColor: 'red'
                                    // }}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>

            );
    }
}