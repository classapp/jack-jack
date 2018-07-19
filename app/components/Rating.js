// EXTERNAL
import React, { Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

// STYLES
const styles = StyleSheet.create({
    small: {
        width: 20,
        height: 20,
    },
    medium: {
        width: 30,
        height: 30,
    },
    big: {
        width: 40,
        height: 40,
    },
    dots: {
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
        this.state = {
            value: props.value
        }
    }

    /// METHOD WHEN IS SELECTED A NEW VALUO OF RATING
    onChangeRating = (value) => {
        if( this.props.hasOwnProperty('onChangeRating')){
            this.props.onChangeRating(value);
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
                return (<TouchableOpacity
                    key={i}
                    onPress={() => this.onChangeRating(i + 1)} 
                    style={[styles.dots, styles.disabled, (this.props.small ? styles.small : undefined), (this.props.medium ? styles.medium : undefined), (this.props.big ? styles.big : undefined), value === 1 ? styles.actived : styles.disabled]}
                    ></TouchableOpacity>);
            });
        }
    }

    render() {
        const { value } = this.props;

        return (
            <View style={{flex: 1, paddingTop: 5, flexDirection: 'row'}}>
                { this.load_rating(value) }
            </View>
        );
    }
}
