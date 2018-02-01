import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { View, Text } from 'react-native';
import { LinkButton } from '../common';
import { NameWorkout } from './index';

const Home = ({props, newWorkout}) => {

  function handleNewWorkout(){
    newWorkout();
  }

    return(
      <View style={styles.containerStyle}>
          <Link
            style={styles.buttonStyleOne}
            to='/WorkoutSelect'
            onPress={handleNewWorkout}>
              <Text style={styles.textStyle}>
                Workout
              </Text>
          </Link>

          <Link
            style={styles.buttonStyleTwo}
            to='/WorkoutHistory' >
              <Text style={styles.textStyle}>
                History
              </Text>
          </Link>
      </View>
    );
  };

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '97%',
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyleOne: {
    borderRadius: 10,
    borderColor: '#9B9B9B',
    borderWidth: 3,
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    width: '90%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: .8,

  },
  buttonStyleTwo: {
    borderRadius: 10,
    borderColor: '#9B9B9B',
    borderWidth: 3,
    backgroundColor: '#5A5959',
    marginLeft: 5,
    marginRight: 5,
    width: '90%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: .8,
  },

}

export {Home};
