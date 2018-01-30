import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Link } from 'react-router-native';

const SelectCard = ({props, workoutName, newExercise}) => {

  function handleWorkoutName(){
    newExercise(workoutName)
  }

  return (
    <Link
      to='/WorkoutPage'
      style={styles.viewStyle}
      onPress={handleWorkoutName}
    >

        <Text
          style={styles.textStyle}>
          {workoutName}
        </Text>

    </Link>
  );
};

const styles = {
  viewStyle: {
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#4A90E2',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 35,
  }
};

export {SelectCard};
