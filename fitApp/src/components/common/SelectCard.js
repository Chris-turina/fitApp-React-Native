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
    backgroundColor: 'black',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#9B9B9B',
    borderWidth: 3,
  },
  textStyle: {
    fontSize: 35,
    color: 'white',
  }
};

export {SelectCard};
