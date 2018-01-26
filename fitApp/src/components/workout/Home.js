import React, { Component } from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { View, Text } from 'react-native';
import { WorkoutSelect } from './index'


function Home (props) {
  console.log(props);
    return(
      <View>
          <Link
            style={styles.buttonStyle}
            to='/WorkoutSelect'>

              <Text style={styles.textStyle}>
                Start Workout
              </Text>
          </Link>
      </View>
    );
  };

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
