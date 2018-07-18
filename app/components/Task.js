// EXTERNAL
import React, { Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button, Alert } from 'react-native';
// INTERNAL
import Rating from './Rating';
// STYLES
const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 1,
        borderColor: '#d4d4d4'
    },
    columns: {
        justifyContent: 'center'
    },
    title: {
        fontSize: 19,
        color: '#13ce4f'
    }
});

// COMPONENT
export default class Task extends Component {

    constructor(props){
        super(props);
    }

    open_task = () => {
        Alert.alert("Mensagem !", "Deseja abrir esta Task ?", [
            {text: 'Yes', onPress: () => console.log('Yes Pressed')}
        ]);
    }

    render() {
        const { title, desc, ratValue } = this.props;
        return (
            <TouchableOpacity 
                onPress={this.open_task}
                style={styles.content}
            >
                <View style={{ flex: 5, ...styles.columns }}>
                    <Text style={styles.title}>{title}</Text>
                    <Rating 
                        value={ratValue} 
                        type="circle"
                        // onChangeRating={() => {}}
                        // activedStyle={{
                        //     backgroundColor: 'blue'
                        // }}
                        // disabledStyle={{
                        //     backgroundColor: 'red'
                        // }}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', ...styles.columns }}>
                    <Text style={styles.title}>></Text>
                </View>
            </TouchableOpacity>
        );
    }
}