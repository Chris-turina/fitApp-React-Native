import React from 'react';
import { View, Text } from 'react-native';
import { SelectCard, Footer } from '../common';
import { Link } from 'react-router-native';

function WorkoutSelect(props) {

  return(
    <View style={styles.container}>

        <SelectCard
          newExercise={props.newExercise}
          workoutName='Pull-Ups'
        />

      <SelectCard
        newExercise={props.newExercise}
        workoutName='Push-Ups'
      />

      <SelectCard
        newExercise={props.newExercise}
        workoutName='Dips'
      />

      <SelectCard
        newExercise={props.newExercise}
        workoutName='Leg Raises'
      />

      <Link to='/'>
        <Footer
          style={styles.footer}
        />
      </Link>

    </View>
  );
};

const styles = {
  container: {
    height: '97%',
    justifyContent: 'space-between',
  },
  footer: {

  }
 }

export {WorkoutSelect};
