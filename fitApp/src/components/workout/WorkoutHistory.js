import React from 'react';
import { View, Text } from 'react-native';
import { WorkoutHistoryCard } from './WorkoutHistoryCard';
import { ExerciseCard } from './ExerciseCard';
import { Rep } from './Rep';

const WorkoutHistory =(props) => {

function listWorkouts(){
  console.log(props.masterList);
}

  return (
    <View>
      <Text onPress={listWorkouts}>press me</Text>
      {props.masterList.map((workoutList, index) =>
        <WorkoutHistoryCard
          exercisez={workoutList.map((exercise, index) =>
            <ExerciseCard
              exercisezes={exercise.exerciseName}
              set={exercise.sets.map((set, index) =>
                <Rep
                  reps={set}
                />
              )}
              key={index}
            />
          )}
          key={index}

        />
      )}
    </View>
  )
}

export {WorkoutHistory};
