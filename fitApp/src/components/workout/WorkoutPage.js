import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Button2 } from '../common';

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
        </View>
        <View style={styles.setContainer}>
          <Text>Set: {props.state.setNumber}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button2 onPress={handleCountDown}>Minus</Button2>
        <Button onPress={handleAddSet}>Add Set</Button>
        <Button2 onPress={handleCountUp}>Plus</Button2>
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
    alignItems: 'center',
    height: 544,
    justifyContent: 'space-between'
  },
  titleContainer: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
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
    width: '95%',

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
    fontSize: 70,
  },
  repContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 2,
  },
  numbersContainer: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#007aff',
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  setContainer: {
    flexGrow: 1,
    borderTopWidth: 2,
    borderTopColor: '#007aff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 174,
  }
}

export {WorkoutPage};
