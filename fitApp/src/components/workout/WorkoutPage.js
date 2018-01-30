import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Button } from '../common';

const WorkoutPage = (props) => {

function handleCountUp(){
  props.repCountUp();
  console.log(props);
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

function handleEndWOrkout(){
  props.endWorkout();
}

  return (
    <View style={styles.containerStyles}>
      <Link to='/'
        style={styles.titleContainer}
        onPress={handleEndWOrkout}>
          <Text> End Workout </Text>
      </Link>

      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}> {props.state.exerciseName} </Text>
      </View>

      <View style={styles.numbersContainer}>
        <View style={styles.repContainer}>
          <Text style={styles.repNumberText}>{props.state.reps}</Text>
          <Text style={styles.repText}>reps</Text>
        </View>
        <Text>Set: {props.state.setNumber}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleCountDown}>Minus</Button>
        <Button onPress={handleAddSet}>Add Set</Button>
        <Button onPress={handleCountUp}>Plus</Button>
      </View>

      <Link to='/WorkoutSelect'
        style={styles.nextContainer}
        onPress={handleNextExercise}>
          <Text style={styles.nextTextStyle}> Next Exersice </Text>
      </Link>


    </View>
  )
}

const styles = {
  containerStyles: {
    display: 'flex',
    height: 544,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginBottom: 20,
    width: '100%'
  },
  titleTextStyle: {
    fontSize: 30
  },
  nextContainer: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    width: '100%',

  },
  nextTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  repNumberText: {
    fontSize: 50,
  },
  repText:{
    marginLeft: 10
  },
  repContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#007aff',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  numbersContainer: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    height: 150,
    justifyContent: 'space-around',
    width: 150,
  },
  buttonContainer: {
    flexDirection: 'row'
  }
}

export {WorkoutPage};
