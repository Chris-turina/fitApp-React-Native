import React from 'react';
import { View, Text } from 'react-native';
import { SelectCard } from './SelectCard';

function WorkoutSelect(props) {
  return(
    <View>

      <SelectCard
        changeName={props.changeName}
        workoutName='Pull-Ups'
      />

      <SelectCard
        changeName={props.changeName}
        workoutName='Push-Ups'
      />

      <SelectCard
        changeName={props.changeName}
        workoutName='Dips'
      />

      <SelectCard
        changeName={props.changeName}
        workoutName='Leg Raises'
      />

    </View>
  );
};

export {WorkoutSelect};
