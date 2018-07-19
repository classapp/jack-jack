// EXTERNAL
import React, {Component} from 'react';
// INTERNAL
import StackNavigation from './navigation/StackNavigation';

// APP CONTEXT
export default class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <StackNavigation store="BAC"/>
    );
  }
}