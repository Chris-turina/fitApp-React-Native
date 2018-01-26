import React, { Component } from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { View, Text } from 'react-native';


class Home extends Component{

  render(){
    return(
      <View>
        <Text>Home Page</Text>
      </View>
    );
  };
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  }
}

export {Home};
