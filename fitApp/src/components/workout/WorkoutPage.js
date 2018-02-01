import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Plus, Minus } from '../common';

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

function handleEndWorkout(){
  props.endWorkout();
}

  return (
    <View style={styles.containerStyles}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}> {props.state.exerciseName} </Text>
      </View>

      <View style={styles.numbersContainer}>
        <Minus onPress={handleCountDown}>Minus</Minus>
        <View >
          <View style={styles.repContainer}>
              <Text style={styles.repNumberText}>{props.state.reps}</Text>
          </View>
          <View style={styles.setContainer}>
            <Text style={text.color}>Set: {props.state.setNumber}</Text>
          </View>
        </View>
        <Plus onPress={handleCountUp}>Plus</Plus>
      </View>

      <View style={styles.endAdd}>
        <Link to='/'
        style={styles.buttonContainer}
          onPress={handleEndWorkout}>
            <Text style={text.colorsize}> End Workout </Text>
        </Link>
        <Button onPress={handleAddSet}>Add Set</Button>
      </View>

      <Link to='/WorkoutSelect'
        style={styles.nextContainer}
        onPress={handleNextExercise}>
          <Text style={styles.nextTextStyle}> Next Exercise </Text>
      </Link>


    </View>
  )
}
const text = {
  color: {
    color: 'white',
  },
  colorsize: {
    fontSize: 18,
    color: 'white',

  }
}
const styles = {
  containerStyles: {
    display: 'flex',
    alignItems: 'center',
    height: '97%',
    justifyContent: 'space-between'
  },
  titleContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#9B9B9B',
    width: '100%',
    backgroundColor: 'black',
  },
  titleTextStyle: {
    fontSize: 50,
    color: 'white',
  },
  nextContainer: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#9B9B9B',
    backgroundColor: 'black',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    width: '95%',

  },
  nextTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  repNumberText: {
    fontSize: 100,
    color: 'white',
  },
  repContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 2,
    width: '100%',

  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#9B9B9B',
    backgroundColor: 'black',
    height: 200,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: .8,
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#9B9B9B',
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: .8,
    padding: 20,

  },
  setContainer: {
    flexGrow: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
    endAdd: {
      flexDirection: 'row',
    }
}

export {WorkoutPage};
