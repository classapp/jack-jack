// EXTERNAL
import React, { Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        
        // MECHANICS VARIABLES
        let result= [];

        // MECHANICS
        for(let i = 0; i < 5; i++){
            result.push((value > 0 ? 1 : 0));
            value--;
        }

        return result.map((value, i) => {
            return (
                <TouchableOpacity
                    key={i}
                    onPress={() => this.onChangeRating(i + 1)} 
                    style={[ (this.props.small ? styles.small : undefined), (this.props.medium ? styles.medium : undefined), (this.props.big ? styles.big : undefined)]}
                >
                    <Icon name={this.props.type + (value === 1 ? "" : "-o")} style={{ color: this.props.color }} color="#000000" size={(this.props.small ? 20 : (this.props.medium ? 30 : (this.props.big ? 40 : undefined)))}/>
                </TouchableOpacity>
            );
        });
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
