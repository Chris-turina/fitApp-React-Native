import React from 'react';
import { View, Text } from 'react-native';
import { SelectCard } from './SelectCard';

const WorkoutSelect = () => {
  return(
    <View>

      <SelectCard
        workoutName='Pull-Ups'
      />

      <SelectCard
        workoutName='Push-Ups'
      />

      <SelectCard
        workoutName='Dips'
      />

      <SelectCard
        workoutName='Leg Raises'
      />

    </View>
  );
};

export {WorkoutSelect};
