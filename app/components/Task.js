// EXTERNAL
import React, { Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        this.props.navigation.navigate('TaskDetails', { data: this.props.data, onComplete: this.props.onComplete });
    }

    render() {
        const { data } = this.props;
       
        return (
            <TouchableOpacity 
                onPress={this.open_task}
                style={styles.content}
            >
                <View style={{ flex: 5, ...styles.columns }}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Rating 
                        value={data.rating} 
                        type="star"
                        small
                        color="#232323"
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', ...styles.columns }}>
                    <Icon name="arrow-right" size={30} color="#13ce4f" />
                </View>
            </TouchableOpacity>
        );
    }
}
