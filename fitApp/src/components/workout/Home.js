import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { View, Text } from 'react-native';
import { WorkoutSelect } from './index'
import { LinkButton } from '../common';

const Home = ({props, newWorkout}) => {

  function handleNewWorkout(){
    newWorkout();
  }

    return(
      <View>
          <Link
            style={styles.buttonStyle}
            to='/WorkoutSelect'
            onPress={handleNewWorkout}>
              <Text style={styles.textStyle}>
                Start Workout
              </Text>
          </Link>

          <Link
            style={styles.buttonStyle}
            to='/WorkoutHistory' >
              <Text style={styles.textStyle}>
                Workout History
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
