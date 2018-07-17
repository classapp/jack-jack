// EXTERNAL
import React, { Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

// STYLES
const styles = StyleSheet.create({
    button: {
        width: 20,
        height: 20,
        marginRight: 3,
        flexDirection: 'column',
        borderRadius: 100,
    },
    actived: {
        backgroundColor: 'black'
    },
    disabled: {
        borderWidth: 2,
        borderColor: 'black'
    }
});

// COMPONENT
export default class Rating extends Component {

    constructor(props){
        super(props);
    }

    /// METHOD WHEN IS SELECTED A NEW VALUO OF RATING
    onChangeRating = (value) => {
        if( this.props.enabled && (this.props.callback != (undefined && null)) ){
            this.props.callback(value);
        }        
    }

    // LOAD CIRCLE TYPE RATING
    load_rating = (value) => {
        
        // CHECKING TYPE 
        if(this.props.type == 'circle'){
            // MECHANICS VARIABLES
            let result= [];

            // MECHANICS
            for(let i = 0; i < 5; i++){
                result.push((value > 0 ? 1 : 0));
                value--;
            }

            return result.map((value, i) => {
                return (<TouchableOpacity onPress={() => this.onChangeRating(i + 1)} style={ value === 1 ? [styles.button, styles.actived ,this.props.activedStyle] : [styles.button, styles.disabled ,this.props.disabledStyle]}></TouchableOpacity>);
            });
        }else if(this.props.type == 'star'){

        }
    }

    render() {
        const { value, enabled, type, activedStyle, disabledStyle, callback } = this.props;

        return (
            <View style={{flex: 1, paddingTop: 5, flexDirection: 'row'}}>
                { this.load_rating(value) }
            </View>
        );
    }
}
