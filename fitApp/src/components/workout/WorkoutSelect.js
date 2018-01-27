import React from 'react';
import { View, Text } from 'react-native';

import { SelectCard } from './SelectCard';

function WorkoutSelect(props) {
  return(
    <View>

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

    </View>
  );
};

export {WorkoutSelect};
