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
        paddingTop: 20
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
      forms: {
        flex: 6,
        padding: 10,
        flexDirection: 'column'
      },
      textInput: {
        marginTop: 4,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1
      },
      title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
      }
}

// SCREEN FOR CREATE NEW TASK
export default class NewTask extends Component{
    
     constructor(props){
        super(props);
        this.state = { 
            title: "",
            text: "",
            rating: 3
        }
     }

     create_task = () => {
         Alert.alert("Confirmação", "Deseja realmente criar esta tarefa ?", [
             {text: "Sim", onPress: () => {console.log('create task')}},
             {text: "Não", onPress: () => {console.log('cancel create task')}}
         ]);
     }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
                    <View style={styles.topBar}>
                        <Text style={{flex: 3, color: '#ff8724', ...styles.title}} onPress={() => this.props.navigation.goBack()}>Voltar</Text>
                        <Text style={{flex: 6, color: '#ff8724', ...styles.title}} >Nova Tarefa</Text>
                        <Text style={{flex: 3, color: '#006bff', ...styles.title}} onPress={() => this.create_task()}>ADD</Text>
                    </View>
                    <View style={styles.forms}>
                        <View style={{margin: 4}}>
                            <Text>Titulo</Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Titulo"
                                style={{...styles.textInput}}
                                onChangeText={(text) => this.setState({title})}
                                value={this.state.title}
                            />
                        </View>
                        <View style={{flex: 4, margin: 4}}>
                            <Text>Descrição</Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Descrição"
                                style={{flex: 4, ...styles.textInput}}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </View>
                        <View style={{flex: 1, margin: 4 }}>
                            <Text>Prioridade</Text>
                            <View style={{ alignItems: 'center'}}>
                                <Rating
                                    big
                                    value={this.state.rating} 
                                    type="circle"
                                    onChangeRating={(value) => {this.setState({ rating: value})}}
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