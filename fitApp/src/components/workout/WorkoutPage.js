import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Button } from '../common';

const WorkoutPage = (props) => {

function handleCountUp(){
  props.repCountUp();
}

function handleCountDown(){
  props.repCountDown();
}

function handleAddSet(){
  props.addSet();
}

function handleNextExercise(){
  props.nextExercise();
}

  return (
    <View style={styles.containerStyles}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}> Workout Page </Text>
      </View>
      <Link to='/'
        style={styles.titleContainer}
        onPress={handleNextExercise}
        >
        <Text> Next Exersice </Text>
      </Link>
      <Button onPress={handleCountUp}>Plus</Button>
      <Button onPress={handleCountDown}>Minus</Button>
      <Button onPress={handleAddSet}>Add Set</Button>


    </View>
  )
}

const styles = {
  containerStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  titleContainer: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginBottom: 40
  },
  titleTextStyle: {
    fontSize: 30
  }
}

export {WorkoutPage};
